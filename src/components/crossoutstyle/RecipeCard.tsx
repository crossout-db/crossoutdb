import Recipe from "./Recipe";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import _ from "lodash";
import PrimaryButton from "./PrimaryButton";
import { createRecipePath } from "~/lib/recipePath";
import RecipeSummary from "./RecipeSummary";
import { useTranslation } from "next-i18next";
import { ItemFindUniqueOutput } from "~/pages/item/[id]";

export type RecipeContextData = {
    condensedItem: { name: string, id: number, rarityId: number },
    recipePath: string,
    selectedRecipeId: number | undefined,
    price: number,
    active: boolean,
    action: "nothing" | "craft" | "buy"
}[];

type RecipeStateProvider = { value: RecipeContextData, setValue: Dispatch<SetStateAction<RecipeContextData>> };

export const RecipeContext = createContext<RecipeStateProvider | undefined>(undefined);

interface RecipeCardProps {
    data: ItemFindUniqueOutput;
}

const mapRecipesRecursive = (item: ItemFindUniqueOutput, recipePath: string): RecipeContextData => {
    if (!item)
        return [];

    let result: RecipeContextData = [];
    result = [
        ...result,
        {
            condensedItem: { id: item.id, name: item.name, rarityId: item.rarityId },
            recipePath: createRecipePath(recipePath, item.id),
            selectedRecipeId: item.recipes[0]?.id,
            price: item.buyPriceMax ?? 0,
            active: false,
            action: "nothing"
        },
        // @ts-ignore
        ...item.recipes.map(recipe => recipe.ingredients.map(ingredient => mapRecipesRecursive(ingredient.item, createRecipePath(recipePath, item.id)))).flat(2)
    ];
    return result;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ data }) => {
    const { t } = useTranslation(['model']);
    if (!data)
        return <></>

    const [recipeState, setRecipeState] = useState(mapRecipesRecursive(data, ''));

    const recipeStateProvider = {
        value: recipeState,
        setValue: setRecipeState
    };

    return <div className="text-white space-y-2">
        <div className="p-4 flex flex-row items-baseline bg-neutral-800 space-x-4">
            <h1 className="text-2xl">{t("model:recipe")}</h1>
            <PrimaryButton onClick={() => setRecipeState(recipeState.map(x => ({ ...x, active: true })))}>Expand all</PrimaryButton>
            <PrimaryButton onClick={() => setRecipeState(recipeState.map(x => ({ ...x, active: false })))}>Collapse all</PrimaryButton>
        </div>
        <RecipeContext.Provider value={recipeStateProvider}>
            <div className="space-y-2">
                <Recipe item={data} recipePath="" depth={0} />
                <RecipeSummary />
            </div>
        </RecipeContext.Provider>
    </div>
}

export default RecipeCard;
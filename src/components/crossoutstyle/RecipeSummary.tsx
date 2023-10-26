import { useContext } from "react";
import { RecipeContext } from "./RecipeCard";


interface RecipeSummaryProps {
}

const RecipeSummary: React.FC<RecipeSummaryProps> = ({ }) => {
    
    const recipeContext = useContext(RecipeContext);

    if (!recipeContext)
        return <></>;

    const itemsToBuy = recipeContext.value.filter(item => item.action === "buy");
    
    return <div className="space-y-2">
        {itemsToBuy.map(item => <div>{item.condensedItem.name}</div>)}
    </div>
}

export default RecipeSummary;
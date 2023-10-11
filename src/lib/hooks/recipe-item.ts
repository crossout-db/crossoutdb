/* eslint-disable */
import type { Prisma, RecipeItem } from '@prisma/client';
import { useContext } from 'react';
import {
    RequestHandlerContext,
    type GetNextArgs,
    type RequestOptions,
    type InfiniteRequestOptions,
    type PickEnumerable,
    type CheckSelect,
} from '@zenstackhq/swr/runtime';
import * as request from '@zenstackhq/swr/runtime';

export function useMutateRecipeItem() {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const prefixesToMutate = [
        `${endpoint}/recipeItem/find`,
        `${endpoint}/recipeItem/aggregate`,
        `${endpoint}/recipeItem/count`,
        `${endpoint}/recipeItem/groupBy`,
    ];
    const mutate = request.getMutate(prefixesToMutate);

    async function createRecipeItem<T extends Prisma.RecipeItemCreateArgs>(
        args: Prisma.SelectSubset<T, Prisma.RecipeItemCreateArgs>,
    ) {
        return await request.post<CheckSelect<T, RecipeItem, Prisma.RecipeItemGetPayload<T>>, true>(
            `${endpoint}/recipeItem/create`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function createManyRecipeItem<T extends Prisma.RecipeItemCreateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.RecipeItemCreateManyArgs>,
    ) {
        return await request.post<Prisma.BatchPayload, false>(
            `${endpoint}/recipeItem/createMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function updateRecipeItem<T extends Prisma.RecipeItemUpdateArgs>(
        args: Prisma.SelectSubset<T, Prisma.RecipeItemUpdateArgs>,
    ) {
        return await request.put<Prisma.RecipeItemGetPayload<T>, true>(
            `${endpoint}/recipeItem/update`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function updateManyRecipeItem<T extends Prisma.RecipeItemUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.RecipeItemUpdateManyArgs>,
    ) {
        return await request.put<Prisma.BatchPayload, false>(
            `${endpoint}/recipeItem/updateMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function upsertRecipeItem<T extends Prisma.RecipeItemUpsertArgs>(
        args: Prisma.SelectSubset<T, Prisma.RecipeItemUpsertArgs>,
    ) {
        return await request.post<Prisma.RecipeItemGetPayload<T>, true>(
            `${endpoint}/recipeItem/upsert`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function deleteRecipeItem<T extends Prisma.RecipeItemDeleteArgs>(
        args: Prisma.SelectSubset<T, Prisma.RecipeItemDeleteArgs>,
    ) {
        return await request.del<Prisma.RecipeItemGetPayload<T>, true>(
            `${endpoint}/recipeItem/delete`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function deleteManyRecipeItem<T extends Prisma.RecipeItemDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.RecipeItemDeleteManyArgs>,
    ) {
        return await request.del<Prisma.BatchPayload, false>(
            `${endpoint}/recipeItem/deleteMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }
    return {
        createRecipeItem,
        createManyRecipeItem,
        updateRecipeItem,
        updateManyRecipeItem,
        upsertRecipeItem,
        deleteRecipeItem,
        deleteManyRecipeItem,
    };
}

export function useFindManyRecipeItem<T extends Prisma.RecipeItemFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.RecipeItemFindManyArgs>,
    options?: RequestOptions<Array<Prisma.RecipeItemGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Array<Prisma.RecipeItemGetPayload<T>>>(`${endpoint}/recipeItem/findMany`, args, options, fetch);
}

export function useInfiniteFindManyRecipeItem<
    T extends Prisma.RecipeItemFindManyArgs,
    R extends Array<Prisma.RecipeItemGetPayload<T>>,
>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.RecipeItemFindManyArgs> | undefined, R>,
    options?: InfiniteRequestOptions<Array<Prisma.RecipeItemGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.infiniteGet<
        Prisma.SelectSubset<T, Prisma.RecipeItemFindManyArgs> | undefined,
        Array<Prisma.RecipeItemGetPayload<T>>
    >(`${endpoint}/recipeItem/findMany`, getNextArgs, options, fetch);
}

export function useFindUniqueRecipeItem<T extends Prisma.RecipeItemFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.RecipeItemFindUniqueArgs>,
    options?: RequestOptions<Prisma.RecipeItemGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.RecipeItemGetPayload<T>>(`${endpoint}/recipeItem/findUnique`, args, options, fetch);
}

export function useFindFirstRecipeItem<T extends Prisma.RecipeItemFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.RecipeItemFindFirstArgs>,
    options?: RequestOptions<Prisma.RecipeItemGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.RecipeItemGetPayload<T>>(`${endpoint}/recipeItem/findFirst`, args, options, fetch);
}

export function useAggregateRecipeItem<T extends Prisma.RecipeItemAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.RecipeItemAggregateArgs>,
    options?: RequestOptions<Prisma.GetRecipeItemAggregateType<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.GetRecipeItemAggregateType<T>>(`${endpoint}/recipeItem/aggregate`, args, options, fetch);
}

export function useGroupByRecipeItem<
    T extends Prisma.RecipeItemGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.RecipeItemGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.RecipeItemGroupByArgs['orderBy'] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
    ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
    ByValid extends Prisma.Has<ByFields, OrderFields>,
    HavingFields extends Prisma.GetHavingFields<T['having']>,
    HavingValid extends Prisma.Has<ByFields, HavingFields>,
    ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
    InputErrors extends ByEmpty extends Prisma.True
        ? `Error: "by" must not be empty.`
        : HavingValid extends Prisma.False
        ? {
              [P in HavingFields]: P extends ByFields
                  ? never
                  : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Prisma.Keys<T>
        ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
            : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Prisma.Keys<T>
        ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
            : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends Prisma.True
        ? {}
        : {
              [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
>(
    args?: Prisma.SubsetIntersection<T, Prisma.RecipeItemGroupByArgs, OrderByArg> & InputErrors,
    options?: RequestOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.RecipeItemGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.RecipeItemGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.RecipeItemGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.RecipeItemGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.RecipeItemGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.RecipeItemGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.RecipeItemGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.RecipeItemGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >(`${endpoint}/recipeItem/groupBy`, args, options, fetch);
}

export function useCountRecipeItem<T extends Prisma.RecipeItemCountArgs>(
    args?: Prisma.Subset<T, Prisma.RecipeItemCountArgs>,
    options?: RequestOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.RecipeItemCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.RecipeItemCountAggregateOutputType>
            : number
    >(`${endpoint}/recipeItem/count`, args, options, fetch);
}

/* eslint-disable */
import type { Prisma, Recipe } from '@prisma/client';
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

export function useMutateRecipe() {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const prefixesToMutate = [
        `${endpoint}/recipe/find`,
        `${endpoint}/recipe/aggregate`,
        `${endpoint}/recipe/count`,
        `${endpoint}/recipe/groupBy`,
    ];
    const mutate = request.getMutate(prefixesToMutate);

    async function createRecipe<T extends Prisma.RecipeCreateArgs>(
        args: Prisma.SelectSubset<T, Prisma.RecipeCreateArgs>,
    ) {
        return await request.post<CheckSelect<T, Recipe, Prisma.RecipeGetPayload<T>>, true>(
            `${endpoint}/recipe/create`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function createManyRecipe<T extends Prisma.RecipeCreateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.RecipeCreateManyArgs>,
    ) {
        return await request.post<Prisma.BatchPayload, false>(
            `${endpoint}/recipe/createMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function updateRecipe<T extends Prisma.RecipeUpdateArgs>(
        args: Prisma.SelectSubset<T, Prisma.RecipeUpdateArgs>,
    ) {
        return await request.put<Prisma.RecipeGetPayload<T>, true>(
            `${endpoint}/recipe/update`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function updateManyRecipe<T extends Prisma.RecipeUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.RecipeUpdateManyArgs>,
    ) {
        return await request.put<Prisma.BatchPayload, false>(
            `${endpoint}/recipe/updateMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function upsertRecipe<T extends Prisma.RecipeUpsertArgs>(
        args: Prisma.SelectSubset<T, Prisma.RecipeUpsertArgs>,
    ) {
        return await request.post<Prisma.RecipeGetPayload<T>, true>(
            `${endpoint}/recipe/upsert`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function deleteRecipe<T extends Prisma.RecipeDeleteArgs>(
        args: Prisma.SelectSubset<T, Prisma.RecipeDeleteArgs>,
    ) {
        return await request.del<Prisma.RecipeGetPayload<T>, true>(
            `${endpoint}/recipe/delete`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function deleteManyRecipe<T extends Prisma.RecipeDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.RecipeDeleteManyArgs>,
    ) {
        return await request.del<Prisma.BatchPayload, false>(
            `${endpoint}/recipe/deleteMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }
    return {
        createRecipe,
        createManyRecipe,
        updateRecipe,
        updateManyRecipe,
        upsertRecipe,
        deleteRecipe,
        deleteManyRecipe,
    };
}

export function useFindManyRecipe<T extends Prisma.RecipeFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.RecipeFindManyArgs>,
    options?: RequestOptions<Array<Prisma.RecipeGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Array<Prisma.RecipeGetPayload<T>>>(`${endpoint}/recipe/findMany`, args, options, fetch);
}

export function useInfiniteFindManyRecipe<
    T extends Prisma.RecipeFindManyArgs,
    R extends Array<Prisma.RecipeGetPayload<T>>,
>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.RecipeFindManyArgs> | undefined, R>,
    options?: InfiniteRequestOptions<Array<Prisma.RecipeGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.infiniteGet<
        Prisma.SelectSubset<T, Prisma.RecipeFindManyArgs> | undefined,
        Array<Prisma.RecipeGetPayload<T>>
    >(`${endpoint}/recipe/findMany`, getNextArgs, options, fetch);
}

export function useFindUniqueRecipe<T extends Prisma.RecipeFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.RecipeFindUniqueArgs>,
    options?: RequestOptions<Prisma.RecipeGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.RecipeGetPayload<T>>(`${endpoint}/recipe/findUnique`, args, options, fetch);
}

export function useFindFirstRecipe<T extends Prisma.RecipeFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.RecipeFindFirstArgs>,
    options?: RequestOptions<Prisma.RecipeGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.RecipeGetPayload<T>>(`${endpoint}/recipe/findFirst`, args, options, fetch);
}

export function useAggregateRecipe<T extends Prisma.RecipeAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.RecipeAggregateArgs>,
    options?: RequestOptions<Prisma.GetRecipeAggregateType<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.GetRecipeAggregateType<T>>(`${endpoint}/recipe/aggregate`, args, options, fetch);
}

export function useGroupByRecipe<
    T extends Prisma.RecipeGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.RecipeGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.RecipeGroupByArgs['orderBy'] },
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
    args?: Prisma.SubsetIntersection<T, Prisma.RecipeGroupByArgs, OrderByArg> & InputErrors,
    options?: RequestOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.RecipeGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.RecipeGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.RecipeGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.RecipeGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.RecipeGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.RecipeGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.RecipeGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.RecipeGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >(`${endpoint}/recipe/groupBy`, args, options, fetch);
}

export function useCountRecipe<T extends Prisma.RecipeCountArgs>(
    args?: Prisma.Subset<T, Prisma.RecipeCountArgs>,
    options?: RequestOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.RecipeCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.RecipeCountAggregateOutputType>
            : number
    >(`${endpoint}/recipe/count`, args, options, fetch);
}

/* eslint-disable */
import type { Prisma, Category } from '@prisma/client';
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

export function useMutateCategory() {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const prefixesToMutate = [
        `${endpoint}/category/find`,
        `${endpoint}/category/aggregate`,
        `${endpoint}/category/count`,
        `${endpoint}/category/groupBy`,
    ];
    const mutate = request.getMutate(prefixesToMutate);

    async function createCategory<T extends Prisma.CategoryCreateArgs>(
        args: Prisma.SelectSubset<T, Prisma.CategoryCreateArgs>,
    ) {
        return await request.post<CheckSelect<T, Category, Prisma.CategoryGetPayload<T>>, true>(
            `${endpoint}/category/create`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function createManyCategory<T extends Prisma.CategoryCreateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.CategoryCreateManyArgs>,
    ) {
        return await request.post<Prisma.BatchPayload, false>(
            `${endpoint}/category/createMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function updateCategory<T extends Prisma.CategoryUpdateArgs>(
        args: Prisma.SelectSubset<T, Prisma.CategoryUpdateArgs>,
    ) {
        return await request.put<Prisma.CategoryGetPayload<T>, true>(
            `${endpoint}/category/update`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function updateManyCategory<T extends Prisma.CategoryUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.CategoryUpdateManyArgs>,
    ) {
        return await request.put<Prisma.BatchPayload, false>(
            `${endpoint}/category/updateMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function upsertCategory<T extends Prisma.CategoryUpsertArgs>(
        args: Prisma.SelectSubset<T, Prisma.CategoryUpsertArgs>,
    ) {
        return await request.post<Prisma.CategoryGetPayload<T>, true>(
            `${endpoint}/category/upsert`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function deleteCategory<T extends Prisma.CategoryDeleteArgs>(
        args: Prisma.SelectSubset<T, Prisma.CategoryDeleteArgs>,
    ) {
        return await request.del<Prisma.CategoryGetPayload<T>, true>(
            `${endpoint}/category/delete`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function deleteManyCategory<T extends Prisma.CategoryDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.CategoryDeleteManyArgs>,
    ) {
        return await request.del<Prisma.BatchPayload, false>(
            `${endpoint}/category/deleteMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }
    return {
        createCategory,
        createManyCategory,
        updateCategory,
        updateManyCategory,
        upsertCategory,
        deleteCategory,
        deleteManyCategory,
    };
}

export function useFindManyCategory<T extends Prisma.CategoryFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.CategoryFindManyArgs>,
    options?: RequestOptions<Array<Prisma.CategoryGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Array<Prisma.CategoryGetPayload<T>>>(`${endpoint}/category/findMany`, args, options, fetch);
}

export function useInfiniteFindManyCategory<
    T extends Prisma.CategoryFindManyArgs,
    R extends Array<Prisma.CategoryGetPayload<T>>,
>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.CategoryFindManyArgs> | undefined, R>,
    options?: InfiniteRequestOptions<Array<Prisma.CategoryGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.infiniteGet<
        Prisma.SelectSubset<T, Prisma.CategoryFindManyArgs> | undefined,
        Array<Prisma.CategoryGetPayload<T>>
    >(`${endpoint}/category/findMany`, getNextArgs, options, fetch);
}

export function useFindUniqueCategory<T extends Prisma.CategoryFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.CategoryFindUniqueArgs>,
    options?: RequestOptions<Prisma.CategoryGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.CategoryGetPayload<T>>(`${endpoint}/category/findUnique`, args, options, fetch);
}

export function useFindFirstCategory<T extends Prisma.CategoryFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.CategoryFindFirstArgs>,
    options?: RequestOptions<Prisma.CategoryGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.CategoryGetPayload<T>>(`${endpoint}/category/findFirst`, args, options, fetch);
}

export function useAggregateCategory<T extends Prisma.CategoryAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.CategoryAggregateArgs>,
    options?: RequestOptions<Prisma.GetCategoryAggregateType<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.GetCategoryAggregateType<T>>(`${endpoint}/category/aggregate`, args, options, fetch);
}

export function useGroupByCategory<
    T extends Prisma.CategoryGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.CategoryGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.CategoryGroupByArgs['orderBy'] },
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
    args?: Prisma.SubsetIntersection<T, Prisma.CategoryGroupByArgs, OrderByArg> & InputErrors,
    options?: RequestOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.CategoryGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.CategoryGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.CategoryGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.CategoryGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.CategoryGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.CategoryGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.CategoryGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.CategoryGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >(`${endpoint}/category/groupBy`, args, options, fetch);
}

export function useCountCategory<T extends Prisma.CategoryCountArgs>(
    args?: Prisma.Subset<T, Prisma.CategoryCountArgs>,
    options?: RequestOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.CategoryCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.CategoryCountAggregateOutputType>
            : number
    >(`${endpoint}/category/count`, args, options, fetch);
}

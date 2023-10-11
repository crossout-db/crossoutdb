/* eslint-disable */
import type { Prisma, Item } from '@prisma/client';
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

export function useMutateItem() {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const prefixesToMutate = [
        `${endpoint}/item/find`,
        `${endpoint}/item/aggregate`,
        `${endpoint}/item/count`,
        `${endpoint}/item/groupBy`,
    ];
    const mutate = request.getMutate(prefixesToMutate);

    async function createItem<T extends Prisma.ItemCreateArgs>(args: Prisma.SelectSubset<T, Prisma.ItemCreateArgs>) {
        return await request.post<CheckSelect<T, Item, Prisma.ItemGetPayload<T>>, true>(
            `${endpoint}/item/create`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function createManyItem<T extends Prisma.ItemCreateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.ItemCreateManyArgs>,
    ) {
        return await request.post<Prisma.BatchPayload, false>(
            `${endpoint}/item/createMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function updateItem<T extends Prisma.ItemUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.ItemUpdateArgs>) {
        return await request.put<Prisma.ItemGetPayload<T>, true>(`${endpoint}/item/update`, args, mutate, fetch, true);
    }

    async function updateManyItem<T extends Prisma.ItemUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.ItemUpdateManyArgs>,
    ) {
        return await request.put<Prisma.BatchPayload, false>(`${endpoint}/item/updateMany`, args, mutate, fetch, false);
    }

    async function upsertItem<T extends Prisma.ItemUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.ItemUpsertArgs>) {
        return await request.post<Prisma.ItemGetPayload<T>, true>(`${endpoint}/item/upsert`, args, mutate, fetch, true);
    }

    async function deleteItem<T extends Prisma.ItemDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.ItemDeleteArgs>) {
        return await request.del<Prisma.ItemGetPayload<T>, true>(`${endpoint}/item/delete`, args, mutate, fetch, true);
    }

    async function deleteManyItem<T extends Prisma.ItemDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.ItemDeleteManyArgs>,
    ) {
        return await request.del<Prisma.BatchPayload, false>(`${endpoint}/item/deleteMany`, args, mutate, fetch, false);
    }
    return { createItem, createManyItem, updateItem, updateManyItem, upsertItem, deleteItem, deleteManyItem };
}

export function useFindManyItem<T extends Prisma.ItemFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ItemFindManyArgs>,
    options?: RequestOptions<Array<Prisma.ItemGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Array<Prisma.ItemGetPayload<T>>>(`${endpoint}/item/findMany`, args, options, fetch);
}

export function useInfiniteFindManyItem<T extends Prisma.ItemFindManyArgs, R extends Array<Prisma.ItemGetPayload<T>>>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.ItemFindManyArgs> | undefined, R>,
    options?: InfiniteRequestOptions<Array<Prisma.ItemGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.infiniteGet<
        Prisma.SelectSubset<T, Prisma.ItemFindManyArgs> | undefined,
        Array<Prisma.ItemGetPayload<T>>
    >(`${endpoint}/item/findMany`, getNextArgs, options, fetch);
}

export function useFindUniqueItem<T extends Prisma.ItemFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ItemFindUniqueArgs>,
    options?: RequestOptions<Prisma.ItemGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.ItemGetPayload<T>>(`${endpoint}/item/findUnique`, args, options, fetch);
}

export function useFindFirstItem<T extends Prisma.ItemFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ItemFindFirstArgs>,
    options?: RequestOptions<Prisma.ItemGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.ItemGetPayload<T>>(`${endpoint}/item/findFirst`, args, options, fetch);
}

export function useAggregateItem<T extends Prisma.ItemAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.ItemAggregateArgs>,
    options?: RequestOptions<Prisma.GetItemAggregateType<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.GetItemAggregateType<T>>(`${endpoint}/item/aggregate`, args, options, fetch);
}

export function useGroupByItem<
    T extends Prisma.ItemGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.ItemGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.ItemGroupByArgs['orderBy'] },
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
    args?: Prisma.SubsetIntersection<T, Prisma.ItemGroupByArgs, OrderByArg> & InputErrors,
    options?: RequestOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.ItemGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.ItemGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.ItemGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.ItemGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.ItemGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.ItemGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.ItemGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.ItemGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >(`${endpoint}/item/groupBy`, args, options, fetch);
}

export function useCountItem<T extends Prisma.ItemCountArgs>(
    args?: Prisma.Subset<T, Prisma.ItemCountArgs>,
    options?: RequestOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ItemCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ItemCountAggregateOutputType>
            : number
    >(`${endpoint}/item/count`, args, options, fetch);
}

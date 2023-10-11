/* eslint-disable */
import type { Prisma, ItemStats } from '@prisma/client';
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

export function useMutateItemStats() {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const prefixesToMutate = [
        `${endpoint}/itemStats/find`,
        `${endpoint}/itemStats/aggregate`,
        `${endpoint}/itemStats/count`,
        `${endpoint}/itemStats/groupBy`,
    ];
    const mutate = request.getMutate(prefixesToMutate);

    async function createItemStats<T extends Prisma.ItemStatsCreateArgs>(
        args: Prisma.SelectSubset<T, Prisma.ItemStatsCreateArgs>,
    ) {
        return await request.post<CheckSelect<T, ItemStats, Prisma.ItemStatsGetPayload<T>>, true>(
            `${endpoint}/itemStats/create`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function createManyItemStats<T extends Prisma.ItemStatsCreateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.ItemStatsCreateManyArgs>,
    ) {
        return await request.post<Prisma.BatchPayload, false>(
            `${endpoint}/itemStats/createMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function updateItemStats<T extends Prisma.ItemStatsUpdateArgs>(
        args: Prisma.SelectSubset<T, Prisma.ItemStatsUpdateArgs>,
    ) {
        return await request.put<Prisma.ItemStatsGetPayload<T>, true>(
            `${endpoint}/itemStats/update`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function updateManyItemStats<T extends Prisma.ItemStatsUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.ItemStatsUpdateManyArgs>,
    ) {
        return await request.put<Prisma.BatchPayload, false>(
            `${endpoint}/itemStats/updateMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function upsertItemStats<T extends Prisma.ItemStatsUpsertArgs>(
        args: Prisma.SelectSubset<T, Prisma.ItemStatsUpsertArgs>,
    ) {
        return await request.post<Prisma.ItemStatsGetPayload<T>, true>(
            `${endpoint}/itemStats/upsert`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function deleteItemStats<T extends Prisma.ItemStatsDeleteArgs>(
        args: Prisma.SelectSubset<T, Prisma.ItemStatsDeleteArgs>,
    ) {
        return await request.del<Prisma.ItemStatsGetPayload<T>, true>(
            `${endpoint}/itemStats/delete`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function deleteManyItemStats<T extends Prisma.ItemStatsDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.ItemStatsDeleteManyArgs>,
    ) {
        return await request.del<Prisma.BatchPayload, false>(
            `${endpoint}/itemStats/deleteMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }
    return {
        createItemStats,
        createManyItemStats,
        updateItemStats,
        updateManyItemStats,
        upsertItemStats,
        deleteItemStats,
        deleteManyItemStats,
    };
}

export function useFindManyItemStats<T extends Prisma.ItemStatsFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ItemStatsFindManyArgs>,
    options?: RequestOptions<Array<Prisma.ItemStatsGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Array<Prisma.ItemStatsGetPayload<T>>>(`${endpoint}/itemStats/findMany`, args, options, fetch);
}

export function useInfiniteFindManyItemStats<
    T extends Prisma.ItemStatsFindManyArgs,
    R extends Array<Prisma.ItemStatsGetPayload<T>>,
>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.ItemStatsFindManyArgs> | undefined, R>,
    options?: InfiniteRequestOptions<Array<Prisma.ItemStatsGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.infiniteGet<
        Prisma.SelectSubset<T, Prisma.ItemStatsFindManyArgs> | undefined,
        Array<Prisma.ItemStatsGetPayload<T>>
    >(`${endpoint}/itemStats/findMany`, getNextArgs, options, fetch);
}

export function useFindUniqueItemStats<T extends Prisma.ItemStatsFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ItemStatsFindUniqueArgs>,
    options?: RequestOptions<Prisma.ItemStatsGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.ItemStatsGetPayload<T>>(`${endpoint}/itemStats/findUnique`, args, options, fetch);
}

export function useFindFirstItemStats<T extends Prisma.ItemStatsFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ItemStatsFindFirstArgs>,
    options?: RequestOptions<Prisma.ItemStatsGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.ItemStatsGetPayload<T>>(`${endpoint}/itemStats/findFirst`, args, options, fetch);
}

export function useAggregateItemStats<T extends Prisma.ItemStatsAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.ItemStatsAggregateArgs>,
    options?: RequestOptions<Prisma.GetItemStatsAggregateType<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.GetItemStatsAggregateType<T>>(`${endpoint}/itemStats/aggregate`, args, options, fetch);
}

export function useGroupByItemStats<
    T extends Prisma.ItemStatsGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.ItemStatsGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.ItemStatsGroupByArgs['orderBy'] },
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
    args?: Prisma.SubsetIntersection<T, Prisma.ItemStatsGroupByArgs, OrderByArg> & InputErrors,
    options?: RequestOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.ItemStatsGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.ItemStatsGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.ItemStatsGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.ItemStatsGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.ItemStatsGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.ItemStatsGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.ItemStatsGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.ItemStatsGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >(`${endpoint}/itemStats/groupBy`, args, options, fetch);
}

export function useCountItemStats<T extends Prisma.ItemStatsCountArgs>(
    args?: Prisma.Subset<T, Prisma.ItemStatsCountArgs>,
    options?: RequestOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ItemStatsCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ItemStatsCountAggregateOutputType>
            : number
    >(`${endpoint}/itemStats/count`, args, options, fetch);
}

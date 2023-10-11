/* eslint-disable */
import type { Prisma, SynergyItem } from '@prisma/client';
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

export function useMutateSynergyItem() {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const prefixesToMutate = [
        `${endpoint}/synergyItem/find`,
        `${endpoint}/synergyItem/aggregate`,
        `${endpoint}/synergyItem/count`,
        `${endpoint}/synergyItem/groupBy`,
    ];
    const mutate = request.getMutate(prefixesToMutate);

    async function createSynergyItem<T extends Prisma.SynergyItemCreateArgs>(
        args: Prisma.SelectSubset<T, Prisma.SynergyItemCreateArgs>,
    ) {
        return await request.post<CheckSelect<T, SynergyItem, Prisma.SynergyItemGetPayload<T>>, true>(
            `${endpoint}/synergyItem/create`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function createManySynergyItem<T extends Prisma.SynergyItemCreateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.SynergyItemCreateManyArgs>,
    ) {
        return await request.post<Prisma.BatchPayload, false>(
            `${endpoint}/synergyItem/createMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function updateSynergyItem<T extends Prisma.SynergyItemUpdateArgs>(
        args: Prisma.SelectSubset<T, Prisma.SynergyItemUpdateArgs>,
    ) {
        return await request.put<Prisma.SynergyItemGetPayload<T>, true>(
            `${endpoint}/synergyItem/update`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function updateManySynergyItem<T extends Prisma.SynergyItemUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.SynergyItemUpdateManyArgs>,
    ) {
        return await request.put<Prisma.BatchPayload, false>(
            `${endpoint}/synergyItem/updateMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function upsertSynergyItem<T extends Prisma.SynergyItemUpsertArgs>(
        args: Prisma.SelectSubset<T, Prisma.SynergyItemUpsertArgs>,
    ) {
        return await request.post<Prisma.SynergyItemGetPayload<T>, true>(
            `${endpoint}/synergyItem/upsert`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function deleteSynergyItem<T extends Prisma.SynergyItemDeleteArgs>(
        args: Prisma.SelectSubset<T, Prisma.SynergyItemDeleteArgs>,
    ) {
        return await request.del<Prisma.SynergyItemGetPayload<T>, true>(
            `${endpoint}/synergyItem/delete`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function deleteManySynergyItem<T extends Prisma.SynergyItemDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.SynergyItemDeleteManyArgs>,
    ) {
        return await request.del<Prisma.BatchPayload, false>(
            `${endpoint}/synergyItem/deleteMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }
    return {
        createSynergyItem,
        createManySynergyItem,
        updateSynergyItem,
        updateManySynergyItem,
        upsertSynergyItem,
        deleteSynergyItem,
        deleteManySynergyItem,
    };
}

export function useFindManySynergyItem<T extends Prisma.SynergyItemFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.SynergyItemFindManyArgs>,
    options?: RequestOptions<Array<Prisma.SynergyItemGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Array<Prisma.SynergyItemGetPayload<T>>>(
        `${endpoint}/synergyItem/findMany`,
        args,
        options,
        fetch,
    );
}

export function useInfiniteFindManySynergyItem<
    T extends Prisma.SynergyItemFindManyArgs,
    R extends Array<Prisma.SynergyItemGetPayload<T>>,
>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.SynergyItemFindManyArgs> | undefined, R>,
    options?: InfiniteRequestOptions<Array<Prisma.SynergyItemGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.infiniteGet<
        Prisma.SelectSubset<T, Prisma.SynergyItemFindManyArgs> | undefined,
        Array<Prisma.SynergyItemGetPayload<T>>
    >(`${endpoint}/synergyItem/findMany`, getNextArgs, options, fetch);
}

export function useFindUniqueSynergyItem<T extends Prisma.SynergyItemFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.SynergyItemFindUniqueArgs>,
    options?: RequestOptions<Prisma.SynergyItemGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.SynergyItemGetPayload<T>>(`${endpoint}/synergyItem/findUnique`, args, options, fetch);
}

export function useFindFirstSynergyItem<T extends Prisma.SynergyItemFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.SynergyItemFindFirstArgs>,
    options?: RequestOptions<Prisma.SynergyItemGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.SynergyItemGetPayload<T>>(`${endpoint}/synergyItem/findFirst`, args, options, fetch);
}

export function useAggregateSynergyItem<T extends Prisma.SynergyItemAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.SynergyItemAggregateArgs>,
    options?: RequestOptions<Prisma.GetSynergyItemAggregateType<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.GetSynergyItemAggregateType<T>>(
        `${endpoint}/synergyItem/aggregate`,
        args,
        options,
        fetch,
    );
}

export function useGroupBySynergyItem<
    T extends Prisma.SynergyItemGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.SynergyItemGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.SynergyItemGroupByArgs['orderBy'] },
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
    args?: Prisma.SubsetIntersection<T, Prisma.SynergyItemGroupByArgs, OrderByArg> & InputErrors,
    options?: RequestOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.SynergyItemGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.SynergyItemGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.SynergyItemGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.SynergyItemGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.SynergyItemGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.SynergyItemGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.SynergyItemGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.SynergyItemGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >(`${endpoint}/synergyItem/groupBy`, args, options, fetch);
}

export function useCountSynergyItem<T extends Prisma.SynergyItemCountArgs>(
    args?: Prisma.Subset<T, Prisma.SynergyItemCountArgs>,
    options?: RequestOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.SynergyItemCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.SynergyItemCountAggregateOutputType>
            : number
    >(`${endpoint}/synergyItem/count`, args, options, fetch);
}

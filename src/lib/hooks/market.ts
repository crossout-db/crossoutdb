/* eslint-disable */
import type { Prisma, Market } from '@prisma/client';
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

export function useMutateMarket() {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const prefixesToMutate = [
        `${endpoint}/market/find`,
        `${endpoint}/market/aggregate`,
        `${endpoint}/market/count`,
        `${endpoint}/market/groupBy`,
    ];
    const mutate = request.getMutate(prefixesToMutate);

    async function createMarket<T extends Prisma.MarketCreateArgs>(
        args: Prisma.SelectSubset<T, Prisma.MarketCreateArgs>,
    ) {
        return await request.post<CheckSelect<T, Market, Prisma.MarketGetPayload<T>>, true>(
            `${endpoint}/market/create`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function createManyMarket<T extends Prisma.MarketCreateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.MarketCreateManyArgs>,
    ) {
        return await request.post<Prisma.BatchPayload, false>(
            `${endpoint}/market/createMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function updateMarket<T extends Prisma.MarketUpdateArgs>(
        args: Prisma.SelectSubset<T, Prisma.MarketUpdateArgs>,
    ) {
        return await request.put<Prisma.MarketGetPayload<T>, true>(
            `${endpoint}/market/update`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function updateManyMarket<T extends Prisma.MarketUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.MarketUpdateManyArgs>,
    ) {
        return await request.put<Prisma.BatchPayload, false>(
            `${endpoint}/market/updateMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function upsertMarket<T extends Prisma.MarketUpsertArgs>(
        args: Prisma.SelectSubset<T, Prisma.MarketUpsertArgs>,
    ) {
        return await request.post<Prisma.MarketGetPayload<T>, true>(
            `${endpoint}/market/upsert`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function deleteMarket<T extends Prisma.MarketDeleteArgs>(
        args: Prisma.SelectSubset<T, Prisma.MarketDeleteArgs>,
    ) {
        return await request.del<Prisma.MarketGetPayload<T>, true>(
            `${endpoint}/market/delete`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function deleteManyMarket<T extends Prisma.MarketDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.MarketDeleteManyArgs>,
    ) {
        return await request.del<Prisma.BatchPayload, false>(
            `${endpoint}/market/deleteMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }
    return {
        createMarket,
        createManyMarket,
        updateMarket,
        updateManyMarket,
        upsertMarket,
        deleteMarket,
        deleteManyMarket,
    };
}

export function useFindManyMarket<T extends Prisma.MarketFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.MarketFindManyArgs>,
    options?: RequestOptions<Array<Prisma.MarketGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Array<Prisma.MarketGetPayload<T>>>(`${endpoint}/market/findMany`, args, options, fetch);
}

export function useInfiniteFindManyMarket<
    T extends Prisma.MarketFindManyArgs,
    R extends Array<Prisma.MarketGetPayload<T>>,
>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.MarketFindManyArgs> | undefined, R>,
    options?: InfiniteRequestOptions<Array<Prisma.MarketGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.infiniteGet<
        Prisma.SelectSubset<T, Prisma.MarketFindManyArgs> | undefined,
        Array<Prisma.MarketGetPayload<T>>
    >(`${endpoint}/market/findMany`, getNextArgs, options, fetch);
}

export function useFindUniqueMarket<T extends Prisma.MarketFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.MarketFindUniqueArgs>,
    options?: RequestOptions<Prisma.MarketGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.MarketGetPayload<T>>(`${endpoint}/market/findUnique`, args, options, fetch);
}

export function useFindFirstMarket<T extends Prisma.MarketFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.MarketFindFirstArgs>,
    options?: RequestOptions<Prisma.MarketGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.MarketGetPayload<T>>(`${endpoint}/market/findFirst`, args, options, fetch);
}

export function useAggregateMarket<T extends Prisma.MarketAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.MarketAggregateArgs>,
    options?: RequestOptions<Prisma.GetMarketAggregateType<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.GetMarketAggregateType<T>>(`${endpoint}/market/aggregate`, args, options, fetch);
}

export function useGroupByMarket<
    T extends Prisma.MarketGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.MarketGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.MarketGroupByArgs['orderBy'] },
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
    args?: Prisma.SubsetIntersection<T, Prisma.MarketGroupByArgs, OrderByArg> & InputErrors,
    options?: RequestOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.MarketGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.MarketGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.MarketGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.MarketGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.MarketGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.MarketGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.MarketGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.MarketGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >(`${endpoint}/market/groupBy`, args, options, fetch);
}

export function useCountMarket<T extends Prisma.MarketCountArgs>(
    args?: Prisma.Subset<T, Prisma.MarketCountArgs>,
    options?: RequestOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.MarketCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.MarketCountAggregateOutputType>
            : number
    >(`${endpoint}/market/count`, args, options, fetch);
}

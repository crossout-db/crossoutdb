/* eslint-disable */
import type { Prisma, BadgeExchange } from '@prisma/client';
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

export function useMutateBadgeExchange() {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const prefixesToMutate = [
        `${endpoint}/badgeExchange/find`,
        `${endpoint}/badgeExchange/aggregate`,
        `${endpoint}/badgeExchange/count`,
        `${endpoint}/badgeExchange/groupBy`,
    ];
    const mutate = request.getMutate(prefixesToMutate);

    async function createBadgeExchange<T extends Prisma.BadgeExchangeCreateArgs>(
        args: Prisma.SelectSubset<T, Prisma.BadgeExchangeCreateArgs>,
    ) {
        return await request.post<CheckSelect<T, BadgeExchange, Prisma.BadgeExchangeGetPayload<T>>, true>(
            `${endpoint}/badgeExchange/create`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function createManyBadgeExchange<T extends Prisma.BadgeExchangeCreateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.BadgeExchangeCreateManyArgs>,
    ) {
        return await request.post<Prisma.BatchPayload, false>(
            `${endpoint}/badgeExchange/createMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function updateBadgeExchange<T extends Prisma.BadgeExchangeUpdateArgs>(
        args: Prisma.SelectSubset<T, Prisma.BadgeExchangeUpdateArgs>,
    ) {
        return await request.put<Prisma.BadgeExchangeGetPayload<T>, true>(
            `${endpoint}/badgeExchange/update`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function updateManyBadgeExchange<T extends Prisma.BadgeExchangeUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.BadgeExchangeUpdateManyArgs>,
    ) {
        return await request.put<Prisma.BatchPayload, false>(
            `${endpoint}/badgeExchange/updateMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function upsertBadgeExchange<T extends Prisma.BadgeExchangeUpsertArgs>(
        args: Prisma.SelectSubset<T, Prisma.BadgeExchangeUpsertArgs>,
    ) {
        return await request.post<Prisma.BadgeExchangeGetPayload<T>, true>(
            `${endpoint}/badgeExchange/upsert`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function deleteBadgeExchange<T extends Prisma.BadgeExchangeDeleteArgs>(
        args: Prisma.SelectSubset<T, Prisma.BadgeExchangeDeleteArgs>,
    ) {
        return await request.del<Prisma.BadgeExchangeGetPayload<T>, true>(
            `${endpoint}/badgeExchange/delete`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function deleteManyBadgeExchange<T extends Prisma.BadgeExchangeDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.BadgeExchangeDeleteManyArgs>,
    ) {
        return await request.del<Prisma.BatchPayload, false>(
            `${endpoint}/badgeExchange/deleteMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }
    return {
        createBadgeExchange,
        createManyBadgeExchange,
        updateBadgeExchange,
        updateManyBadgeExchange,
        upsertBadgeExchange,
        deleteBadgeExchange,
        deleteManyBadgeExchange,
    };
}

export function useFindManyBadgeExchange<T extends Prisma.BadgeExchangeFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.BadgeExchangeFindManyArgs>,
    options?: RequestOptions<Array<Prisma.BadgeExchangeGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Array<Prisma.BadgeExchangeGetPayload<T>>>(
        `${endpoint}/badgeExchange/findMany`,
        args,
        options,
        fetch,
    );
}

export function useInfiniteFindManyBadgeExchange<
    T extends Prisma.BadgeExchangeFindManyArgs,
    R extends Array<Prisma.BadgeExchangeGetPayload<T>>,
>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.BadgeExchangeFindManyArgs> | undefined, R>,
    options?: InfiniteRequestOptions<Array<Prisma.BadgeExchangeGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.infiniteGet<
        Prisma.SelectSubset<T, Prisma.BadgeExchangeFindManyArgs> | undefined,
        Array<Prisma.BadgeExchangeGetPayload<T>>
    >(`${endpoint}/badgeExchange/findMany`, getNextArgs, options, fetch);
}

export function useFindUniqueBadgeExchange<T extends Prisma.BadgeExchangeFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.BadgeExchangeFindUniqueArgs>,
    options?: RequestOptions<Prisma.BadgeExchangeGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.BadgeExchangeGetPayload<T>>(`${endpoint}/badgeExchange/findUnique`, args, options, fetch);
}

export function useFindFirstBadgeExchange<T extends Prisma.BadgeExchangeFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.BadgeExchangeFindFirstArgs>,
    options?: RequestOptions<Prisma.BadgeExchangeGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.BadgeExchangeGetPayload<T>>(`${endpoint}/badgeExchange/findFirst`, args, options, fetch);
}

export function useAggregateBadgeExchange<T extends Prisma.BadgeExchangeAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.BadgeExchangeAggregateArgs>,
    options?: RequestOptions<Prisma.GetBadgeExchangeAggregateType<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.GetBadgeExchangeAggregateType<T>>(
        `${endpoint}/badgeExchange/aggregate`,
        args,
        options,
        fetch,
    );
}

export function useGroupByBadgeExchange<
    T extends Prisma.BadgeExchangeGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.BadgeExchangeGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.BadgeExchangeGroupByArgs['orderBy'] },
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
    args?: Prisma.SubsetIntersection<T, Prisma.BadgeExchangeGroupByArgs, OrderByArg> & InputErrors,
    options?: RequestOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.BadgeExchangeGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.BadgeExchangeGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.BadgeExchangeGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.BadgeExchangeGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.BadgeExchangeGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.BadgeExchangeGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.BadgeExchangeGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.BadgeExchangeGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >(`${endpoint}/badgeExchange/groupBy`, args, options, fetch);
}

export function useCountBadgeExchange<T extends Prisma.BadgeExchangeCountArgs>(
    args?: Prisma.Subset<T, Prisma.BadgeExchangeCountArgs>,
    options?: RequestOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.BadgeExchangeCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.BadgeExchangeCountAggregateOutputType>
            : number
    >(`${endpoint}/badgeExchange/count`, args, options, fetch);
}

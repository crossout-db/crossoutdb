/* eslint-disable */
import type { Prisma, Faction } from '@prisma/client';
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

export function useMutateFaction() {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const prefixesToMutate = [
        `${endpoint}/faction/find`,
        `${endpoint}/faction/aggregate`,
        `${endpoint}/faction/count`,
        `${endpoint}/faction/groupBy`,
    ];
    const mutate = request.getMutate(prefixesToMutate);

    async function createFaction<T extends Prisma.FactionCreateArgs>(
        args: Prisma.SelectSubset<T, Prisma.FactionCreateArgs>,
    ) {
        return await request.post<CheckSelect<T, Faction, Prisma.FactionGetPayload<T>>, true>(
            `${endpoint}/faction/create`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function createManyFaction<T extends Prisma.FactionCreateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.FactionCreateManyArgs>,
    ) {
        return await request.post<Prisma.BatchPayload, false>(
            `${endpoint}/faction/createMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function updateFaction<T extends Prisma.FactionUpdateArgs>(
        args: Prisma.SelectSubset<T, Prisma.FactionUpdateArgs>,
    ) {
        return await request.put<Prisma.FactionGetPayload<T>, true>(
            `${endpoint}/faction/update`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function updateManyFaction<T extends Prisma.FactionUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.FactionUpdateManyArgs>,
    ) {
        return await request.put<Prisma.BatchPayload, false>(
            `${endpoint}/faction/updateMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function upsertFaction<T extends Prisma.FactionUpsertArgs>(
        args: Prisma.SelectSubset<T, Prisma.FactionUpsertArgs>,
    ) {
        return await request.post<Prisma.FactionGetPayload<T>, true>(
            `${endpoint}/faction/upsert`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function deleteFaction<T extends Prisma.FactionDeleteArgs>(
        args: Prisma.SelectSubset<T, Prisma.FactionDeleteArgs>,
    ) {
        return await request.del<Prisma.FactionGetPayload<T>, true>(
            `${endpoint}/faction/delete`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function deleteManyFaction<T extends Prisma.FactionDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.FactionDeleteManyArgs>,
    ) {
        return await request.del<Prisma.BatchPayload, false>(
            `${endpoint}/faction/deleteMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }
    return {
        createFaction,
        createManyFaction,
        updateFaction,
        updateManyFaction,
        upsertFaction,
        deleteFaction,
        deleteManyFaction,
    };
}

export function useFindManyFaction<T extends Prisma.FactionFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.FactionFindManyArgs>,
    options?: RequestOptions<Array<Prisma.FactionGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Array<Prisma.FactionGetPayload<T>>>(`${endpoint}/faction/findMany`, args, options, fetch);
}

export function useInfiniteFindManyFaction<
    T extends Prisma.FactionFindManyArgs,
    R extends Array<Prisma.FactionGetPayload<T>>,
>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.FactionFindManyArgs> | undefined, R>,
    options?: InfiniteRequestOptions<Array<Prisma.FactionGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.infiniteGet<
        Prisma.SelectSubset<T, Prisma.FactionFindManyArgs> | undefined,
        Array<Prisma.FactionGetPayload<T>>
    >(`${endpoint}/faction/findMany`, getNextArgs, options, fetch);
}

export function useFindUniqueFaction<T extends Prisma.FactionFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.FactionFindUniqueArgs>,
    options?: RequestOptions<Prisma.FactionGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.FactionGetPayload<T>>(`${endpoint}/faction/findUnique`, args, options, fetch);
}

export function useFindFirstFaction<T extends Prisma.FactionFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.FactionFindFirstArgs>,
    options?: RequestOptions<Prisma.FactionGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.FactionGetPayload<T>>(`${endpoint}/faction/findFirst`, args, options, fetch);
}

export function useAggregateFaction<T extends Prisma.FactionAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.FactionAggregateArgs>,
    options?: RequestOptions<Prisma.GetFactionAggregateType<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.GetFactionAggregateType<T>>(`${endpoint}/faction/aggregate`, args, options, fetch);
}

export function useGroupByFaction<
    T extends Prisma.FactionGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.FactionGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.FactionGroupByArgs['orderBy'] },
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
    args?: Prisma.SubsetIntersection<T, Prisma.FactionGroupByArgs, OrderByArg> & InputErrors,
    options?: RequestOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.FactionGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.FactionGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.FactionGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.FactionGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.FactionGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.FactionGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.FactionGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.FactionGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >(`${endpoint}/faction/groupBy`, args, options, fetch);
}

export function useCountFaction<T extends Prisma.FactionCountArgs>(
    args?: Prisma.Subset<T, Prisma.FactionCountArgs>,
    options?: RequestOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.FactionCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.FactionCountAggregateOutputType>
            : number
    >(`${endpoint}/faction/count`, args, options, fetch);
}

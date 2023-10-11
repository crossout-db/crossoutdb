/* eslint-disable */
import type { Prisma, Synergy } from '@prisma/client';
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

export function useMutateSynergy() {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const prefixesToMutate = [
        `${endpoint}/synergy/find`,
        `${endpoint}/synergy/aggregate`,
        `${endpoint}/synergy/count`,
        `${endpoint}/synergy/groupBy`,
    ];
    const mutate = request.getMutate(prefixesToMutate);

    async function createSynergy<T extends Prisma.SynergyCreateArgs>(
        args: Prisma.SelectSubset<T, Prisma.SynergyCreateArgs>,
    ) {
        return await request.post<CheckSelect<T, Synergy, Prisma.SynergyGetPayload<T>>, true>(
            `${endpoint}/synergy/create`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function createManySynergy<T extends Prisma.SynergyCreateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.SynergyCreateManyArgs>,
    ) {
        return await request.post<Prisma.BatchPayload, false>(
            `${endpoint}/synergy/createMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function updateSynergy<T extends Prisma.SynergyUpdateArgs>(
        args: Prisma.SelectSubset<T, Prisma.SynergyUpdateArgs>,
    ) {
        return await request.put<Prisma.SynergyGetPayload<T>, true>(
            `${endpoint}/synergy/update`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function updateManySynergy<T extends Prisma.SynergyUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.SynergyUpdateManyArgs>,
    ) {
        return await request.put<Prisma.BatchPayload, false>(
            `${endpoint}/synergy/updateMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function upsertSynergy<T extends Prisma.SynergyUpsertArgs>(
        args: Prisma.SelectSubset<T, Prisma.SynergyUpsertArgs>,
    ) {
        return await request.post<Prisma.SynergyGetPayload<T>, true>(
            `${endpoint}/synergy/upsert`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function deleteSynergy<T extends Prisma.SynergyDeleteArgs>(
        args: Prisma.SelectSubset<T, Prisma.SynergyDeleteArgs>,
    ) {
        return await request.del<Prisma.SynergyGetPayload<T>, true>(
            `${endpoint}/synergy/delete`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function deleteManySynergy<T extends Prisma.SynergyDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.SynergyDeleteManyArgs>,
    ) {
        return await request.del<Prisma.BatchPayload, false>(
            `${endpoint}/synergy/deleteMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }
    return {
        createSynergy,
        createManySynergy,
        updateSynergy,
        updateManySynergy,
        upsertSynergy,
        deleteSynergy,
        deleteManySynergy,
    };
}

export function useFindManySynergy<T extends Prisma.SynergyFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.SynergyFindManyArgs>,
    options?: RequestOptions<Array<Prisma.SynergyGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Array<Prisma.SynergyGetPayload<T>>>(`${endpoint}/synergy/findMany`, args, options, fetch);
}

export function useInfiniteFindManySynergy<
    T extends Prisma.SynergyFindManyArgs,
    R extends Array<Prisma.SynergyGetPayload<T>>,
>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.SynergyFindManyArgs> | undefined, R>,
    options?: InfiniteRequestOptions<Array<Prisma.SynergyGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.infiniteGet<
        Prisma.SelectSubset<T, Prisma.SynergyFindManyArgs> | undefined,
        Array<Prisma.SynergyGetPayload<T>>
    >(`${endpoint}/synergy/findMany`, getNextArgs, options, fetch);
}

export function useFindUniqueSynergy<T extends Prisma.SynergyFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.SynergyFindUniqueArgs>,
    options?: RequestOptions<Prisma.SynergyGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.SynergyGetPayload<T>>(`${endpoint}/synergy/findUnique`, args, options, fetch);
}

export function useFindFirstSynergy<T extends Prisma.SynergyFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.SynergyFindFirstArgs>,
    options?: RequestOptions<Prisma.SynergyGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.SynergyGetPayload<T>>(`${endpoint}/synergy/findFirst`, args, options, fetch);
}

export function useAggregateSynergy<T extends Prisma.SynergyAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.SynergyAggregateArgs>,
    options?: RequestOptions<Prisma.GetSynergyAggregateType<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.GetSynergyAggregateType<T>>(`${endpoint}/synergy/aggregate`, args, options, fetch);
}

export function useGroupBySynergy<
    T extends Prisma.SynergyGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.SynergyGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.SynergyGroupByArgs['orderBy'] },
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
    args?: Prisma.SubsetIntersection<T, Prisma.SynergyGroupByArgs, OrderByArg> & InputErrors,
    options?: RequestOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.SynergyGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.SynergyGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.SynergyGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.SynergyGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.SynergyGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.SynergyGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.SynergyGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.SynergyGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >(`${endpoint}/synergy/groupBy`, args, options, fetch);
}

export function useCountSynergy<T extends Prisma.SynergyCountArgs>(
    args?: Prisma.Subset<T, Prisma.SynergyCountArgs>,
    options?: RequestOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.SynergyCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.SynergyCountAggregateOutputType>
            : number
    >(`${endpoint}/synergy/count`, args, options, fetch);
}

/* eslint-disable */
import type { Prisma, Rarity } from '@prisma/client';
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

export function useMutateRarity() {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const prefixesToMutate = [
        `${endpoint}/rarity/find`,
        `${endpoint}/rarity/aggregate`,
        `${endpoint}/rarity/count`,
        `${endpoint}/rarity/groupBy`,
    ];
    const mutate = request.getMutate(prefixesToMutate);

    async function createRarity<T extends Prisma.RarityCreateArgs>(
        args: Prisma.SelectSubset<T, Prisma.RarityCreateArgs>,
    ) {
        return await request.post<CheckSelect<T, Rarity, Prisma.RarityGetPayload<T>>, true>(
            `${endpoint}/rarity/create`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function createManyRarity<T extends Prisma.RarityCreateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.RarityCreateManyArgs>,
    ) {
        return await request.post<Prisma.BatchPayload, false>(
            `${endpoint}/rarity/createMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function updateRarity<T extends Prisma.RarityUpdateArgs>(
        args: Prisma.SelectSubset<T, Prisma.RarityUpdateArgs>,
    ) {
        return await request.put<Prisma.RarityGetPayload<T>, true>(
            `${endpoint}/rarity/update`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function updateManyRarity<T extends Prisma.RarityUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.RarityUpdateManyArgs>,
    ) {
        return await request.put<Prisma.BatchPayload, false>(
            `${endpoint}/rarity/updateMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function upsertRarity<T extends Prisma.RarityUpsertArgs>(
        args: Prisma.SelectSubset<T, Prisma.RarityUpsertArgs>,
    ) {
        return await request.post<Prisma.RarityGetPayload<T>, true>(
            `${endpoint}/rarity/upsert`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function deleteRarity<T extends Prisma.RarityDeleteArgs>(
        args: Prisma.SelectSubset<T, Prisma.RarityDeleteArgs>,
    ) {
        return await request.del<Prisma.RarityGetPayload<T>, true>(
            `${endpoint}/rarity/delete`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function deleteManyRarity<T extends Prisma.RarityDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.RarityDeleteManyArgs>,
    ) {
        return await request.del<Prisma.BatchPayload, false>(
            `${endpoint}/rarity/deleteMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }
    return {
        createRarity,
        createManyRarity,
        updateRarity,
        updateManyRarity,
        upsertRarity,
        deleteRarity,
        deleteManyRarity,
    };
}

export function useFindManyRarity<T extends Prisma.RarityFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.RarityFindManyArgs>,
    options?: RequestOptions<Array<Prisma.RarityGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Array<Prisma.RarityGetPayload<T>>>(`${endpoint}/rarity/findMany`, args, options, fetch);
}

export function useInfiniteFindManyRarity<
    T extends Prisma.RarityFindManyArgs,
    R extends Array<Prisma.RarityGetPayload<T>>,
>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.RarityFindManyArgs> | undefined, R>,
    options?: InfiniteRequestOptions<Array<Prisma.RarityGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.infiniteGet<
        Prisma.SelectSubset<T, Prisma.RarityFindManyArgs> | undefined,
        Array<Prisma.RarityGetPayload<T>>
    >(`${endpoint}/rarity/findMany`, getNextArgs, options, fetch);
}

export function useFindUniqueRarity<T extends Prisma.RarityFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.RarityFindUniqueArgs>,
    options?: RequestOptions<Prisma.RarityGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.RarityGetPayload<T>>(`${endpoint}/rarity/findUnique`, args, options, fetch);
}

export function useFindFirstRarity<T extends Prisma.RarityFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.RarityFindFirstArgs>,
    options?: RequestOptions<Prisma.RarityGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.RarityGetPayload<T>>(`${endpoint}/rarity/findFirst`, args, options, fetch);
}

export function useAggregateRarity<T extends Prisma.RarityAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.RarityAggregateArgs>,
    options?: RequestOptions<Prisma.GetRarityAggregateType<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.GetRarityAggregateType<T>>(`${endpoint}/rarity/aggregate`, args, options, fetch);
}

export function useGroupByRarity<
    T extends Prisma.RarityGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.RarityGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.RarityGroupByArgs['orderBy'] },
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
    args?: Prisma.SubsetIntersection<T, Prisma.RarityGroupByArgs, OrderByArg> & InputErrors,
    options?: RequestOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.RarityGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.RarityGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.RarityGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.RarityGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.RarityGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.RarityGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.RarityGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.RarityGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >(`${endpoint}/rarity/groupBy`, args, options, fetch);
}

export function useCountRarity<T extends Prisma.RarityCountArgs>(
    args?: Prisma.Subset<T, Prisma.RarityCountArgs>,
    options?: RequestOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.RarityCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.RarityCountAggregateOutputType>
            : number
    >(`${endpoint}/rarity/count`, args, options, fetch);
}

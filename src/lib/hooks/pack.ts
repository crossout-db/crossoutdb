/* eslint-disable */
import type { Prisma, Pack } from '@prisma/client';
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

export function useMutatePack() {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const prefixesToMutate = [
        `${endpoint}/pack/find`,
        `${endpoint}/pack/aggregate`,
        `${endpoint}/pack/count`,
        `${endpoint}/pack/groupBy`,
    ];
    const mutate = request.getMutate(prefixesToMutate);

    async function createPack<T extends Prisma.PackCreateArgs>(args: Prisma.SelectSubset<T, Prisma.PackCreateArgs>) {
        return await request.post<CheckSelect<T, Pack, Prisma.PackGetPayload<T>>, true>(
            `${endpoint}/pack/create`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function createManyPack<T extends Prisma.PackCreateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.PackCreateManyArgs>,
    ) {
        return await request.post<Prisma.BatchPayload, false>(
            `${endpoint}/pack/createMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function updatePack<T extends Prisma.PackUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.PackUpdateArgs>) {
        return await request.put<Prisma.PackGetPayload<T>, true>(`${endpoint}/pack/update`, args, mutate, fetch, true);
    }

    async function updateManyPack<T extends Prisma.PackUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.PackUpdateManyArgs>,
    ) {
        return await request.put<Prisma.BatchPayload, false>(`${endpoint}/pack/updateMany`, args, mutate, fetch, false);
    }

    async function upsertPack<T extends Prisma.PackUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.PackUpsertArgs>) {
        return await request.post<Prisma.PackGetPayload<T>, true>(`${endpoint}/pack/upsert`, args, mutate, fetch, true);
    }

    async function deletePack<T extends Prisma.PackDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.PackDeleteArgs>) {
        return await request.del<Prisma.PackGetPayload<T>, true>(`${endpoint}/pack/delete`, args, mutate, fetch, true);
    }

    async function deleteManyPack<T extends Prisma.PackDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.PackDeleteManyArgs>,
    ) {
        return await request.del<Prisma.BatchPayload, false>(`${endpoint}/pack/deleteMany`, args, mutate, fetch, false);
    }
    return { createPack, createManyPack, updatePack, updateManyPack, upsertPack, deletePack, deleteManyPack };
}

export function useFindManyPack<T extends Prisma.PackFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.PackFindManyArgs>,
    options?: RequestOptions<Array<Prisma.PackGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Array<Prisma.PackGetPayload<T>>>(`${endpoint}/pack/findMany`, args, options, fetch);
}

export function useInfiniteFindManyPack<T extends Prisma.PackFindManyArgs, R extends Array<Prisma.PackGetPayload<T>>>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.PackFindManyArgs> | undefined, R>,
    options?: InfiniteRequestOptions<Array<Prisma.PackGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.infiniteGet<
        Prisma.SelectSubset<T, Prisma.PackFindManyArgs> | undefined,
        Array<Prisma.PackGetPayload<T>>
    >(`${endpoint}/pack/findMany`, getNextArgs, options, fetch);
}

export function useFindUniquePack<T extends Prisma.PackFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.PackFindUniqueArgs>,
    options?: RequestOptions<Prisma.PackGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.PackGetPayload<T>>(`${endpoint}/pack/findUnique`, args, options, fetch);
}

export function useFindFirstPack<T extends Prisma.PackFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.PackFindFirstArgs>,
    options?: RequestOptions<Prisma.PackGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.PackGetPayload<T>>(`${endpoint}/pack/findFirst`, args, options, fetch);
}

export function useAggregatePack<T extends Prisma.PackAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.PackAggregateArgs>,
    options?: RequestOptions<Prisma.GetPackAggregateType<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.GetPackAggregateType<T>>(`${endpoint}/pack/aggregate`, args, options, fetch);
}

export function useGroupByPack<
    T extends Prisma.PackGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.PackGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.PackGroupByArgs['orderBy'] },
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
    args?: Prisma.SubsetIntersection<T, Prisma.PackGroupByArgs, OrderByArg> & InputErrors,
    options?: RequestOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.PackGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.PackGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.PackGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.PackGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.PackGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.PackGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.PackGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.PackGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >(`${endpoint}/pack/groupBy`, args, options, fetch);
}

export function useCountPack<T extends Prisma.PackCountArgs>(
    args?: Prisma.Subset<T, Prisma.PackCountArgs>,
    options?: RequestOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.PackCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.PackCountAggregateOutputType>
            : number
    >(`${endpoint}/pack/count`, args, options, fetch);
}

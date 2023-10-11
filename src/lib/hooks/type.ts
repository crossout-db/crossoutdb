/* eslint-disable */
import type { Prisma, Type } from '@prisma/client';
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

export function useMutateType() {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const prefixesToMutate = [
        `${endpoint}/type/find`,
        `${endpoint}/type/aggregate`,
        `${endpoint}/type/count`,
        `${endpoint}/type/groupBy`,
    ];
    const mutate = request.getMutate(prefixesToMutate);

    async function createType<T extends Prisma.TypeCreateArgs>(args: Prisma.SelectSubset<T, Prisma.TypeCreateArgs>) {
        return await request.post<CheckSelect<T, Type, Prisma.TypeGetPayload<T>>, true>(
            `${endpoint}/type/create`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function createManyType<T extends Prisma.TypeCreateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.TypeCreateManyArgs>,
    ) {
        return await request.post<Prisma.BatchPayload, false>(
            `${endpoint}/type/createMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function updateType<T extends Prisma.TypeUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.TypeUpdateArgs>) {
        return await request.put<Prisma.TypeGetPayload<T>, true>(`${endpoint}/type/update`, args, mutate, fetch, true);
    }

    async function updateManyType<T extends Prisma.TypeUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.TypeUpdateManyArgs>,
    ) {
        return await request.put<Prisma.BatchPayload, false>(`${endpoint}/type/updateMany`, args, mutate, fetch, false);
    }

    async function upsertType<T extends Prisma.TypeUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.TypeUpsertArgs>) {
        return await request.post<Prisma.TypeGetPayload<T>, true>(`${endpoint}/type/upsert`, args, mutate, fetch, true);
    }

    async function deleteType<T extends Prisma.TypeDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.TypeDeleteArgs>) {
        return await request.del<Prisma.TypeGetPayload<T>, true>(`${endpoint}/type/delete`, args, mutate, fetch, true);
    }

    async function deleteManyType<T extends Prisma.TypeDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.TypeDeleteManyArgs>,
    ) {
        return await request.del<Prisma.BatchPayload, false>(`${endpoint}/type/deleteMany`, args, mutate, fetch, false);
    }
    return { createType, createManyType, updateType, updateManyType, upsertType, deleteType, deleteManyType };
}

export function useFindManyType<T extends Prisma.TypeFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.TypeFindManyArgs>,
    options?: RequestOptions<Array<Prisma.TypeGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Array<Prisma.TypeGetPayload<T>>>(`${endpoint}/type/findMany`, args, options, fetch);
}

export function useInfiniteFindManyType<T extends Prisma.TypeFindManyArgs, R extends Array<Prisma.TypeGetPayload<T>>>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.TypeFindManyArgs> | undefined, R>,
    options?: InfiniteRequestOptions<Array<Prisma.TypeGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.infiniteGet<
        Prisma.SelectSubset<T, Prisma.TypeFindManyArgs> | undefined,
        Array<Prisma.TypeGetPayload<T>>
    >(`${endpoint}/type/findMany`, getNextArgs, options, fetch);
}

export function useFindUniqueType<T extends Prisma.TypeFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.TypeFindUniqueArgs>,
    options?: RequestOptions<Prisma.TypeGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.TypeGetPayload<T>>(`${endpoint}/type/findUnique`, args, options, fetch);
}

export function useFindFirstType<T extends Prisma.TypeFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.TypeFindFirstArgs>,
    options?: RequestOptions<Prisma.TypeGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.TypeGetPayload<T>>(`${endpoint}/type/findFirst`, args, options, fetch);
}

export function useAggregateType<T extends Prisma.TypeAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.TypeAggregateArgs>,
    options?: RequestOptions<Prisma.GetTypeAggregateType<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.GetTypeAggregateType<T>>(`${endpoint}/type/aggregate`, args, options, fetch);
}

export function useGroupByType<
    T extends Prisma.TypeGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.TypeGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.TypeGroupByArgs['orderBy'] },
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
    args?: Prisma.SubsetIntersection<T, Prisma.TypeGroupByArgs, OrderByArg> & InputErrors,
    options?: RequestOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.TypeGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.TypeGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.TypeGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.TypeGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.TypeGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.TypeGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.TypeGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.TypeGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >(`${endpoint}/type/groupBy`, args, options, fetch);
}

export function useCountType<T extends Prisma.TypeCountArgs>(
    args?: Prisma.Subset<T, Prisma.TypeCountArgs>,
    options?: RequestOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.TypeCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.TypeCountAggregateOutputType>
            : number
    >(`${endpoint}/type/count`, args, options, fetch);
}

/* eslint-disable */
import type { Prisma, log } from '@prisma/client';
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

export function useMutatelog() {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const prefixesToMutate = [
        `${endpoint}/log/find`,
        `${endpoint}/log/aggregate`,
        `${endpoint}/log/count`,
        `${endpoint}/log/groupBy`,
    ];
    const mutate = request.getMutate(prefixesToMutate);

    async function createlog<T extends Prisma.logCreateArgs>(args: Prisma.SelectSubset<T, Prisma.logCreateArgs>) {
        return await request.post<CheckSelect<T, log, Prisma.logGetPayload<T>>, true>(
            `${endpoint}/log/create`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function createManylog<T extends Prisma.logCreateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.logCreateManyArgs>,
    ) {
        return await request.post<Prisma.BatchPayload, false>(`${endpoint}/log/createMany`, args, mutate, fetch, false);
    }

    async function updatelog<T extends Prisma.logUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.logUpdateArgs>) {
        return await request.put<Prisma.logGetPayload<T>, true>(`${endpoint}/log/update`, args, mutate, fetch, true);
    }

    async function updateManylog<T extends Prisma.logUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.logUpdateManyArgs>,
    ) {
        return await request.put<Prisma.BatchPayload, false>(`${endpoint}/log/updateMany`, args, mutate, fetch, false);
    }

    async function upsertlog<T extends Prisma.logUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.logUpsertArgs>) {
        return await request.post<Prisma.logGetPayload<T>, true>(`${endpoint}/log/upsert`, args, mutate, fetch, true);
    }

    async function deletelog<T extends Prisma.logDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.logDeleteArgs>) {
        return await request.del<Prisma.logGetPayload<T>, true>(`${endpoint}/log/delete`, args, mutate, fetch, true);
    }

    async function deleteManylog<T extends Prisma.logDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.logDeleteManyArgs>,
    ) {
        return await request.del<Prisma.BatchPayload, false>(`${endpoint}/log/deleteMany`, args, mutate, fetch, false);
    }
    return { createlog, createManylog, updatelog, updateManylog, upsertlog, deletelog, deleteManylog };
}

export function useFindManylog<T extends Prisma.logFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.logFindManyArgs>,
    options?: RequestOptions<Array<Prisma.logGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Array<Prisma.logGetPayload<T>>>(`${endpoint}/log/findMany`, args, options, fetch);
}

export function useInfiniteFindManylog<T extends Prisma.logFindManyArgs, R extends Array<Prisma.logGetPayload<T>>>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.logFindManyArgs> | undefined, R>,
    options?: InfiniteRequestOptions<Array<Prisma.logGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.infiniteGet<
        Prisma.SelectSubset<T, Prisma.logFindManyArgs> | undefined,
        Array<Prisma.logGetPayload<T>>
    >(`${endpoint}/log/findMany`, getNextArgs, options, fetch);
}

export function useFindUniquelog<T extends Prisma.logFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.logFindUniqueArgs>,
    options?: RequestOptions<Prisma.logGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.logGetPayload<T>>(`${endpoint}/log/findUnique`, args, options, fetch);
}

export function useFindFirstlog<T extends Prisma.logFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.logFindFirstArgs>,
    options?: RequestOptions<Prisma.logGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.logGetPayload<T>>(`${endpoint}/log/findFirst`, args, options, fetch);
}

export function useAggregatelog<T extends Prisma.LogAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.LogAggregateArgs>,
    options?: RequestOptions<Prisma.GetLogAggregateType<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.GetLogAggregateType<T>>(`${endpoint}/log/aggregate`, args, options, fetch);
}

export function useGroupBylog<
    T extends Prisma.logGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.logGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.logGroupByArgs['orderBy'] },
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
    args?: Prisma.SubsetIntersection<T, Prisma.logGroupByArgs, OrderByArg> & InputErrors,
    options?: RequestOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.LogGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.LogGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.LogGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.LogGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.LogGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.LogGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.LogGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.LogGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >(`${endpoint}/log/groupBy`, args, options, fetch);
}

export function useCountlog<T extends Prisma.logCountArgs>(
    args?: Prisma.Subset<T, Prisma.logCountArgs>,
    options?: RequestOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.LogCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.LogCountAggregateOutputType>
            : number
    >(`${endpoint}/log/count`, args, options, fetch);
}

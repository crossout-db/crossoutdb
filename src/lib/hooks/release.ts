/* eslint-disable */
import type { Prisma, Release } from '@prisma/client';
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

export function useMutateRelease() {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const prefixesToMutate = [
        `${endpoint}/release/find`,
        `${endpoint}/release/aggregate`,
        `${endpoint}/release/count`,
        `${endpoint}/release/groupBy`,
    ];
    const mutate = request.getMutate(prefixesToMutate);

    async function createRelease<T extends Prisma.ReleaseCreateArgs>(
        args: Prisma.SelectSubset<T, Prisma.ReleaseCreateArgs>,
    ) {
        return await request.post<CheckSelect<T, Release, Prisma.ReleaseGetPayload<T>>, true>(
            `${endpoint}/release/create`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function createManyRelease<T extends Prisma.ReleaseCreateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.ReleaseCreateManyArgs>,
    ) {
        return await request.post<Prisma.BatchPayload, false>(
            `${endpoint}/release/createMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function updateRelease<T extends Prisma.ReleaseUpdateArgs>(
        args: Prisma.SelectSubset<T, Prisma.ReleaseUpdateArgs>,
    ) {
        return await request.put<Prisma.ReleaseGetPayload<T>, true>(
            `${endpoint}/release/update`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function updateManyRelease<T extends Prisma.ReleaseUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.ReleaseUpdateManyArgs>,
    ) {
        return await request.put<Prisma.BatchPayload, false>(
            `${endpoint}/release/updateMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function upsertRelease<T extends Prisma.ReleaseUpsertArgs>(
        args: Prisma.SelectSubset<T, Prisma.ReleaseUpsertArgs>,
    ) {
        return await request.post<Prisma.ReleaseGetPayload<T>, true>(
            `${endpoint}/release/upsert`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function deleteRelease<T extends Prisma.ReleaseDeleteArgs>(
        args: Prisma.SelectSubset<T, Prisma.ReleaseDeleteArgs>,
    ) {
        return await request.del<Prisma.ReleaseGetPayload<T>, true>(
            `${endpoint}/release/delete`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function deleteManyRelease<T extends Prisma.ReleaseDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.ReleaseDeleteManyArgs>,
    ) {
        return await request.del<Prisma.BatchPayload, false>(
            `${endpoint}/release/deleteMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }
    return {
        createRelease,
        createManyRelease,
        updateRelease,
        updateManyRelease,
        upsertRelease,
        deleteRelease,
        deleteManyRelease,
    };
}

export function useFindManyRelease<T extends Prisma.ReleaseFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ReleaseFindManyArgs>,
    options?: RequestOptions<Array<Prisma.ReleaseGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Array<Prisma.ReleaseGetPayload<T>>>(`${endpoint}/release/findMany`, args, options, fetch);
}

export function useInfiniteFindManyRelease<
    T extends Prisma.ReleaseFindManyArgs,
    R extends Array<Prisma.ReleaseGetPayload<T>>,
>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.ReleaseFindManyArgs> | undefined, R>,
    options?: InfiniteRequestOptions<Array<Prisma.ReleaseGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.infiniteGet<
        Prisma.SelectSubset<T, Prisma.ReleaseFindManyArgs> | undefined,
        Array<Prisma.ReleaseGetPayload<T>>
    >(`${endpoint}/release/findMany`, getNextArgs, options, fetch);
}

export function useFindUniqueRelease<T extends Prisma.ReleaseFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ReleaseFindUniqueArgs>,
    options?: RequestOptions<Prisma.ReleaseGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.ReleaseGetPayload<T>>(`${endpoint}/release/findUnique`, args, options, fetch);
}

export function useFindFirstRelease<T extends Prisma.ReleaseFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ReleaseFindFirstArgs>,
    options?: RequestOptions<Prisma.ReleaseGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.ReleaseGetPayload<T>>(`${endpoint}/release/findFirst`, args, options, fetch);
}

export function useAggregateRelease<T extends Prisma.ReleaseAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.ReleaseAggregateArgs>,
    options?: RequestOptions<Prisma.GetReleaseAggregateType<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.GetReleaseAggregateType<T>>(`${endpoint}/release/aggregate`, args, options, fetch);
}

export function useGroupByRelease<
    T extends Prisma.ReleaseGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.ReleaseGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.ReleaseGroupByArgs['orderBy'] },
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
    args?: Prisma.SubsetIntersection<T, Prisma.ReleaseGroupByArgs, OrderByArg> & InputErrors,
    options?: RequestOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.ReleaseGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.ReleaseGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.ReleaseGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.ReleaseGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.ReleaseGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.ReleaseGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.ReleaseGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.ReleaseGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >(`${endpoint}/release/groupBy`, args, options, fetch);
}

export function useCountRelease<T extends Prisma.ReleaseCountArgs>(
    args?: Prisma.Subset<T, Prisma.ReleaseCountArgs>,
    options?: RequestOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ReleaseCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ReleaseCountAggregateOutputType>
            : number
    >(`${endpoint}/release/count`, args, options, fetch);
}

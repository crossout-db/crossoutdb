/* eslint-disable */
import type { Prisma, PackItem } from '@prisma/client';
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

export function useMutatePackItem() {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const prefixesToMutate = [
        `${endpoint}/packItem/find`,
        `${endpoint}/packItem/aggregate`,
        `${endpoint}/packItem/count`,
        `${endpoint}/packItem/groupBy`,
    ];
    const mutate = request.getMutate(prefixesToMutate);

    async function createPackItem<T extends Prisma.PackItemCreateArgs>(
        args: Prisma.SelectSubset<T, Prisma.PackItemCreateArgs>,
    ) {
        return await request.post<CheckSelect<T, PackItem, Prisma.PackItemGetPayload<T>>, true>(
            `${endpoint}/packItem/create`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function createManyPackItem<T extends Prisma.PackItemCreateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.PackItemCreateManyArgs>,
    ) {
        return await request.post<Prisma.BatchPayload, false>(
            `${endpoint}/packItem/createMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function updatePackItem<T extends Prisma.PackItemUpdateArgs>(
        args: Prisma.SelectSubset<T, Prisma.PackItemUpdateArgs>,
    ) {
        return await request.put<Prisma.PackItemGetPayload<T>, true>(
            `${endpoint}/packItem/update`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function updateManyPackItem<T extends Prisma.PackItemUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.PackItemUpdateManyArgs>,
    ) {
        return await request.put<Prisma.BatchPayload, false>(
            `${endpoint}/packItem/updateMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function upsertPackItem<T extends Prisma.PackItemUpsertArgs>(
        args: Prisma.SelectSubset<T, Prisma.PackItemUpsertArgs>,
    ) {
        return await request.post<Prisma.PackItemGetPayload<T>, true>(
            `${endpoint}/packItem/upsert`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function deletePackItem<T extends Prisma.PackItemDeleteArgs>(
        args: Prisma.SelectSubset<T, Prisma.PackItemDeleteArgs>,
    ) {
        return await request.del<Prisma.PackItemGetPayload<T>, true>(
            `${endpoint}/packItem/delete`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function deleteManyPackItem<T extends Prisma.PackItemDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.PackItemDeleteManyArgs>,
    ) {
        return await request.del<Prisma.BatchPayload, false>(
            `${endpoint}/packItem/deleteMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }
    return {
        createPackItem,
        createManyPackItem,
        updatePackItem,
        updateManyPackItem,
        upsertPackItem,
        deletePackItem,
        deleteManyPackItem,
    };
}

export function useFindManyPackItem<T extends Prisma.PackItemFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.PackItemFindManyArgs>,
    options?: RequestOptions<Array<Prisma.PackItemGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Array<Prisma.PackItemGetPayload<T>>>(`${endpoint}/packItem/findMany`, args, options, fetch);
}

export function useInfiniteFindManyPackItem<
    T extends Prisma.PackItemFindManyArgs,
    R extends Array<Prisma.PackItemGetPayload<T>>,
>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.PackItemFindManyArgs> | undefined, R>,
    options?: InfiniteRequestOptions<Array<Prisma.PackItemGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.infiniteGet<
        Prisma.SelectSubset<T, Prisma.PackItemFindManyArgs> | undefined,
        Array<Prisma.PackItemGetPayload<T>>
    >(`${endpoint}/packItem/findMany`, getNextArgs, options, fetch);
}

export function useFindUniquePackItem<T extends Prisma.PackItemFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.PackItemFindUniqueArgs>,
    options?: RequestOptions<Prisma.PackItemGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.PackItemGetPayload<T>>(`${endpoint}/packItem/findUnique`, args, options, fetch);
}

export function useFindFirstPackItem<T extends Prisma.PackItemFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.PackItemFindFirstArgs>,
    options?: RequestOptions<Prisma.PackItemGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.PackItemGetPayload<T>>(`${endpoint}/packItem/findFirst`, args, options, fetch);
}

export function useAggregatePackItem<T extends Prisma.PackItemAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.PackItemAggregateArgs>,
    options?: RequestOptions<Prisma.GetPackItemAggregateType<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.GetPackItemAggregateType<T>>(`${endpoint}/packItem/aggregate`, args, options, fetch);
}

export function useGroupByPackItem<
    T extends Prisma.PackItemGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.PackItemGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.PackItemGroupByArgs['orderBy'] },
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
    args?: Prisma.SubsetIntersection<T, Prisma.PackItemGroupByArgs, OrderByArg> & InputErrors,
    options?: RequestOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.PackItemGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.PackItemGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.PackItemGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.PackItemGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.PackItemGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.PackItemGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.PackItemGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.PackItemGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >(`${endpoint}/packItem/groupBy`, args, options, fetch);
}

export function useCountPackItem<T extends Prisma.PackItemCountArgs>(
    args?: Prisma.Subset<T, Prisma.PackItemCountArgs>,
    options?: RequestOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.PackItemCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.PackItemCountAggregateOutputType>
            : number
    >(`${endpoint}/packItem/count`, args, options, fetch);
}

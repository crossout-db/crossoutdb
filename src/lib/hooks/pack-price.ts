/* eslint-disable */
import type { Prisma, PackPrice } from '@prisma/client';
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

export function useMutatePackPrice() {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const prefixesToMutate = [
        `${endpoint}/packPrice/find`,
        `${endpoint}/packPrice/aggregate`,
        `${endpoint}/packPrice/count`,
        `${endpoint}/packPrice/groupBy`,
    ];
    const mutate = request.getMutate(prefixesToMutate);

    async function createPackPrice<T extends Prisma.PackPriceCreateArgs>(
        args: Prisma.SelectSubset<T, Prisma.PackPriceCreateArgs>,
    ) {
        return await request.post<CheckSelect<T, PackPrice, Prisma.PackPriceGetPayload<T>>, true>(
            `${endpoint}/packPrice/create`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function createManyPackPrice<T extends Prisma.PackPriceCreateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.PackPriceCreateManyArgs>,
    ) {
        return await request.post<Prisma.BatchPayload, false>(
            `${endpoint}/packPrice/createMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function updatePackPrice<T extends Prisma.PackPriceUpdateArgs>(
        args: Prisma.SelectSubset<T, Prisma.PackPriceUpdateArgs>,
    ) {
        return await request.put<Prisma.PackPriceGetPayload<T>, true>(
            `${endpoint}/packPrice/update`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function updateManyPackPrice<T extends Prisma.PackPriceUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.PackPriceUpdateManyArgs>,
    ) {
        return await request.put<Prisma.BatchPayload, false>(
            `${endpoint}/packPrice/updateMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function upsertPackPrice<T extends Prisma.PackPriceUpsertArgs>(
        args: Prisma.SelectSubset<T, Prisma.PackPriceUpsertArgs>,
    ) {
        return await request.post<Prisma.PackPriceGetPayload<T>, true>(
            `${endpoint}/packPrice/upsert`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function deletePackPrice<T extends Prisma.PackPriceDeleteArgs>(
        args: Prisma.SelectSubset<T, Prisma.PackPriceDeleteArgs>,
    ) {
        return await request.del<Prisma.PackPriceGetPayload<T>, true>(
            `${endpoint}/packPrice/delete`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function deleteManyPackPrice<T extends Prisma.PackPriceDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.PackPriceDeleteManyArgs>,
    ) {
        return await request.del<Prisma.BatchPayload, false>(
            `${endpoint}/packPrice/deleteMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }
    return {
        createPackPrice,
        createManyPackPrice,
        updatePackPrice,
        updateManyPackPrice,
        upsertPackPrice,
        deletePackPrice,
        deleteManyPackPrice,
    };
}

export function useFindManyPackPrice<T extends Prisma.PackPriceFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.PackPriceFindManyArgs>,
    options?: RequestOptions<Array<Prisma.PackPriceGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Array<Prisma.PackPriceGetPayload<T>>>(`${endpoint}/packPrice/findMany`, args, options, fetch);
}

export function useInfiniteFindManyPackPrice<
    T extends Prisma.PackPriceFindManyArgs,
    R extends Array<Prisma.PackPriceGetPayload<T>>,
>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.PackPriceFindManyArgs> | undefined, R>,
    options?: InfiniteRequestOptions<Array<Prisma.PackPriceGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.infiniteGet<
        Prisma.SelectSubset<T, Prisma.PackPriceFindManyArgs> | undefined,
        Array<Prisma.PackPriceGetPayload<T>>
    >(`${endpoint}/packPrice/findMany`, getNextArgs, options, fetch);
}

export function useFindUniquePackPrice<T extends Prisma.PackPriceFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.PackPriceFindUniqueArgs>,
    options?: RequestOptions<Prisma.PackPriceGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.PackPriceGetPayload<T>>(`${endpoint}/packPrice/findUnique`, args, options, fetch);
}

export function useFindFirstPackPrice<T extends Prisma.PackPriceFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.PackPriceFindFirstArgs>,
    options?: RequestOptions<Prisma.PackPriceGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.PackPriceGetPayload<T>>(`${endpoint}/packPrice/findFirst`, args, options, fetch);
}

export function useAggregatePackPrice<T extends Prisma.PackPriceAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.PackPriceAggregateArgs>,
    options?: RequestOptions<Prisma.GetPackPriceAggregateType<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.GetPackPriceAggregateType<T>>(`${endpoint}/packPrice/aggregate`, args, options, fetch);
}

export function useGroupByPackPrice<
    T extends Prisma.PackPriceGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.PackPriceGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.PackPriceGroupByArgs['orderBy'] },
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
    args?: Prisma.SubsetIntersection<T, Prisma.PackPriceGroupByArgs, OrderByArg> & InputErrors,
    options?: RequestOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.PackPriceGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.PackPriceGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.PackPriceGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.PackPriceGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.PackPriceGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.PackPriceGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.PackPriceGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.PackPriceGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >(`${endpoint}/packPrice/groupBy`, args, options, fetch);
}

export function useCountPackPrice<T extends Prisma.PackPriceCountArgs>(
    args?: Prisma.Subset<T, Prisma.PackPriceCountArgs>,
    options?: RequestOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.PackPriceCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.PackPriceCountAggregateOutputType>
            : number
    >(`${endpoint}/packPrice/count`, args, options, fetch);
}

import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemStatsCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    itemId: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    releaseId: z.lazy(() => SortOrderSchema).optional(),
    timestamp: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    increasesDurability: z.lazy(() => SortOrderSchema).optional(),
    increasesReputationPercent: z.lazy(() => SortOrderSchema).optional(),
    topSpeed: z.lazy(() => SortOrderSchema).optional(),
    ps: z.lazy(() => SortOrderSchema).optional(),
    damage: z.lazy(() => SortOrderSchema).optional(),
    fireRate: z.lazy(() => SortOrderSchema).optional(),
    range: z.lazy(() => SortOrderSchema).optional(),
    accuracy: z.lazy(() => SortOrderSchema).optional(),
    timeToOverheating: z.lazy(() => SortOrderSchema).optional(),
    maxAmmo: z.lazy(() => SortOrderSchema).optional(),
    blastPower: z.lazy(() => SortOrderSchema).optional(),
    addsEnergy: z.lazy(() => SortOrderSchema).optional(),
    tonnage: z.lazy(() => SortOrderSchema).optional(),
    massLimit: z.lazy(() => SortOrderSchema).optional(),
    maxCabinSpeed: z.lazy(() => SortOrderSchema).optional(),
    maxChassisSpeed: z.lazy(() => SortOrderSchema).optional(),
    power: z.lazy(() => SortOrderSchema).optional(),
    cabinPower: z.lazy(() => SortOrderSchema).optional(),
    fuelReserves: z.lazy(() => SortOrderSchema).optional(),
    featureBulletPercent: z.lazy(() => SortOrderSchema).optional(),
    featureMeleePercent: z.lazy(() => SortOrderSchema).optional(),
    featureBlastPercent: z.lazy(() => SortOrderSchema).optional(),
    featureFirePercent: z.lazy(() => SortOrderSchema).optional(),
    featurePassthroughPercent: z.lazy(() => SortOrderSchema).optional(),
    durability: z.lazy(() => SortOrderSchema).optional(),
    energyDrain: z.lazy(() => SortOrderSchema).optional(),
    mass: z.lazy(() => SortOrderSchema).optional(),
    perks: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ItemStatsCountOrderByAggregateInputObjectSchema = Schema;

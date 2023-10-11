import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemStatsCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    itemId: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    releaseId: z.literal(true).optional(),
    timestamp: z.literal(true).optional(),
    description: z.literal(true).optional(),
    increasesDurability: z.literal(true).optional(),
    increasesReputationPercent: z.literal(true).optional(),
    topSpeed: z.literal(true).optional(),
    ps: z.literal(true).optional(),
    damage: z.literal(true).optional(),
    fireRate: z.literal(true).optional(),
    range: z.literal(true).optional(),
    accuracy: z.literal(true).optional(),
    timeToOverheating: z.literal(true).optional(),
    maxAmmo: z.literal(true).optional(),
    blastPower: z.literal(true).optional(),
    addsEnergy: z.literal(true).optional(),
    tonnage: z.literal(true).optional(),
    massLimit: z.literal(true).optional(),
    maxCabinSpeed: z.literal(true).optional(),
    maxChassisSpeed: z.literal(true).optional(),
    power: z.literal(true).optional(),
    cabinPower: z.literal(true).optional(),
    fuelReserves: z.literal(true).optional(),
    featureBulletPercent: z.literal(true).optional(),
    featureMeleePercent: z.literal(true).optional(),
    featureBlastPercent: z.literal(true).optional(),
    featureFirePercent: z.literal(true).optional(),
    featurePassthroughPercent: z.literal(true).optional(),
    durability: z.literal(true).optional(),
    energyDrain: z.literal(true).optional(),
    mass: z.literal(true).optional(),
    perks: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ItemStatsCountAggregateInputObjectSchema = Schema;

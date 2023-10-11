import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemStatsUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    itemId: z.number(),
    userId: z.string(),
    releaseId: z.number().optional().nullable(),
    timestamp: z.coerce.date().optional(),
    description: z.string().optional().nullable(),
    increasesDurability: z.number().optional().nullable(),
    increasesReputationPercent: z.number().optional().nullable(),
    topSpeed: z.number().optional().nullable(),
    ps: z.number().optional().nullable(),
    damage: z.number().optional().nullable(),
    fireRate: z.number().optional().nullable(),
    range: z.number().optional().nullable(),
    accuracy: z.number().optional().nullable(),
    timeToOverheating: z.number().optional().nullable(),
    maxAmmo: z.number().optional().nullable(),
    blastPower: z.number().optional().nullable(),
    addsEnergy: z.number().optional().nullable(),
    tonnage: z.number().optional().nullable(),
    massLimit: z.number().optional().nullable(),
    maxCabinSpeed: z.number().optional().nullable(),
    maxChassisSpeed: z.number().optional().nullable(),
    power: z.number().optional().nullable(),
    cabinPower: z.number().optional().nullable(),
    fuelReserves: z.number().optional().nullable(),
    featureBulletPercent: z.number().optional().nullable(),
    featureMeleePercent: z.number().optional().nullable(),
    featureBlastPercent: z.number().optional().nullable(),
    featureFirePercent: z.number().optional().nullable(),
    featurePassthroughPercent: z.number().optional().nullable(),
    durability: z.number().optional().nullable(),
    energyDrain: z.number().optional().nullable(),
    mass: z.number().optional().nullable(),
    perks: z.string().optional().nullable(),
  })
  .strict();

export const ItemStatsUncheckedCreateInputObjectSchema = Schema;

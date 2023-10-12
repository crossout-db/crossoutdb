"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemStatsUpdateSchema = exports.ItemStatsCreateSchema = exports.ItemStatsSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const baseSchema = zod_1.z.object({
    id: zod_1.z.number(),
    timestamp: zod_1.z.date(),
    description: zod_1.z.string().nullish(),
    increasesDurability: zod_1.z.number().nullish(),
    increasesReputationPercent: zod_1.z.number().nullish(),
    topSpeed: zod_1.z.number().nullish(),
    ps: zod_1.z.number().nullish(),
    damage: zod_1.z.number().nullish(),
    fireRate: zod_1.z.number().nullish(),
    range: zod_1.z.number().nullish(),
    accuracy: zod_1.z.number().nullish(),
    timeToOverheating: zod_1.z.number().nullish(),
    maxAmmo: zod_1.z.number().nullish(),
    blastPower: zod_1.z.number().nullish(),
    addsEnergy: zod_1.z.number().nullish(),
    tonnage: zod_1.z.number().nullish(),
    massLimit: zod_1.z.number().nullish(),
    maxCabinSpeed: zod_1.z.number().nullish(),
    maxChassisSpeed: zod_1.z.number().nullish(),
    power: zod_1.z.number().nullish(),
    cabinPower: zod_1.z.number().nullish(),
    fuelReserves: zod_1.z.number().nullish(),
    featureBulletPercent: zod_1.z.number().nullish(),
    featureMeleePercent: zod_1.z.number().nullish(),
    featureBlastPercent: zod_1.z.number().nullish(),
    featureFirePercent: zod_1.z.number().nullish(),
    featurePassthroughPercent: zod_1.z.number().nullish(),
    durability: zod_1.z.number().nullish(),
    energyDrain: zod_1.z.number().nullish(),
    mass: zod_1.z.number().nullish(),
    perks: zod_1.z.string().nullish(),
});
exports.ItemStatsSchema = baseSchema;
exports.ItemStatsCreateSchema = baseSchema.partial({
    id: true, timestamp: true,
});
exports.ItemStatsUpdateSchema = baseSchema.partial();

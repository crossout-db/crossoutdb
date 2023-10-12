"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemStatsCreateWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserCreateNestedOneWithoutItemStatsInput_schema_1 = require("./UserCreateNestedOneWithoutItemStatsInput.schema");
const ReleaseCreateNestedOneWithoutItemStatsInput_schema_1 = require("./ReleaseCreateNestedOneWithoutItemStatsInput.schema");
exports.ItemStatsCreateWithoutItemInputObjectSchema = zod_1.z.object({
    timestamp: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), description: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), increasesDurability: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), increasesReputationPercent: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), topSpeed: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), ps: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), damage: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), fireRate: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), range: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), accuracy: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), timeToOverheating: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), maxAmmo: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), blastPower: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), addsEnergy: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), tonnage: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), massLimit: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), maxCabinSpeed: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), maxChassisSpeed: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), power: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), cabinPower: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), fuelReserves: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), featureBulletPercent: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), featureMeleePercent: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), featureBlastPercent: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), featureFirePercent: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), featurePassthroughPercent: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), durability: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), energyDrain: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), mass: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), perks: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), user: zod_1.z.lazy(() => UserCreateNestedOneWithoutItemStatsInput_schema_1.UserCreateNestedOneWithoutItemStatsInputObjectSchema), release: zod_1.z.lazy(() => ReleaseCreateNestedOneWithoutItemStatsInput_schema_1.ReleaseCreateNestedOneWithoutItemStatsInputObjectSchema).optional()
}).strict();

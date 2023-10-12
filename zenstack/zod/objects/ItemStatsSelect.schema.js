"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemStatsSelectObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemArgs_schema_1 = require("./ItemArgs.schema");
const UserArgs_schema_1 = require("./UserArgs.schema");
const ReleaseArgs_schema_1 = require("./ReleaseArgs.schema");
exports.ItemStatsSelectObjectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(), item: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ItemArgs_schema_1.ItemArgsObjectSchema)]).optional(), itemId: zod_1.z.boolean().optional(), user: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => UserArgs_schema_1.UserArgsObjectSchema)]).optional(), userId: zod_1.z.boolean().optional(), release: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ReleaseArgs_schema_1.ReleaseArgsObjectSchema)]).optional(), releaseId: zod_1.z.boolean().optional(), timestamp: zod_1.z.boolean().optional(), description: zod_1.z.boolean().optional(), increasesDurability: zod_1.z.boolean().optional(), increasesReputationPercent: zod_1.z.boolean().optional(), topSpeed: zod_1.z.boolean().optional(), ps: zod_1.z.boolean().optional(), damage: zod_1.z.boolean().optional(), fireRate: zod_1.z.boolean().optional(), range: zod_1.z.boolean().optional(), accuracy: zod_1.z.boolean().optional(), timeToOverheating: zod_1.z.boolean().optional(), maxAmmo: zod_1.z.boolean().optional(), blastPower: zod_1.z.boolean().optional(), addsEnergy: zod_1.z.boolean().optional(), tonnage: zod_1.z.boolean().optional(), massLimit: zod_1.z.boolean().optional(), maxCabinSpeed: zod_1.z.boolean().optional(), maxChassisSpeed: zod_1.z.boolean().optional(), power: zod_1.z.boolean().optional(), cabinPower: zod_1.z.boolean().optional(), fuelReserves: zod_1.z.boolean().optional(), featureBulletPercent: zod_1.z.boolean().optional(), featureMeleePercent: zod_1.z.boolean().optional(), featureBlastPercent: zod_1.z.boolean().optional(), featureFirePercent: zod_1.z.boolean().optional(), featurePassthroughPercent: zod_1.z.boolean().optional(), durability: zod_1.z.boolean().optional(), energyDrain: zod_1.z.boolean().optional(), mass: zod_1.z.boolean().optional(), perks: zod_1.z.boolean().optional()
}).strict();

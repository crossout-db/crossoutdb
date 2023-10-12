"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemStatsScalarWhereInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const IntFilter_schema_1 = require("./IntFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const IntNullableFilter_schema_1 = require("./IntNullableFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const FloatNullableFilter_schema_1 = require("./FloatNullableFilter.schema");
exports.ItemStatsScalarWhereInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.ItemStatsScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.ItemStatsScalarWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.ItemStatsScalarWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.ItemStatsScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.ItemStatsScalarWhereInputObjectSchema).array()]).optional(), id: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), itemId: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), userId: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), releaseId: zod_1.z.union([zod_1.z.lazy(() => IntNullableFilter_schema_1.IntNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), timestamp: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), description: zod_1.z.union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), increasesDurability: zod_1.z.union([zod_1.z.lazy(() => IntNullableFilter_schema_1.IntNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), increasesReputationPercent: zod_1.z.union([zod_1.z.lazy(() => IntNullableFilter_schema_1.IntNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), topSpeed: zod_1.z.union([zod_1.z.lazy(() => IntNullableFilter_schema_1.IntNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), ps: zod_1.z.union([zod_1.z.lazy(() => IntNullableFilter_schema_1.IntNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), damage: zod_1.z.union([zod_1.z.lazy(() => FloatNullableFilter_schema_1.FloatNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), fireRate: zod_1.z.union([zod_1.z.lazy(() => FloatNullableFilter_schema_1.FloatNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), range: zod_1.z.union([zod_1.z.lazy(() => FloatNullableFilter_schema_1.FloatNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), accuracy: zod_1.z.union([zod_1.z.lazy(() => FloatNullableFilter_schema_1.FloatNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), timeToOverheating: zod_1.z.union([zod_1.z.lazy(() => FloatNullableFilter_schema_1.FloatNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), maxAmmo: zod_1.z.union([zod_1.z.lazy(() => IntNullableFilter_schema_1.IntNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), blastPower: zod_1.z.union([zod_1.z.lazy(() => FloatNullableFilter_schema_1.FloatNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), addsEnergy: zod_1.z.union([zod_1.z.lazy(() => IntNullableFilter_schema_1.IntNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), tonnage: zod_1.z.union([zod_1.z.lazy(() => IntNullableFilter_schema_1.IntNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), massLimit: zod_1.z.union([zod_1.z.lazy(() => IntNullableFilter_schema_1.IntNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), maxCabinSpeed: zod_1.z.union([zod_1.z.lazy(() => IntNullableFilter_schema_1.IntNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), maxChassisSpeed: zod_1.z.union([zod_1.z.lazy(() => IntNullableFilter_schema_1.IntNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), power: zod_1.z.union([zod_1.z.lazy(() => IntNullableFilter_schema_1.IntNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), cabinPower: zod_1.z.union([zod_1.z.lazy(() => FloatNullableFilter_schema_1.FloatNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), fuelReserves: zod_1.z.union([zod_1.z.lazy(() => IntNullableFilter_schema_1.IntNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), featureBulletPercent: zod_1.z.union([zod_1.z.lazy(() => IntNullableFilter_schema_1.IntNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), featureMeleePercent: zod_1.z.union([zod_1.z.lazy(() => IntNullableFilter_schema_1.IntNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), featureBlastPercent: zod_1.z.union([zod_1.z.lazy(() => IntNullableFilter_schema_1.IntNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), featureFirePercent: zod_1.z.union([zod_1.z.lazy(() => IntNullableFilter_schema_1.IntNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), featurePassthroughPercent: zod_1.z.union([zod_1.z.lazy(() => IntNullableFilter_schema_1.IntNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), durability: zod_1.z.union([zod_1.z.lazy(() => IntNullableFilter_schema_1.IntNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), energyDrain: zod_1.z.union([zod_1.z.lazy(() => IntNullableFilter_schema_1.IntNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), mass: zod_1.z.union([zod_1.z.lazy(() => IntNullableFilter_schema_1.IntNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), perks: zod_1.z.union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable()
}).strict();
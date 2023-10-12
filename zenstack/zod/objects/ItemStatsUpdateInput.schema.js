"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemStatsUpdateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
const NullableStringFieldUpdateOperationsInput_schema_1 = require("./NullableStringFieldUpdateOperationsInput.schema");
const NullableIntFieldUpdateOperationsInput_schema_1 = require("./NullableIntFieldUpdateOperationsInput.schema");
const NullableFloatFieldUpdateOperationsInput_schema_1 = require("./NullableFloatFieldUpdateOperationsInput.schema");
const ItemUpdateOneRequiredWithoutItemStatsNestedInput_schema_1 = require("./ItemUpdateOneRequiredWithoutItemStatsNestedInput.schema");
const UserUpdateOneRequiredWithoutItemStatsNestedInput_schema_1 = require("./UserUpdateOneRequiredWithoutItemStatsNestedInput.schema");
const ReleaseUpdateOneWithoutItemStatsNestedInput_schema_1 = require("./ReleaseUpdateOneWithoutItemStatsNestedInput.schema");
exports.ItemStatsUpdateInputObjectSchema = zod_1.z.object({
    timestamp: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), description: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), increasesDurability: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableIntFieldUpdateOperationsInput_schema_1.NullableIntFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), increasesReputationPercent: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableIntFieldUpdateOperationsInput_schema_1.NullableIntFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), topSpeed: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableIntFieldUpdateOperationsInput_schema_1.NullableIntFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), ps: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableIntFieldUpdateOperationsInput_schema_1.NullableIntFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), damage: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableFloatFieldUpdateOperationsInput_schema_1.NullableFloatFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), fireRate: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableFloatFieldUpdateOperationsInput_schema_1.NullableFloatFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), range: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableFloatFieldUpdateOperationsInput_schema_1.NullableFloatFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), accuracy: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableFloatFieldUpdateOperationsInput_schema_1.NullableFloatFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), timeToOverheating: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableFloatFieldUpdateOperationsInput_schema_1.NullableFloatFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), maxAmmo: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableIntFieldUpdateOperationsInput_schema_1.NullableIntFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), blastPower: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableFloatFieldUpdateOperationsInput_schema_1.NullableFloatFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), addsEnergy: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableIntFieldUpdateOperationsInput_schema_1.NullableIntFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), tonnage: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableIntFieldUpdateOperationsInput_schema_1.NullableIntFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), massLimit: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableIntFieldUpdateOperationsInput_schema_1.NullableIntFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), maxCabinSpeed: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableIntFieldUpdateOperationsInput_schema_1.NullableIntFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), maxChassisSpeed: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableIntFieldUpdateOperationsInput_schema_1.NullableIntFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), power: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableIntFieldUpdateOperationsInput_schema_1.NullableIntFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), cabinPower: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableFloatFieldUpdateOperationsInput_schema_1.NullableFloatFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), fuelReserves: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableIntFieldUpdateOperationsInput_schema_1.NullableIntFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), featureBulletPercent: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableIntFieldUpdateOperationsInput_schema_1.NullableIntFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), featureMeleePercent: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableIntFieldUpdateOperationsInput_schema_1.NullableIntFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), featureBlastPercent: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableIntFieldUpdateOperationsInput_schema_1.NullableIntFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), featureFirePercent: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableIntFieldUpdateOperationsInput_schema_1.NullableIntFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), featurePassthroughPercent: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableIntFieldUpdateOperationsInput_schema_1.NullableIntFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), durability: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableIntFieldUpdateOperationsInput_schema_1.NullableIntFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), energyDrain: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableIntFieldUpdateOperationsInput_schema_1.NullableIntFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), mass: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableIntFieldUpdateOperationsInput_schema_1.NullableIntFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), perks: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), item: zod_1.z.lazy(() => ItemUpdateOneRequiredWithoutItemStatsNestedInput_schema_1.ItemUpdateOneRequiredWithoutItemStatsNestedInputObjectSchema).optional(), user: zod_1.z.lazy(() => UserUpdateOneRequiredWithoutItemStatsNestedInput_schema_1.UserUpdateOneRequiredWithoutItemStatsNestedInputObjectSchema).optional(), release: zod_1.z.lazy(() => ReleaseUpdateOneWithoutItemStatsNestedInput_schema_1.ReleaseUpdateOneWithoutItemStatsNestedInputObjectSchema).optional()
}).strict();

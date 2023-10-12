"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseIncludeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemStatsInput_schema_1 = require("../input/ItemStatsInput.schema");
const RecipeInput_schema_1 = require("../input/RecipeInput.schema");
const PackInput_schema_1 = require("../input/PackInput.schema");
const ReleaseCountOutputTypeArgs_schema_1 = require("./ReleaseCountOutputTypeArgs.schema");
exports.ReleaseIncludeObjectSchema = zod_1.z.object({
    itemStats: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ItemStatsInput_schema_1.ItemStatsInputSchema.findMany)]).optional(), recipes: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => RecipeInput_schema_1.RecipeInputSchema.findMany)]).optional(), packs: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => PackInput_schema_1.PackInputSchema.findMany)]).optional(), _count: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ReleaseCountOutputTypeArgs_schema_1.ReleaseCountOutputTypeArgsObjectSchema)]).optional()
}).strict();

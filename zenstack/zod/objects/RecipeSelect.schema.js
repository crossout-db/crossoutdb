"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeSelectObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemArgs_schema_1 = require("./ItemArgs.schema");
const ReleaseArgs_schema_1 = require("./ReleaseArgs.schema");
const RecipeItemInput_schema_1 = require("../input/RecipeItemInput.schema");
const RecipeCountOutputTypeArgs_schema_1 = require("./RecipeCountOutputTypeArgs.schema");
exports.RecipeSelectObjectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(), result: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ItemArgs_schema_1.ItemArgsObjectSchema)]).optional(), resultItemId: zod_1.z.boolean().optional(), quantity: zod_1.z.boolean().optional(), release: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ReleaseArgs_schema_1.ReleaseArgsObjectSchema)]).optional(), releaseId: zod_1.z.boolean().optional(), craftCost: zod_1.z.boolean().optional(), timestamp: zod_1.z.boolean().optional(), active: zod_1.z.boolean().optional(), ingredients: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => RecipeItemInput_schema_1.RecipeItemInputSchema.findMany)]).optional(), _count: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => RecipeCountOutputTypeArgs_schema_1.RecipeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();

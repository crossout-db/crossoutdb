"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeIncludeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemArgs_schema_1 = require("./ItemArgs.schema");
const ReleaseArgs_schema_1 = require("./ReleaseArgs.schema");
const RecipeItemInput_schema_1 = require("../input/RecipeItemInput.schema");
const RecipeCountOutputTypeArgs_schema_1 = require("./RecipeCountOutputTypeArgs.schema");
exports.RecipeIncludeObjectSchema = zod_1.z.object({
    result: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ItemArgs_schema_1.ItemArgsObjectSchema)]).optional(), release: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ReleaseArgs_schema_1.ReleaseArgsObjectSchema)]).optional(), ingredients: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => RecipeItemInput_schema_1.RecipeItemInputSchema.findMany)]).optional(), _count: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => RecipeCountOutputTypeArgs_schema_1.RecipeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();

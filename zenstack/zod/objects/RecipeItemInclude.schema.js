"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeItemIncludeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeArgs_schema_1 = require("./RecipeArgs.schema");
const ItemArgs_schema_1 = require("./ItemArgs.schema");
exports.RecipeItemIncludeObjectSchema = zod_1.z.object({
    recipe: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => RecipeArgs_schema_1.RecipeArgsObjectSchema)]).optional(), item: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ItemArgs_schema_1.ItemArgsObjectSchema)]).optional()
}).strict();

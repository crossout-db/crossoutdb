"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeItemSelectObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeArgs_schema_1 = require("./RecipeArgs.schema");
const ItemArgs_schema_1 = require("./ItemArgs.schema");
exports.RecipeItemSelectObjectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(), recipe: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => RecipeArgs_schema_1.RecipeArgsObjectSchema)]).optional(), recipeId: zod_1.z.boolean().optional(), item: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ItemArgs_schema_1.ItemArgsObjectSchema)]).optional(), itemId: zod_1.z.boolean().optional(), quantity: zod_1.z.boolean().optional()
}).strict();

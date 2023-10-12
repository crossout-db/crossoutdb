"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeItemUpdateWithWhereUniqueWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeItemWhereUniqueInput_schema_1 = require("./RecipeItemWhereUniqueInput.schema");
const RecipeItemUpdateWithoutItemInput_schema_1 = require("./RecipeItemUpdateWithoutItemInput.schema");
const RecipeItemUncheckedUpdateWithoutItemInput_schema_1 = require("./RecipeItemUncheckedUpdateWithoutItemInput.schema");
exports.RecipeItemUpdateWithWhereUniqueWithoutItemInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => RecipeItemWhereUniqueInput_schema_1.RecipeItemWhereUniqueInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => RecipeItemUpdateWithoutItemInput_schema_1.RecipeItemUpdateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemUncheckedUpdateWithoutItemInput_schema_1.RecipeItemUncheckedUpdateWithoutItemInputObjectSchema)])
}).strict();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeItemUpsertWithWhereUniqueWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeItemWhereUniqueInput_schema_1 = require("./RecipeItemWhereUniqueInput.schema");
const RecipeItemUpdateWithoutItemInput_schema_1 = require("./RecipeItemUpdateWithoutItemInput.schema");
const RecipeItemUncheckedUpdateWithoutItemInput_schema_1 = require("./RecipeItemUncheckedUpdateWithoutItemInput.schema");
const RecipeItemCreateWithoutItemInput_schema_1 = require("./RecipeItemCreateWithoutItemInput.schema");
const RecipeItemUncheckedCreateWithoutItemInput_schema_1 = require("./RecipeItemUncheckedCreateWithoutItemInput.schema");
exports.RecipeItemUpsertWithWhereUniqueWithoutItemInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => RecipeItemWhereUniqueInput_schema_1.RecipeItemWhereUniqueInputObjectSchema), update: zod_1.z.union([zod_1.z.lazy(() => RecipeItemUpdateWithoutItemInput_schema_1.RecipeItemUpdateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemUncheckedUpdateWithoutItemInput_schema_1.RecipeItemUncheckedUpdateWithoutItemInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => RecipeItemCreateWithoutItemInput_schema_1.RecipeItemCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemUncheckedCreateWithoutItemInput_schema_1.RecipeItemUncheckedCreateWithoutItemInputObjectSchema)])
}).strict();

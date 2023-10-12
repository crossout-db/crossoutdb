"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeItemCreateOrConnectWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeItemWhereUniqueInput_schema_1 = require("./RecipeItemWhereUniqueInput.schema");
const RecipeItemCreateWithoutItemInput_schema_1 = require("./RecipeItemCreateWithoutItemInput.schema");
const RecipeItemUncheckedCreateWithoutItemInput_schema_1 = require("./RecipeItemUncheckedCreateWithoutItemInput.schema");
exports.RecipeItemCreateOrConnectWithoutItemInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => RecipeItemWhereUniqueInput_schema_1.RecipeItemWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => RecipeItemCreateWithoutItemInput_schema_1.RecipeItemCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemUncheckedCreateWithoutItemInput_schema_1.RecipeItemUncheckedCreateWithoutItemInputObjectSchema)])
}).strict();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeUpdateWithWhereUniqueWithoutResultInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeWhereUniqueInput_schema_1 = require("./RecipeWhereUniqueInput.schema");
const RecipeUpdateWithoutResultInput_schema_1 = require("./RecipeUpdateWithoutResultInput.schema");
const RecipeUncheckedUpdateWithoutResultInput_schema_1 = require("./RecipeUncheckedUpdateWithoutResultInput.schema");
exports.RecipeUpdateWithWhereUniqueWithoutResultInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => RecipeWhereUniqueInput_schema_1.RecipeWhereUniqueInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => RecipeUpdateWithoutResultInput_schema_1.RecipeUpdateWithoutResultInputObjectSchema),
        zod_1.z.lazy(() => RecipeUncheckedUpdateWithoutResultInput_schema_1.RecipeUncheckedUpdateWithoutResultInputObjectSchema)])
}).strict();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeUpsertWithWhereUniqueWithoutResultInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeWhereUniqueInput_schema_1 = require("./RecipeWhereUniqueInput.schema");
const RecipeUpdateWithoutResultInput_schema_1 = require("./RecipeUpdateWithoutResultInput.schema");
const RecipeUncheckedUpdateWithoutResultInput_schema_1 = require("./RecipeUncheckedUpdateWithoutResultInput.schema");
const RecipeCreateWithoutResultInput_schema_1 = require("./RecipeCreateWithoutResultInput.schema");
const RecipeUncheckedCreateWithoutResultInput_schema_1 = require("./RecipeUncheckedCreateWithoutResultInput.schema");
exports.RecipeUpsertWithWhereUniqueWithoutResultInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => RecipeWhereUniqueInput_schema_1.RecipeWhereUniqueInputObjectSchema), update: zod_1.z.union([zod_1.z.lazy(() => RecipeUpdateWithoutResultInput_schema_1.RecipeUpdateWithoutResultInputObjectSchema),
        zod_1.z.lazy(() => RecipeUncheckedUpdateWithoutResultInput_schema_1.RecipeUncheckedUpdateWithoutResultInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => RecipeCreateWithoutResultInput_schema_1.RecipeCreateWithoutResultInputObjectSchema),
        zod_1.z.lazy(() => RecipeUncheckedCreateWithoutResultInput_schema_1.RecipeUncheckedCreateWithoutResultInputObjectSchema)])
}).strict();

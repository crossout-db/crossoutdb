"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeCreateOrConnectWithoutResultInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeWhereUniqueInput_schema_1 = require("./RecipeWhereUniqueInput.schema");
const RecipeCreateWithoutResultInput_schema_1 = require("./RecipeCreateWithoutResultInput.schema");
const RecipeUncheckedCreateWithoutResultInput_schema_1 = require("./RecipeUncheckedCreateWithoutResultInput.schema");
exports.RecipeCreateOrConnectWithoutResultInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => RecipeWhereUniqueInput_schema_1.RecipeWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => RecipeCreateWithoutResultInput_schema_1.RecipeCreateWithoutResultInputObjectSchema),
        zod_1.z.lazy(() => RecipeUncheckedCreateWithoutResultInput_schema_1.RecipeUncheckedCreateWithoutResultInputObjectSchema)])
}).strict();

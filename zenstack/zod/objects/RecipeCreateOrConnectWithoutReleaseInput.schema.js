"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeCreateOrConnectWithoutReleaseInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeWhereUniqueInput_schema_1 = require("./RecipeWhereUniqueInput.schema");
const RecipeCreateWithoutReleaseInput_schema_1 = require("./RecipeCreateWithoutReleaseInput.schema");
const RecipeUncheckedCreateWithoutReleaseInput_schema_1 = require("./RecipeUncheckedCreateWithoutReleaseInput.schema");
exports.RecipeCreateOrConnectWithoutReleaseInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => RecipeWhereUniqueInput_schema_1.RecipeWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => RecipeCreateWithoutReleaseInput_schema_1.RecipeCreateWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => RecipeUncheckedCreateWithoutReleaseInput_schema_1.RecipeUncheckedCreateWithoutReleaseInputObjectSchema)])
}).strict();

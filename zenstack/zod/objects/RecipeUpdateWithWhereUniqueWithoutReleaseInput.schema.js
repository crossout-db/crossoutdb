"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeUpdateWithWhereUniqueWithoutReleaseInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeWhereUniqueInput_schema_1 = require("./RecipeWhereUniqueInput.schema");
const RecipeUpdateWithoutReleaseInput_schema_1 = require("./RecipeUpdateWithoutReleaseInput.schema");
const RecipeUncheckedUpdateWithoutReleaseInput_schema_1 = require("./RecipeUncheckedUpdateWithoutReleaseInput.schema");
exports.RecipeUpdateWithWhereUniqueWithoutReleaseInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => RecipeWhereUniqueInput_schema_1.RecipeWhereUniqueInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => RecipeUpdateWithoutReleaseInput_schema_1.RecipeUpdateWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => RecipeUncheckedUpdateWithoutReleaseInput_schema_1.RecipeUncheckedUpdateWithoutReleaseInputObjectSchema)])
}).strict();

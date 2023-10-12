"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeUpdateOneRequiredWithoutIngredientsNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeCreateWithoutIngredientsInput_schema_1 = require("./RecipeCreateWithoutIngredientsInput.schema");
const RecipeUncheckedCreateWithoutIngredientsInput_schema_1 = require("./RecipeUncheckedCreateWithoutIngredientsInput.schema");
const RecipeCreateOrConnectWithoutIngredientsInput_schema_1 = require("./RecipeCreateOrConnectWithoutIngredientsInput.schema");
const RecipeUpsertWithoutIngredientsInput_schema_1 = require("./RecipeUpsertWithoutIngredientsInput.schema");
const RecipeWhereUniqueInput_schema_1 = require("./RecipeWhereUniqueInput.schema");
const RecipeUpdateToOneWithWhereWithoutIngredientsInput_schema_1 = require("./RecipeUpdateToOneWithWhereWithoutIngredientsInput.schema");
const RecipeUpdateWithoutIngredientsInput_schema_1 = require("./RecipeUpdateWithoutIngredientsInput.schema");
const RecipeUncheckedUpdateWithoutIngredientsInput_schema_1 = require("./RecipeUncheckedUpdateWithoutIngredientsInput.schema");
exports.RecipeUpdateOneRequiredWithoutIngredientsNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => RecipeCreateWithoutIngredientsInput_schema_1.RecipeCreateWithoutIngredientsInputObjectSchema),
        zod_1.z.lazy(() => RecipeUncheckedCreateWithoutIngredientsInput_schema_1.RecipeUncheckedCreateWithoutIngredientsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => RecipeCreateOrConnectWithoutIngredientsInput_schema_1.RecipeCreateOrConnectWithoutIngredientsInputObjectSchema).optional(), upsert: zod_1.z.lazy(() => RecipeUpsertWithoutIngredientsInput_schema_1.RecipeUpsertWithoutIngredientsInputObjectSchema).optional(), connect: zod_1.z.lazy(() => RecipeWhereUniqueInput_schema_1.RecipeWhereUniqueInputObjectSchema).optional(), update: zod_1.z.union([zod_1.z.lazy(() => RecipeUpdateToOneWithWhereWithoutIngredientsInput_schema_1.RecipeUpdateToOneWithWhereWithoutIngredientsInputObjectSchema),
        zod_1.z.lazy(() => RecipeUpdateWithoutIngredientsInput_schema_1.RecipeUpdateWithoutIngredientsInputObjectSchema),
        zod_1.z.lazy(() => RecipeUncheckedUpdateWithoutIngredientsInput_schema_1.RecipeUncheckedUpdateWithoutIngredientsInputObjectSchema)]).optional()
}).strict();

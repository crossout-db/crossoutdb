"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeItemCreateNestedManyWithoutRecipeInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeItemCreateWithoutRecipeInput_schema_1 = require("./RecipeItemCreateWithoutRecipeInput.schema");
const RecipeItemUncheckedCreateWithoutRecipeInput_schema_1 = require("./RecipeItemUncheckedCreateWithoutRecipeInput.schema");
const RecipeItemCreateOrConnectWithoutRecipeInput_schema_1 = require("./RecipeItemCreateOrConnectWithoutRecipeInput.schema");
const RecipeItemCreateManyRecipeInputEnvelope_schema_1 = require("./RecipeItemCreateManyRecipeInputEnvelope.schema");
const RecipeItemWhereUniqueInput_schema_1 = require("./RecipeItemWhereUniqueInput.schema");
exports.RecipeItemCreateNestedManyWithoutRecipeInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => RecipeItemCreateWithoutRecipeInput_schema_1.RecipeItemCreateWithoutRecipeInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemCreateWithoutRecipeInput_schema_1.RecipeItemCreateWithoutRecipeInputObjectSchema).array(),
        zod_1.z.lazy(() => RecipeItemUncheckedCreateWithoutRecipeInput_schema_1.RecipeItemUncheckedCreateWithoutRecipeInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemUncheckedCreateWithoutRecipeInput_schema_1.RecipeItemUncheckedCreateWithoutRecipeInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => RecipeItemCreateOrConnectWithoutRecipeInput_schema_1.RecipeItemCreateOrConnectWithoutRecipeInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemCreateOrConnectWithoutRecipeInput_schema_1.RecipeItemCreateOrConnectWithoutRecipeInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => RecipeItemCreateManyRecipeInputEnvelope_schema_1.RecipeItemCreateManyRecipeInputEnvelopeObjectSchema).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => RecipeItemWhereUniqueInput_schema_1.RecipeItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemWhereUniqueInput_schema_1.RecipeItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeItemCreateNestedManyWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeItemCreateWithoutItemInput_schema_1 = require("./RecipeItemCreateWithoutItemInput.schema");
const RecipeItemUncheckedCreateWithoutItemInput_schema_1 = require("./RecipeItemUncheckedCreateWithoutItemInput.schema");
const RecipeItemCreateOrConnectWithoutItemInput_schema_1 = require("./RecipeItemCreateOrConnectWithoutItemInput.schema");
const RecipeItemCreateManyItemInputEnvelope_schema_1 = require("./RecipeItemCreateManyItemInputEnvelope.schema");
const RecipeItemWhereUniqueInput_schema_1 = require("./RecipeItemWhereUniqueInput.schema");
exports.RecipeItemCreateNestedManyWithoutItemInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => RecipeItemCreateWithoutItemInput_schema_1.RecipeItemCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemCreateWithoutItemInput_schema_1.RecipeItemCreateWithoutItemInputObjectSchema).array(),
        zod_1.z.lazy(() => RecipeItemUncheckedCreateWithoutItemInput_schema_1.RecipeItemUncheckedCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemUncheckedCreateWithoutItemInput_schema_1.RecipeItemUncheckedCreateWithoutItemInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => RecipeItemCreateOrConnectWithoutItemInput_schema_1.RecipeItemCreateOrConnectWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemCreateOrConnectWithoutItemInput_schema_1.RecipeItemCreateOrConnectWithoutItemInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => RecipeItemCreateManyItemInputEnvelope_schema_1.RecipeItemCreateManyItemInputEnvelopeObjectSchema).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => RecipeItemWhereUniqueInput_schema_1.RecipeItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemWhereUniqueInput_schema_1.RecipeItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();

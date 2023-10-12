"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeUncheckedCreateNestedManyWithoutResultInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeCreateWithoutResultInput_schema_1 = require("./RecipeCreateWithoutResultInput.schema");
const RecipeUncheckedCreateWithoutResultInput_schema_1 = require("./RecipeUncheckedCreateWithoutResultInput.schema");
const RecipeCreateOrConnectWithoutResultInput_schema_1 = require("./RecipeCreateOrConnectWithoutResultInput.schema");
const RecipeCreateManyResultInputEnvelope_schema_1 = require("./RecipeCreateManyResultInputEnvelope.schema");
const RecipeWhereUniqueInput_schema_1 = require("./RecipeWhereUniqueInput.schema");
exports.RecipeUncheckedCreateNestedManyWithoutResultInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => RecipeCreateWithoutResultInput_schema_1.RecipeCreateWithoutResultInputObjectSchema),
        zod_1.z.lazy(() => RecipeCreateWithoutResultInput_schema_1.RecipeCreateWithoutResultInputObjectSchema).array(),
        zod_1.z.lazy(() => RecipeUncheckedCreateWithoutResultInput_schema_1.RecipeUncheckedCreateWithoutResultInputObjectSchema),
        zod_1.z.lazy(() => RecipeUncheckedCreateWithoutResultInput_schema_1.RecipeUncheckedCreateWithoutResultInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => RecipeCreateOrConnectWithoutResultInput_schema_1.RecipeCreateOrConnectWithoutResultInputObjectSchema),
        zod_1.z.lazy(() => RecipeCreateOrConnectWithoutResultInput_schema_1.RecipeCreateOrConnectWithoutResultInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => RecipeCreateManyResultInputEnvelope_schema_1.RecipeCreateManyResultInputEnvelopeObjectSchema).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => RecipeWhereUniqueInput_schema_1.RecipeWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => RecipeWhereUniqueInput_schema_1.RecipeWhereUniqueInputObjectSchema).array()]).optional()
}).strict();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeCreateNestedManyWithoutReleaseInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeCreateWithoutReleaseInput_schema_1 = require("./RecipeCreateWithoutReleaseInput.schema");
const RecipeUncheckedCreateWithoutReleaseInput_schema_1 = require("./RecipeUncheckedCreateWithoutReleaseInput.schema");
const RecipeCreateOrConnectWithoutReleaseInput_schema_1 = require("./RecipeCreateOrConnectWithoutReleaseInput.schema");
const RecipeCreateManyReleaseInputEnvelope_schema_1 = require("./RecipeCreateManyReleaseInputEnvelope.schema");
const RecipeWhereUniqueInput_schema_1 = require("./RecipeWhereUniqueInput.schema");
exports.RecipeCreateNestedManyWithoutReleaseInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => RecipeCreateWithoutReleaseInput_schema_1.RecipeCreateWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => RecipeCreateWithoutReleaseInput_schema_1.RecipeCreateWithoutReleaseInputObjectSchema).array(),
        zod_1.z.lazy(() => RecipeUncheckedCreateWithoutReleaseInput_schema_1.RecipeUncheckedCreateWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => RecipeUncheckedCreateWithoutReleaseInput_schema_1.RecipeUncheckedCreateWithoutReleaseInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => RecipeCreateOrConnectWithoutReleaseInput_schema_1.RecipeCreateOrConnectWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => RecipeCreateOrConnectWithoutReleaseInput_schema_1.RecipeCreateOrConnectWithoutReleaseInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => RecipeCreateManyReleaseInputEnvelope_schema_1.RecipeCreateManyReleaseInputEnvelopeObjectSchema).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => RecipeWhereUniqueInput_schema_1.RecipeWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => RecipeWhereUniqueInput_schema_1.RecipeWhereUniqueInputObjectSchema).array()]).optional()
}).strict();

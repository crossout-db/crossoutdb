"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeUncheckedUpdateManyWithoutResultNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeCreateWithoutResultInput_schema_1 = require("./RecipeCreateWithoutResultInput.schema");
const RecipeUncheckedCreateWithoutResultInput_schema_1 = require("./RecipeUncheckedCreateWithoutResultInput.schema");
const RecipeCreateOrConnectWithoutResultInput_schema_1 = require("./RecipeCreateOrConnectWithoutResultInput.schema");
const RecipeUpsertWithWhereUniqueWithoutResultInput_schema_1 = require("./RecipeUpsertWithWhereUniqueWithoutResultInput.schema");
const RecipeCreateManyResultInputEnvelope_schema_1 = require("./RecipeCreateManyResultInputEnvelope.schema");
const RecipeWhereUniqueInput_schema_1 = require("./RecipeWhereUniqueInput.schema");
const RecipeUpdateWithWhereUniqueWithoutResultInput_schema_1 = require("./RecipeUpdateWithWhereUniqueWithoutResultInput.schema");
const RecipeUpdateManyWithWhereWithoutResultInput_schema_1 = require("./RecipeUpdateManyWithWhereWithoutResultInput.schema");
const RecipeScalarWhereInput_schema_1 = require("./RecipeScalarWhereInput.schema");
exports.RecipeUncheckedUpdateManyWithoutResultNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => RecipeCreateWithoutResultInput_schema_1.RecipeCreateWithoutResultInputObjectSchema),
        zod_1.z.lazy(() => RecipeCreateWithoutResultInput_schema_1.RecipeCreateWithoutResultInputObjectSchema).array(),
        zod_1.z.lazy(() => RecipeUncheckedCreateWithoutResultInput_schema_1.RecipeUncheckedCreateWithoutResultInputObjectSchema),
        zod_1.z.lazy(() => RecipeUncheckedCreateWithoutResultInput_schema_1.RecipeUncheckedCreateWithoutResultInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => RecipeCreateOrConnectWithoutResultInput_schema_1.RecipeCreateOrConnectWithoutResultInputObjectSchema),
        zod_1.z.lazy(() => RecipeCreateOrConnectWithoutResultInput_schema_1.RecipeCreateOrConnectWithoutResultInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => RecipeUpsertWithWhereUniqueWithoutResultInput_schema_1.RecipeUpsertWithWhereUniqueWithoutResultInputObjectSchema),
        zod_1.z.lazy(() => RecipeUpsertWithWhereUniqueWithoutResultInput_schema_1.RecipeUpsertWithWhereUniqueWithoutResultInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => RecipeCreateManyResultInputEnvelope_schema_1.RecipeCreateManyResultInputEnvelopeObjectSchema).optional(), set: zod_1.z.union([zod_1.z.lazy(() => RecipeWhereUniqueInput_schema_1.RecipeWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => RecipeWhereUniqueInput_schema_1.RecipeWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => RecipeWhereUniqueInput_schema_1.RecipeWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => RecipeWhereUniqueInput_schema_1.RecipeWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => RecipeWhereUniqueInput_schema_1.RecipeWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => RecipeWhereUniqueInput_schema_1.RecipeWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => RecipeWhereUniqueInput_schema_1.RecipeWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => RecipeWhereUniqueInput_schema_1.RecipeWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => RecipeUpdateWithWhereUniqueWithoutResultInput_schema_1.RecipeUpdateWithWhereUniqueWithoutResultInputObjectSchema),
        zod_1.z.lazy(() => RecipeUpdateWithWhereUniqueWithoutResultInput_schema_1.RecipeUpdateWithWhereUniqueWithoutResultInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => RecipeUpdateManyWithWhereWithoutResultInput_schema_1.RecipeUpdateManyWithWhereWithoutResultInputObjectSchema),
        zod_1.z.lazy(() => RecipeUpdateManyWithWhereWithoutResultInput_schema_1.RecipeUpdateManyWithWhereWithoutResultInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => RecipeScalarWhereInput_schema_1.RecipeScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => RecipeScalarWhereInput_schema_1.RecipeScalarWhereInputObjectSchema).array()]).optional()
}).strict();

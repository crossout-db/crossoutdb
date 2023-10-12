"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeUpdateManyWithoutReleaseNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeCreateWithoutReleaseInput_schema_1 = require("./RecipeCreateWithoutReleaseInput.schema");
const RecipeUncheckedCreateWithoutReleaseInput_schema_1 = require("./RecipeUncheckedCreateWithoutReleaseInput.schema");
const RecipeCreateOrConnectWithoutReleaseInput_schema_1 = require("./RecipeCreateOrConnectWithoutReleaseInput.schema");
const RecipeUpsertWithWhereUniqueWithoutReleaseInput_schema_1 = require("./RecipeUpsertWithWhereUniqueWithoutReleaseInput.schema");
const RecipeCreateManyReleaseInputEnvelope_schema_1 = require("./RecipeCreateManyReleaseInputEnvelope.schema");
const RecipeWhereUniqueInput_schema_1 = require("./RecipeWhereUniqueInput.schema");
const RecipeUpdateWithWhereUniqueWithoutReleaseInput_schema_1 = require("./RecipeUpdateWithWhereUniqueWithoutReleaseInput.schema");
const RecipeUpdateManyWithWhereWithoutReleaseInput_schema_1 = require("./RecipeUpdateManyWithWhereWithoutReleaseInput.schema");
const RecipeScalarWhereInput_schema_1 = require("./RecipeScalarWhereInput.schema");
exports.RecipeUpdateManyWithoutReleaseNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => RecipeCreateWithoutReleaseInput_schema_1.RecipeCreateWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => RecipeCreateWithoutReleaseInput_schema_1.RecipeCreateWithoutReleaseInputObjectSchema).array(),
        zod_1.z.lazy(() => RecipeUncheckedCreateWithoutReleaseInput_schema_1.RecipeUncheckedCreateWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => RecipeUncheckedCreateWithoutReleaseInput_schema_1.RecipeUncheckedCreateWithoutReleaseInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => RecipeCreateOrConnectWithoutReleaseInput_schema_1.RecipeCreateOrConnectWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => RecipeCreateOrConnectWithoutReleaseInput_schema_1.RecipeCreateOrConnectWithoutReleaseInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => RecipeUpsertWithWhereUniqueWithoutReleaseInput_schema_1.RecipeUpsertWithWhereUniqueWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => RecipeUpsertWithWhereUniqueWithoutReleaseInput_schema_1.RecipeUpsertWithWhereUniqueWithoutReleaseInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => RecipeCreateManyReleaseInputEnvelope_schema_1.RecipeCreateManyReleaseInputEnvelopeObjectSchema).optional(), set: zod_1.z.union([zod_1.z.lazy(() => RecipeWhereUniqueInput_schema_1.RecipeWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => RecipeWhereUniqueInput_schema_1.RecipeWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => RecipeWhereUniqueInput_schema_1.RecipeWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => RecipeWhereUniqueInput_schema_1.RecipeWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => RecipeWhereUniqueInput_schema_1.RecipeWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => RecipeWhereUniqueInput_schema_1.RecipeWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => RecipeWhereUniqueInput_schema_1.RecipeWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => RecipeWhereUniqueInput_schema_1.RecipeWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => RecipeUpdateWithWhereUniqueWithoutReleaseInput_schema_1.RecipeUpdateWithWhereUniqueWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => RecipeUpdateWithWhereUniqueWithoutReleaseInput_schema_1.RecipeUpdateWithWhereUniqueWithoutReleaseInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => RecipeUpdateManyWithWhereWithoutReleaseInput_schema_1.RecipeUpdateManyWithWhereWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => RecipeUpdateManyWithWhereWithoutReleaseInput_schema_1.RecipeUpdateManyWithWhereWithoutReleaseInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => RecipeScalarWhereInput_schema_1.RecipeScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => RecipeScalarWhereInput_schema_1.RecipeScalarWhereInputObjectSchema).array()]).optional()
}).strict();

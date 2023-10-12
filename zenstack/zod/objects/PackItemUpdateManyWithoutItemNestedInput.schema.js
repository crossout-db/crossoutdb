"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackItemUpdateManyWithoutItemNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackItemCreateWithoutItemInput_schema_1 = require("./PackItemCreateWithoutItemInput.schema");
const PackItemUncheckedCreateWithoutItemInput_schema_1 = require("./PackItemUncheckedCreateWithoutItemInput.schema");
const PackItemCreateOrConnectWithoutItemInput_schema_1 = require("./PackItemCreateOrConnectWithoutItemInput.schema");
const PackItemUpsertWithWhereUniqueWithoutItemInput_schema_1 = require("./PackItemUpsertWithWhereUniqueWithoutItemInput.schema");
const PackItemCreateManyItemInputEnvelope_schema_1 = require("./PackItemCreateManyItemInputEnvelope.schema");
const PackItemWhereUniqueInput_schema_1 = require("./PackItemWhereUniqueInput.schema");
const PackItemUpdateWithWhereUniqueWithoutItemInput_schema_1 = require("./PackItemUpdateWithWhereUniqueWithoutItemInput.schema");
const PackItemUpdateManyWithWhereWithoutItemInput_schema_1 = require("./PackItemUpdateManyWithWhereWithoutItemInput.schema");
const PackItemScalarWhereInput_schema_1 = require("./PackItemScalarWhereInput.schema");
exports.PackItemUpdateManyWithoutItemNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => PackItemCreateWithoutItemInput_schema_1.PackItemCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => PackItemCreateWithoutItemInput_schema_1.PackItemCreateWithoutItemInputObjectSchema).array(),
        zod_1.z.lazy(() => PackItemUncheckedCreateWithoutItemInput_schema_1.PackItemUncheckedCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => PackItemUncheckedCreateWithoutItemInput_schema_1.PackItemUncheckedCreateWithoutItemInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => PackItemCreateOrConnectWithoutItemInput_schema_1.PackItemCreateOrConnectWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => PackItemCreateOrConnectWithoutItemInput_schema_1.PackItemCreateOrConnectWithoutItemInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => PackItemUpsertWithWhereUniqueWithoutItemInput_schema_1.PackItemUpsertWithWhereUniqueWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => PackItemUpsertWithWhereUniqueWithoutItemInput_schema_1.PackItemUpsertWithWhereUniqueWithoutItemInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => PackItemCreateManyItemInputEnvelope_schema_1.PackItemCreateManyItemInputEnvelopeObjectSchema).optional(), set: zod_1.z.union([zod_1.z.lazy(() => PackItemWhereUniqueInput_schema_1.PackItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PackItemWhereUniqueInput_schema_1.PackItemWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => PackItemWhereUniqueInput_schema_1.PackItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PackItemWhereUniqueInput_schema_1.PackItemWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => PackItemWhereUniqueInput_schema_1.PackItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PackItemWhereUniqueInput_schema_1.PackItemWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => PackItemWhereUniqueInput_schema_1.PackItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PackItemWhereUniqueInput_schema_1.PackItemWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => PackItemUpdateWithWhereUniqueWithoutItemInput_schema_1.PackItemUpdateWithWhereUniqueWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => PackItemUpdateWithWhereUniqueWithoutItemInput_schema_1.PackItemUpdateWithWhereUniqueWithoutItemInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => PackItemUpdateManyWithWhereWithoutItemInput_schema_1.PackItemUpdateManyWithWhereWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => PackItemUpdateManyWithWhereWithoutItemInput_schema_1.PackItemUpdateManyWithWhereWithoutItemInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => PackItemScalarWhereInput_schema_1.PackItemScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => PackItemScalarWhereInput_schema_1.PackItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();

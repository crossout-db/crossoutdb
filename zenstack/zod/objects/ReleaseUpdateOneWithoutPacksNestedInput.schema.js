"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseUpdateOneWithoutPacksNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ReleaseCreateWithoutPacksInput_schema_1 = require("./ReleaseCreateWithoutPacksInput.schema");
const ReleaseUncheckedCreateWithoutPacksInput_schema_1 = require("./ReleaseUncheckedCreateWithoutPacksInput.schema");
const ReleaseCreateOrConnectWithoutPacksInput_schema_1 = require("./ReleaseCreateOrConnectWithoutPacksInput.schema");
const ReleaseUpsertWithoutPacksInput_schema_1 = require("./ReleaseUpsertWithoutPacksInput.schema");
const ReleaseWhereInput_schema_1 = require("./ReleaseWhereInput.schema");
const ReleaseWhereUniqueInput_schema_1 = require("./ReleaseWhereUniqueInput.schema");
const ReleaseUpdateToOneWithWhereWithoutPacksInput_schema_1 = require("./ReleaseUpdateToOneWithWhereWithoutPacksInput.schema");
const ReleaseUpdateWithoutPacksInput_schema_1 = require("./ReleaseUpdateWithoutPacksInput.schema");
const ReleaseUncheckedUpdateWithoutPacksInput_schema_1 = require("./ReleaseUncheckedUpdateWithoutPacksInput.schema");
exports.ReleaseUpdateOneWithoutPacksNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ReleaseCreateWithoutPacksInput_schema_1.ReleaseCreateWithoutPacksInputObjectSchema),
        zod_1.z.lazy(() => ReleaseUncheckedCreateWithoutPacksInput_schema_1.ReleaseUncheckedCreateWithoutPacksInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ReleaseCreateOrConnectWithoutPacksInput_schema_1.ReleaseCreateOrConnectWithoutPacksInputObjectSchema).optional(), upsert: zod_1.z.lazy(() => ReleaseUpsertWithoutPacksInput_schema_1.ReleaseUpsertWithoutPacksInputObjectSchema).optional(), disconnect: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ReleaseWhereInput_schema_1.ReleaseWhereInputObjectSchema)]).optional(), delete: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ReleaseWhereInput_schema_1.ReleaseWhereInputObjectSchema)]).optional(), connect: zod_1.z.lazy(() => ReleaseWhereUniqueInput_schema_1.ReleaseWhereUniqueInputObjectSchema).optional(), update: zod_1.z.union([zod_1.z.lazy(() => ReleaseUpdateToOneWithWhereWithoutPacksInput_schema_1.ReleaseUpdateToOneWithWhereWithoutPacksInputObjectSchema),
        zod_1.z.lazy(() => ReleaseUpdateWithoutPacksInput_schema_1.ReleaseUpdateWithoutPacksInputObjectSchema),
        zod_1.z.lazy(() => ReleaseUncheckedUpdateWithoutPacksInput_schema_1.ReleaseUncheckedUpdateWithoutPacksInputObjectSchema)]).optional()
}).strict();

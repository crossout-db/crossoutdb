"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseUpsertWithoutPacksInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ReleaseUpdateWithoutPacksInput_schema_1 = require("./ReleaseUpdateWithoutPacksInput.schema");
const ReleaseUncheckedUpdateWithoutPacksInput_schema_1 = require("./ReleaseUncheckedUpdateWithoutPacksInput.schema");
const ReleaseCreateWithoutPacksInput_schema_1 = require("./ReleaseCreateWithoutPacksInput.schema");
const ReleaseUncheckedCreateWithoutPacksInput_schema_1 = require("./ReleaseUncheckedCreateWithoutPacksInput.schema");
const ReleaseWhereInput_schema_1 = require("./ReleaseWhereInput.schema");
exports.ReleaseUpsertWithoutPacksInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => ReleaseUpdateWithoutPacksInput_schema_1.ReleaseUpdateWithoutPacksInputObjectSchema),
        zod_1.z.lazy(() => ReleaseUncheckedUpdateWithoutPacksInput_schema_1.ReleaseUncheckedUpdateWithoutPacksInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => ReleaseCreateWithoutPacksInput_schema_1.ReleaseCreateWithoutPacksInputObjectSchema),
        zod_1.z.lazy(() => ReleaseUncheckedCreateWithoutPacksInput_schema_1.ReleaseUncheckedCreateWithoutPacksInputObjectSchema)]), where: zod_1.z.lazy(() => ReleaseWhereInput_schema_1.ReleaseWhereInputObjectSchema).optional()
}).strict();

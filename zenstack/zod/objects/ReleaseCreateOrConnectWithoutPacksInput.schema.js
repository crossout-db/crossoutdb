"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseCreateOrConnectWithoutPacksInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ReleaseWhereUniqueInput_schema_1 = require("./ReleaseWhereUniqueInput.schema");
const ReleaseCreateWithoutPacksInput_schema_1 = require("./ReleaseCreateWithoutPacksInput.schema");
const ReleaseUncheckedCreateWithoutPacksInput_schema_1 = require("./ReleaseUncheckedCreateWithoutPacksInput.schema");
exports.ReleaseCreateOrConnectWithoutPacksInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ReleaseWhereUniqueInput_schema_1.ReleaseWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => ReleaseCreateWithoutPacksInput_schema_1.ReleaseCreateWithoutPacksInputObjectSchema),
        zod_1.z.lazy(() => ReleaseUncheckedCreateWithoutPacksInput_schema_1.ReleaseUncheckedCreateWithoutPacksInputObjectSchema)])
}).strict();

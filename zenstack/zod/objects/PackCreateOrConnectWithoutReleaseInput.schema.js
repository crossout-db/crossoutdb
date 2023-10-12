"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackCreateOrConnectWithoutReleaseInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackWhereUniqueInput_schema_1 = require("./PackWhereUniqueInput.schema");
const PackCreateWithoutReleaseInput_schema_1 = require("./PackCreateWithoutReleaseInput.schema");
const PackUncheckedCreateWithoutReleaseInput_schema_1 = require("./PackUncheckedCreateWithoutReleaseInput.schema");
exports.PackCreateOrConnectWithoutReleaseInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => PackWhereUniqueInput_schema_1.PackWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => PackCreateWithoutReleaseInput_schema_1.PackCreateWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => PackUncheckedCreateWithoutReleaseInput_schema_1.PackUncheckedCreateWithoutReleaseInputObjectSchema)])
}).strict();

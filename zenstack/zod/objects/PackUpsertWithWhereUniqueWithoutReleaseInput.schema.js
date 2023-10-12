"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackUpsertWithWhereUniqueWithoutReleaseInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackWhereUniqueInput_schema_1 = require("./PackWhereUniqueInput.schema");
const PackUpdateWithoutReleaseInput_schema_1 = require("./PackUpdateWithoutReleaseInput.schema");
const PackUncheckedUpdateWithoutReleaseInput_schema_1 = require("./PackUncheckedUpdateWithoutReleaseInput.schema");
const PackCreateWithoutReleaseInput_schema_1 = require("./PackCreateWithoutReleaseInput.schema");
const PackUncheckedCreateWithoutReleaseInput_schema_1 = require("./PackUncheckedCreateWithoutReleaseInput.schema");
exports.PackUpsertWithWhereUniqueWithoutReleaseInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => PackWhereUniqueInput_schema_1.PackWhereUniqueInputObjectSchema), update: zod_1.z.union([zod_1.z.lazy(() => PackUpdateWithoutReleaseInput_schema_1.PackUpdateWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => PackUncheckedUpdateWithoutReleaseInput_schema_1.PackUncheckedUpdateWithoutReleaseInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => PackCreateWithoutReleaseInput_schema_1.PackCreateWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => PackUncheckedCreateWithoutReleaseInput_schema_1.PackUncheckedCreateWithoutReleaseInputObjectSchema)])
}).strict();

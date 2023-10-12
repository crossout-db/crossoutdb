"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackUpdateWithWhereUniqueWithoutReleaseInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackWhereUniqueInput_schema_1 = require("./PackWhereUniqueInput.schema");
const PackUpdateWithoutReleaseInput_schema_1 = require("./PackUpdateWithoutReleaseInput.schema");
const PackUncheckedUpdateWithoutReleaseInput_schema_1 = require("./PackUncheckedUpdateWithoutReleaseInput.schema");
exports.PackUpdateWithWhereUniqueWithoutReleaseInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => PackWhereUniqueInput_schema_1.PackWhereUniqueInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => PackUpdateWithoutReleaseInput_schema_1.PackUpdateWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => PackUncheckedUpdateWithoutReleaseInput_schema_1.PackUncheckedUpdateWithoutReleaseInputObjectSchema)])
}).strict();

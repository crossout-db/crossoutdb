"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackUpdateManyWithWhereWithoutReleaseInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackScalarWhereInput_schema_1 = require("./PackScalarWhereInput.schema");
const PackUpdateManyMutationInput_schema_1 = require("./PackUpdateManyMutationInput.schema");
const PackUncheckedUpdateManyWithoutReleaseInput_schema_1 = require("./PackUncheckedUpdateManyWithoutReleaseInput.schema");
exports.PackUpdateManyWithWhereWithoutReleaseInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => PackScalarWhereInput_schema_1.PackScalarWhereInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => PackUpdateManyMutationInput_schema_1.PackUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => PackUncheckedUpdateManyWithoutReleaseInput_schema_1.PackUncheckedUpdateManyWithoutReleaseInputObjectSchema)])
}).strict();

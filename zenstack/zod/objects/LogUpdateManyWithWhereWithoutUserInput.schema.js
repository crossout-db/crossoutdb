"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogUpdateManyWithWhereWithoutUserInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const LogScalarWhereInput_schema_1 = require("./LogScalarWhereInput.schema");
const LogUpdateManyMutationInput_schema_1 = require("./LogUpdateManyMutationInput.schema");
const LogUncheckedUpdateManyWithoutUserInput_schema_1 = require("./LogUncheckedUpdateManyWithoutUserInput.schema");
exports.LogUpdateManyWithWhereWithoutUserInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => LogScalarWhereInput_schema_1.LogScalarWhereInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => LogUpdateManyMutationInput_schema_1.LogUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => LogUncheckedUpdateManyWithoutUserInput_schema_1.LogUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();

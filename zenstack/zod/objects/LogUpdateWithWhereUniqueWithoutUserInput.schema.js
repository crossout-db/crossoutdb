"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogUpdateWithWhereUniqueWithoutUserInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const LogWhereUniqueInput_schema_1 = require("./LogWhereUniqueInput.schema");
const LogUpdateWithoutUserInput_schema_1 = require("./LogUpdateWithoutUserInput.schema");
const LogUncheckedUpdateWithoutUserInput_schema_1 = require("./LogUncheckedUpdateWithoutUserInput.schema");
exports.LogUpdateWithWhereUniqueWithoutUserInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => LogWhereUniqueInput_schema_1.LogWhereUniqueInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => LogUpdateWithoutUserInput_schema_1.LogUpdateWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => LogUncheckedUpdateWithoutUserInput_schema_1.LogUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();

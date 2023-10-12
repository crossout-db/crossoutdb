"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogCreateOrConnectWithoutUserInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const LogWhereUniqueInput_schema_1 = require("./LogWhereUniqueInput.schema");
const LogCreateWithoutUserInput_schema_1 = require("./LogCreateWithoutUserInput.schema");
const LogUncheckedCreateWithoutUserInput_schema_1 = require("./LogUncheckedCreateWithoutUserInput.schema");
exports.LogCreateOrConnectWithoutUserInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => LogWhereUniqueInput_schema_1.LogWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => LogCreateWithoutUserInput_schema_1.LogCreateWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => LogUncheckedCreateWithoutUserInput_schema_1.LogUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();

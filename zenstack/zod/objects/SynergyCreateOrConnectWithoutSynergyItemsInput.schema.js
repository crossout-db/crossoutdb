"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyCreateOrConnectWithoutSynergyItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SynergyWhereUniqueInput_schema_1 = require("./SynergyWhereUniqueInput.schema");
const SynergyCreateWithoutSynergyItemsInput_schema_1 = require("./SynergyCreateWithoutSynergyItemsInput.schema");
const SynergyUncheckedCreateWithoutSynergyItemsInput_schema_1 = require("./SynergyUncheckedCreateWithoutSynergyItemsInput.schema");
exports.SynergyCreateOrConnectWithoutSynergyItemsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => SynergyWhereUniqueInput_schema_1.SynergyWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => SynergyCreateWithoutSynergyItemsInput_schema_1.SynergyCreateWithoutSynergyItemsInputObjectSchema),
        zod_1.z.lazy(() => SynergyUncheckedCreateWithoutSynergyItemsInput_schema_1.SynergyUncheckedCreateWithoutSynergyItemsInputObjectSchema)])
}).strict();

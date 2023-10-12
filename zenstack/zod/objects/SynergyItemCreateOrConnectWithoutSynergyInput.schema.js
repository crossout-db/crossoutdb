"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemCreateOrConnectWithoutSynergyInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SynergyItemWhereUniqueInput_schema_1 = require("./SynergyItemWhereUniqueInput.schema");
const SynergyItemCreateWithoutSynergyInput_schema_1 = require("./SynergyItemCreateWithoutSynergyInput.schema");
const SynergyItemUncheckedCreateWithoutSynergyInput_schema_1 = require("./SynergyItemUncheckedCreateWithoutSynergyInput.schema");
exports.SynergyItemCreateOrConnectWithoutSynergyInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => SynergyItemWhereUniqueInput_schema_1.SynergyItemWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => SynergyItemCreateWithoutSynergyInput_schema_1.SynergyItemCreateWithoutSynergyInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemUncheckedCreateWithoutSynergyInput_schema_1.SynergyItemUncheckedCreateWithoutSynergyInputObjectSchema)])
}).strict();

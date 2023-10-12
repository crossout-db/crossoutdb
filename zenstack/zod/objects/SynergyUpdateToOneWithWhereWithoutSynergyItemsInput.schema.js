"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyUpdateToOneWithWhereWithoutSynergyItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SynergyWhereInput_schema_1 = require("./SynergyWhereInput.schema");
const SynergyUpdateWithoutSynergyItemsInput_schema_1 = require("./SynergyUpdateWithoutSynergyItemsInput.schema");
const SynergyUncheckedUpdateWithoutSynergyItemsInput_schema_1 = require("./SynergyUncheckedUpdateWithoutSynergyItemsInput.schema");
exports.SynergyUpdateToOneWithWhereWithoutSynergyItemsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => SynergyWhereInput_schema_1.SynergyWhereInputObjectSchema).optional(), data: zod_1.z.union([zod_1.z.lazy(() => SynergyUpdateWithoutSynergyItemsInput_schema_1.SynergyUpdateWithoutSynergyItemsInputObjectSchema),
        zod_1.z.lazy(() => SynergyUncheckedUpdateWithoutSynergyItemsInput_schema_1.SynergyUncheckedUpdateWithoutSynergyItemsInputObjectSchema)])
}).strict();

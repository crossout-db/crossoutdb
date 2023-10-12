"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyUncheckedCreateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SynergyItemUncheckedCreateNestedManyWithoutSynergyInput_schema_1 = require("./SynergyItemUncheckedCreateNestedManyWithoutSynergyInput.schema");
exports.SynergyUncheckedCreateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.number().optional(), name: zod_1.z.string(), synergyItems: zod_1.z.lazy(() => SynergyItemUncheckedCreateNestedManyWithoutSynergyInput_schema_1.SynergyItemUncheckedCreateNestedManyWithoutSynergyInputObjectSchema).optional()
}).strict();

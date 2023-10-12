"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyCreateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SynergyItemCreateNestedManyWithoutSynergyInput_schema_1 = require("./SynergyItemCreateNestedManyWithoutSynergyInput.schema");
exports.SynergyCreateInputObjectSchema = zod_1.z.object({
    name: zod_1.z.string(), synergyItems: zod_1.z.lazy(() => SynergyItemCreateNestedManyWithoutSynergyInput_schema_1.SynergyItemCreateNestedManyWithoutSynergyInputObjectSchema).optional()
}).strict();

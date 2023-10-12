"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemCreateWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SynergyCreateNestedOneWithoutSynergyItemsInput_schema_1 = require("./SynergyCreateNestedOneWithoutSynergyItemsInput.schema");
exports.SynergyItemCreateWithoutItemInputObjectSchema = zod_1.z.object({
    synergy: zod_1.z.lazy(() => SynergyCreateNestedOneWithoutSynergyItemsInput_schema_1.SynergyCreateNestedOneWithoutSynergyItemsInputObjectSchema)
}).strict();

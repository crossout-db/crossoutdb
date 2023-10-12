"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemUpdateManyWithWhereWithoutSynergyInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SynergyItemScalarWhereInput_schema_1 = require("./SynergyItemScalarWhereInput.schema");
const SynergyItemUpdateManyMutationInput_schema_1 = require("./SynergyItemUpdateManyMutationInput.schema");
const SynergyItemUncheckedUpdateManyWithoutSynergyInput_schema_1 = require("./SynergyItemUncheckedUpdateManyWithoutSynergyInput.schema");
exports.SynergyItemUpdateManyWithWhereWithoutSynergyInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => SynergyItemScalarWhereInput_schema_1.SynergyItemScalarWhereInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => SynergyItemUpdateManyMutationInput_schema_1.SynergyItemUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemUncheckedUpdateManyWithoutSynergyInput_schema_1.SynergyItemUncheckedUpdateManyWithoutSynergyInputObjectSchema)])
}).strict();

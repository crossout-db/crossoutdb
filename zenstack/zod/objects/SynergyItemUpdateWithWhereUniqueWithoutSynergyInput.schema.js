"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemUpdateWithWhereUniqueWithoutSynergyInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SynergyItemWhereUniqueInput_schema_1 = require("./SynergyItemWhereUniqueInput.schema");
const SynergyItemUpdateWithoutSynergyInput_schema_1 = require("./SynergyItemUpdateWithoutSynergyInput.schema");
const SynergyItemUncheckedUpdateWithoutSynergyInput_schema_1 = require("./SynergyItemUncheckedUpdateWithoutSynergyInput.schema");
exports.SynergyItemUpdateWithWhereUniqueWithoutSynergyInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => SynergyItemWhereUniqueInput_schema_1.SynergyItemWhereUniqueInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => SynergyItemUpdateWithoutSynergyInput_schema_1.SynergyItemUpdateWithoutSynergyInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemUncheckedUpdateWithoutSynergyInput_schema_1.SynergyItemUncheckedUpdateWithoutSynergyInputObjectSchema)])
}).strict();

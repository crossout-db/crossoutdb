"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemUpdateWithWhereUniqueWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SynergyItemWhereUniqueInput_schema_1 = require("./SynergyItemWhereUniqueInput.schema");
const SynergyItemUpdateWithoutItemInput_schema_1 = require("./SynergyItemUpdateWithoutItemInput.schema");
const SynergyItemUncheckedUpdateWithoutItemInput_schema_1 = require("./SynergyItemUncheckedUpdateWithoutItemInput.schema");
exports.SynergyItemUpdateWithWhereUniqueWithoutItemInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => SynergyItemWhereUniqueInput_schema_1.SynergyItemWhereUniqueInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => SynergyItemUpdateWithoutItemInput_schema_1.SynergyItemUpdateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemUncheckedUpdateWithoutItemInput_schema_1.SynergyItemUncheckedUpdateWithoutItemInputObjectSchema)])
}).strict();

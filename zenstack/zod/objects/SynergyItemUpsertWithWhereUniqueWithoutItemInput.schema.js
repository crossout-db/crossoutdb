"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemUpsertWithWhereUniqueWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SynergyItemWhereUniqueInput_schema_1 = require("./SynergyItemWhereUniqueInput.schema");
const SynergyItemUpdateWithoutItemInput_schema_1 = require("./SynergyItemUpdateWithoutItemInput.schema");
const SynergyItemUncheckedUpdateWithoutItemInput_schema_1 = require("./SynergyItemUncheckedUpdateWithoutItemInput.schema");
const SynergyItemCreateWithoutItemInput_schema_1 = require("./SynergyItemCreateWithoutItemInput.schema");
const SynergyItemUncheckedCreateWithoutItemInput_schema_1 = require("./SynergyItemUncheckedCreateWithoutItemInput.schema");
exports.SynergyItemUpsertWithWhereUniqueWithoutItemInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => SynergyItemWhereUniqueInput_schema_1.SynergyItemWhereUniqueInputObjectSchema), update: zod_1.z.union([zod_1.z.lazy(() => SynergyItemUpdateWithoutItemInput_schema_1.SynergyItemUpdateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemUncheckedUpdateWithoutItemInput_schema_1.SynergyItemUncheckedUpdateWithoutItemInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => SynergyItemCreateWithoutItemInput_schema_1.SynergyItemCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemUncheckedCreateWithoutItemInput_schema_1.SynergyItemUncheckedCreateWithoutItemInputObjectSchema)])
}).strict();

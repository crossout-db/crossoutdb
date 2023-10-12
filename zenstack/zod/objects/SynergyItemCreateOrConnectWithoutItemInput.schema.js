"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemCreateOrConnectWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SynergyItemWhereUniqueInput_schema_1 = require("./SynergyItemWhereUniqueInput.schema");
const SynergyItemCreateWithoutItemInput_schema_1 = require("./SynergyItemCreateWithoutItemInput.schema");
const SynergyItemUncheckedCreateWithoutItemInput_schema_1 = require("./SynergyItemUncheckedCreateWithoutItemInput.schema");
exports.SynergyItemCreateOrConnectWithoutItemInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => SynergyItemWhereUniqueInput_schema_1.SynergyItemWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => SynergyItemCreateWithoutItemInput_schema_1.SynergyItemCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemUncheckedCreateWithoutItemInput_schema_1.SynergyItemUncheckedCreateWithoutItemInputObjectSchema)])
}).strict();

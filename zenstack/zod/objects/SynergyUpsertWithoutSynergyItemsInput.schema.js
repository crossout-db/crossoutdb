"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyUpsertWithoutSynergyItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SynergyUpdateWithoutSynergyItemsInput_schema_1 = require("./SynergyUpdateWithoutSynergyItemsInput.schema");
const SynergyUncheckedUpdateWithoutSynergyItemsInput_schema_1 = require("./SynergyUncheckedUpdateWithoutSynergyItemsInput.schema");
const SynergyCreateWithoutSynergyItemsInput_schema_1 = require("./SynergyCreateWithoutSynergyItemsInput.schema");
const SynergyUncheckedCreateWithoutSynergyItemsInput_schema_1 = require("./SynergyUncheckedCreateWithoutSynergyItemsInput.schema");
const SynergyWhereInput_schema_1 = require("./SynergyWhereInput.schema");
exports.SynergyUpsertWithoutSynergyItemsInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => SynergyUpdateWithoutSynergyItemsInput_schema_1.SynergyUpdateWithoutSynergyItemsInputObjectSchema),
        zod_1.z.lazy(() => SynergyUncheckedUpdateWithoutSynergyItemsInput_schema_1.SynergyUncheckedUpdateWithoutSynergyItemsInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => SynergyCreateWithoutSynergyItemsInput_schema_1.SynergyCreateWithoutSynergyItemsInputObjectSchema),
        zod_1.z.lazy(() => SynergyUncheckedCreateWithoutSynergyItemsInput_schema_1.SynergyUncheckedCreateWithoutSynergyItemsInputObjectSchema)]), where: zod_1.z.lazy(() => SynergyWhereInput_schema_1.SynergyWhereInputObjectSchema).optional()
}).strict();

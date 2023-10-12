"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyUpdateOneRequiredWithoutSynergyItemsNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SynergyCreateWithoutSynergyItemsInput_schema_1 = require("./SynergyCreateWithoutSynergyItemsInput.schema");
const SynergyUncheckedCreateWithoutSynergyItemsInput_schema_1 = require("./SynergyUncheckedCreateWithoutSynergyItemsInput.schema");
const SynergyCreateOrConnectWithoutSynergyItemsInput_schema_1 = require("./SynergyCreateOrConnectWithoutSynergyItemsInput.schema");
const SynergyUpsertWithoutSynergyItemsInput_schema_1 = require("./SynergyUpsertWithoutSynergyItemsInput.schema");
const SynergyWhereUniqueInput_schema_1 = require("./SynergyWhereUniqueInput.schema");
const SynergyUpdateToOneWithWhereWithoutSynergyItemsInput_schema_1 = require("./SynergyUpdateToOneWithWhereWithoutSynergyItemsInput.schema");
const SynergyUpdateWithoutSynergyItemsInput_schema_1 = require("./SynergyUpdateWithoutSynergyItemsInput.schema");
const SynergyUncheckedUpdateWithoutSynergyItemsInput_schema_1 = require("./SynergyUncheckedUpdateWithoutSynergyItemsInput.schema");
exports.SynergyUpdateOneRequiredWithoutSynergyItemsNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => SynergyCreateWithoutSynergyItemsInput_schema_1.SynergyCreateWithoutSynergyItemsInputObjectSchema),
        zod_1.z.lazy(() => SynergyUncheckedCreateWithoutSynergyItemsInput_schema_1.SynergyUncheckedCreateWithoutSynergyItemsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => SynergyCreateOrConnectWithoutSynergyItemsInput_schema_1.SynergyCreateOrConnectWithoutSynergyItemsInputObjectSchema).optional(), upsert: zod_1.z.lazy(() => SynergyUpsertWithoutSynergyItemsInput_schema_1.SynergyUpsertWithoutSynergyItemsInputObjectSchema).optional(), connect: zod_1.z.lazy(() => SynergyWhereUniqueInput_schema_1.SynergyWhereUniqueInputObjectSchema).optional(), update: zod_1.z.union([zod_1.z.lazy(() => SynergyUpdateToOneWithWhereWithoutSynergyItemsInput_schema_1.SynergyUpdateToOneWithWhereWithoutSynergyItemsInputObjectSchema),
        zod_1.z.lazy(() => SynergyUpdateWithoutSynergyItemsInput_schema_1.SynergyUpdateWithoutSynergyItemsInputObjectSchema),
        zod_1.z.lazy(() => SynergyUncheckedUpdateWithoutSynergyItemsInput_schema_1.SynergyUncheckedUpdateWithoutSynergyItemsInputObjectSchema)]).optional()
}).strict();

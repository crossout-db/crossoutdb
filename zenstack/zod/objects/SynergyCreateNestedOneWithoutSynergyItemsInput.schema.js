"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyCreateNestedOneWithoutSynergyItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SynergyCreateWithoutSynergyItemsInput_schema_1 = require("./SynergyCreateWithoutSynergyItemsInput.schema");
const SynergyUncheckedCreateWithoutSynergyItemsInput_schema_1 = require("./SynergyUncheckedCreateWithoutSynergyItemsInput.schema");
const SynergyCreateOrConnectWithoutSynergyItemsInput_schema_1 = require("./SynergyCreateOrConnectWithoutSynergyItemsInput.schema");
const SynergyWhereUniqueInput_schema_1 = require("./SynergyWhereUniqueInput.schema");
exports.SynergyCreateNestedOneWithoutSynergyItemsInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => SynergyCreateWithoutSynergyItemsInput_schema_1.SynergyCreateWithoutSynergyItemsInputObjectSchema),
        zod_1.z.lazy(() => SynergyUncheckedCreateWithoutSynergyItemsInput_schema_1.SynergyUncheckedCreateWithoutSynergyItemsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => SynergyCreateOrConnectWithoutSynergyItemsInput_schema_1.SynergyCreateOrConnectWithoutSynergyItemsInputObjectSchema).optional(), connect: zod_1.z.lazy(() => SynergyWhereUniqueInput_schema_1.SynergyWhereUniqueInputObjectSchema).optional()
}).strict();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactionCreateNestedOneWithoutItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const FactionCreateWithoutItemsInput_schema_1 = require("./FactionCreateWithoutItemsInput.schema");
const FactionUncheckedCreateWithoutItemsInput_schema_1 = require("./FactionUncheckedCreateWithoutItemsInput.schema");
const FactionCreateOrConnectWithoutItemsInput_schema_1 = require("./FactionCreateOrConnectWithoutItemsInput.schema");
const FactionWhereUniqueInput_schema_1 = require("./FactionWhereUniqueInput.schema");
exports.FactionCreateNestedOneWithoutItemsInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => FactionCreateWithoutItemsInput_schema_1.FactionCreateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => FactionUncheckedCreateWithoutItemsInput_schema_1.FactionUncheckedCreateWithoutItemsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => FactionCreateOrConnectWithoutItemsInput_schema_1.FactionCreateOrConnectWithoutItemsInputObjectSchema).optional(), connect: zod_1.z.lazy(() => FactionWhereUniqueInput_schema_1.FactionWhereUniqueInputObjectSchema).optional()
}).strict();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactionCreateOrConnectWithoutItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const FactionWhereUniqueInput_schema_1 = require("./FactionWhereUniqueInput.schema");
const FactionCreateWithoutItemsInput_schema_1 = require("./FactionCreateWithoutItemsInput.schema");
const FactionUncheckedCreateWithoutItemsInput_schema_1 = require("./FactionUncheckedCreateWithoutItemsInput.schema");
exports.FactionCreateOrConnectWithoutItemsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => FactionWhereUniqueInput_schema_1.FactionWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => FactionCreateWithoutItemsInput_schema_1.FactionCreateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => FactionUncheckedCreateWithoutItemsInput_schema_1.FactionUncheckedCreateWithoutItemsInputObjectSchema)])
}).strict();

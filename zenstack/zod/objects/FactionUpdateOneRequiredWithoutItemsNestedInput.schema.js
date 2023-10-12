"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactionUpdateOneRequiredWithoutItemsNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const FactionCreateWithoutItemsInput_schema_1 = require("./FactionCreateWithoutItemsInput.schema");
const FactionUncheckedCreateWithoutItemsInput_schema_1 = require("./FactionUncheckedCreateWithoutItemsInput.schema");
const FactionCreateOrConnectWithoutItemsInput_schema_1 = require("./FactionCreateOrConnectWithoutItemsInput.schema");
const FactionUpsertWithoutItemsInput_schema_1 = require("./FactionUpsertWithoutItemsInput.schema");
const FactionWhereUniqueInput_schema_1 = require("./FactionWhereUniqueInput.schema");
const FactionUpdateToOneWithWhereWithoutItemsInput_schema_1 = require("./FactionUpdateToOneWithWhereWithoutItemsInput.schema");
const FactionUpdateWithoutItemsInput_schema_1 = require("./FactionUpdateWithoutItemsInput.schema");
const FactionUncheckedUpdateWithoutItemsInput_schema_1 = require("./FactionUncheckedUpdateWithoutItemsInput.schema");
exports.FactionUpdateOneRequiredWithoutItemsNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => FactionCreateWithoutItemsInput_schema_1.FactionCreateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => FactionUncheckedCreateWithoutItemsInput_schema_1.FactionUncheckedCreateWithoutItemsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => FactionCreateOrConnectWithoutItemsInput_schema_1.FactionCreateOrConnectWithoutItemsInputObjectSchema).optional(), upsert: zod_1.z.lazy(() => FactionUpsertWithoutItemsInput_schema_1.FactionUpsertWithoutItemsInputObjectSchema).optional(), connect: zod_1.z.lazy(() => FactionWhereUniqueInput_schema_1.FactionWhereUniqueInputObjectSchema).optional(), update: zod_1.z.union([zod_1.z.lazy(() => FactionUpdateToOneWithWhereWithoutItemsInput_schema_1.FactionUpdateToOneWithWhereWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => FactionUpdateWithoutItemsInput_schema_1.FactionUpdateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => FactionUncheckedUpdateWithoutItemsInput_schema_1.FactionUncheckedUpdateWithoutItemsInputObjectSchema)]).optional()
}).strict();

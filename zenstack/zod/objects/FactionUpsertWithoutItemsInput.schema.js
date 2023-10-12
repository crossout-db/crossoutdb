"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactionUpsertWithoutItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const FactionUpdateWithoutItemsInput_schema_1 = require("./FactionUpdateWithoutItemsInput.schema");
const FactionUncheckedUpdateWithoutItemsInput_schema_1 = require("./FactionUncheckedUpdateWithoutItemsInput.schema");
const FactionCreateWithoutItemsInput_schema_1 = require("./FactionCreateWithoutItemsInput.schema");
const FactionUncheckedCreateWithoutItemsInput_schema_1 = require("./FactionUncheckedCreateWithoutItemsInput.schema");
const FactionWhereInput_schema_1 = require("./FactionWhereInput.schema");
exports.FactionUpsertWithoutItemsInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => FactionUpdateWithoutItemsInput_schema_1.FactionUpdateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => FactionUncheckedUpdateWithoutItemsInput_schema_1.FactionUncheckedUpdateWithoutItemsInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => FactionCreateWithoutItemsInput_schema_1.FactionCreateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => FactionUncheckedCreateWithoutItemsInput_schema_1.FactionUncheckedCreateWithoutItemsInputObjectSchema)]), where: zod_1.z.lazy(() => FactionWhereInput_schema_1.FactionWhereInputObjectSchema).optional()
}).strict();

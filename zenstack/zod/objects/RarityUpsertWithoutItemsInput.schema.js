"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RarityUpsertWithoutItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RarityUpdateWithoutItemsInput_schema_1 = require("./RarityUpdateWithoutItemsInput.schema");
const RarityUncheckedUpdateWithoutItemsInput_schema_1 = require("./RarityUncheckedUpdateWithoutItemsInput.schema");
const RarityCreateWithoutItemsInput_schema_1 = require("./RarityCreateWithoutItemsInput.schema");
const RarityUncheckedCreateWithoutItemsInput_schema_1 = require("./RarityUncheckedCreateWithoutItemsInput.schema");
const RarityWhereInput_schema_1 = require("./RarityWhereInput.schema");
exports.RarityUpsertWithoutItemsInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => RarityUpdateWithoutItemsInput_schema_1.RarityUpdateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => RarityUncheckedUpdateWithoutItemsInput_schema_1.RarityUncheckedUpdateWithoutItemsInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => RarityCreateWithoutItemsInput_schema_1.RarityCreateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => RarityUncheckedCreateWithoutItemsInput_schema_1.RarityUncheckedCreateWithoutItemsInputObjectSchema)]), where: zod_1.z.lazy(() => RarityWhereInput_schema_1.RarityWhereInputObjectSchema).optional()
}).strict();

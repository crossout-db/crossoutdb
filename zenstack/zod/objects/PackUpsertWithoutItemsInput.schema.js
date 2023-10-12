"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackUpsertWithoutItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackUpdateWithoutItemsInput_schema_1 = require("./PackUpdateWithoutItemsInput.schema");
const PackUncheckedUpdateWithoutItemsInput_schema_1 = require("./PackUncheckedUpdateWithoutItemsInput.schema");
const PackCreateWithoutItemsInput_schema_1 = require("./PackCreateWithoutItemsInput.schema");
const PackUncheckedCreateWithoutItemsInput_schema_1 = require("./PackUncheckedCreateWithoutItemsInput.schema");
const PackWhereInput_schema_1 = require("./PackWhereInput.schema");
exports.PackUpsertWithoutItemsInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => PackUpdateWithoutItemsInput_schema_1.PackUpdateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => PackUncheckedUpdateWithoutItemsInput_schema_1.PackUncheckedUpdateWithoutItemsInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => PackCreateWithoutItemsInput_schema_1.PackCreateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => PackUncheckedCreateWithoutItemsInput_schema_1.PackUncheckedCreateWithoutItemsInputObjectSchema)]), where: zod_1.z.lazy(() => PackWhereInput_schema_1.PackWhereInputObjectSchema).optional()
}).strict();

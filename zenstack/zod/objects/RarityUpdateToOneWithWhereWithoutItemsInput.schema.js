"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RarityUpdateToOneWithWhereWithoutItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RarityWhereInput_schema_1 = require("./RarityWhereInput.schema");
const RarityUpdateWithoutItemsInput_schema_1 = require("./RarityUpdateWithoutItemsInput.schema");
const RarityUncheckedUpdateWithoutItemsInput_schema_1 = require("./RarityUncheckedUpdateWithoutItemsInput.schema");
exports.RarityUpdateToOneWithWhereWithoutItemsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => RarityWhereInput_schema_1.RarityWhereInputObjectSchema).optional(), data: zod_1.z.union([zod_1.z.lazy(() => RarityUpdateWithoutItemsInput_schema_1.RarityUpdateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => RarityUncheckedUpdateWithoutItemsInput_schema_1.RarityUncheckedUpdateWithoutItemsInputObjectSchema)])
}).strict();

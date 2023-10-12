"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackUpdateToOneWithWhereWithoutItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackWhereInput_schema_1 = require("./PackWhereInput.schema");
const PackUpdateWithoutItemsInput_schema_1 = require("./PackUpdateWithoutItemsInput.schema");
const PackUncheckedUpdateWithoutItemsInput_schema_1 = require("./PackUncheckedUpdateWithoutItemsInput.schema");
exports.PackUpdateToOneWithWhereWithoutItemsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => PackWhereInput_schema_1.PackWhereInputObjectSchema).optional(), data: zod_1.z.union([zod_1.z.lazy(() => PackUpdateWithoutItemsInput_schema_1.PackUpdateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => PackUncheckedUpdateWithoutItemsInput_schema_1.PackUncheckedUpdateWithoutItemsInputObjectSchema)])
}).strict();

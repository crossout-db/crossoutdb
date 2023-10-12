"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactionUpdateToOneWithWhereWithoutItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const FactionWhereInput_schema_1 = require("./FactionWhereInput.schema");
const FactionUpdateWithoutItemsInput_schema_1 = require("./FactionUpdateWithoutItemsInput.schema");
const FactionUncheckedUpdateWithoutItemsInput_schema_1 = require("./FactionUncheckedUpdateWithoutItemsInput.schema");
exports.FactionUpdateToOneWithWhereWithoutItemsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => FactionWhereInput_schema_1.FactionWhereInputObjectSchema).optional(), data: zod_1.z.union([zod_1.z.lazy(() => FactionUpdateWithoutItemsInput_schema_1.FactionUpdateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => FactionUncheckedUpdateWithoutItemsInput_schema_1.FactionUncheckedUpdateWithoutItemsInputObjectSchema)])
}).strict();

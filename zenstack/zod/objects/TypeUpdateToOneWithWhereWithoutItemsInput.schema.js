"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeUpdateToOneWithWhereWithoutItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const TypeWhereInput_schema_1 = require("./TypeWhereInput.schema");
const TypeUpdateWithoutItemsInput_schema_1 = require("./TypeUpdateWithoutItemsInput.schema");
const TypeUncheckedUpdateWithoutItemsInput_schema_1 = require("./TypeUncheckedUpdateWithoutItemsInput.schema");
exports.TypeUpdateToOneWithWhereWithoutItemsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => TypeWhereInput_schema_1.TypeWhereInputObjectSchema).optional(), data: zod_1.z.union([zod_1.z.lazy(() => TypeUpdateWithoutItemsInput_schema_1.TypeUpdateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => TypeUncheckedUpdateWithoutItemsInput_schema_1.TypeUncheckedUpdateWithoutItemsInputObjectSchema)])
}).strict();

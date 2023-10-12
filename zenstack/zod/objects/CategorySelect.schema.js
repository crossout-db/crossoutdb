"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySelectObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemInput_schema_1 = require("../input/ItemInput.schema");
const CategoryCountOutputTypeArgs_schema_1 = require("./CategoryCountOutputTypeArgs.schema");
exports.CategorySelectObjectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(), name: zod_1.z.boolean().optional(), items: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ItemInput_schema_1.ItemInputSchema.findMany)]).optional(), _count: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => CategoryCountOutputTypeArgs_schema_1.CategoryCountOutputTypeArgsObjectSchema)]).optional()
}).strict();

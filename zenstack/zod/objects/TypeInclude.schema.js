"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeIncludeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemInput_schema_1 = require("../input/ItemInput.schema");
const TypeCountOutputTypeArgs_schema_1 = require("./TypeCountOutputTypeArgs.schema");
exports.TypeIncludeObjectSchema = zod_1.z.object({
    items: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ItemInput_schema_1.ItemInputSchema.findMany)]).optional(), _count: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => TypeCountOutputTypeArgs_schema_1.TypeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();

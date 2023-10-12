"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RarityIncludeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemInput_schema_1 = require("../input/ItemInput.schema");
const RarityCountOutputTypeArgs_schema_1 = require("./RarityCountOutputTypeArgs.schema");
exports.RarityIncludeObjectSchema = zod_1.z.object({
    items: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ItemInput_schema_1.ItemInputSchema.findMany)]).optional(), _count: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => RarityCountOutputTypeArgs_schema_1.RarityCountOutputTypeArgsObjectSchema)]).optional()
}).strict();

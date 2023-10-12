"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactionSelectObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemInput_schema_1 = require("../input/ItemInput.schema");
const FactionCountOutputTypeArgs_schema_1 = require("./FactionCountOutputTypeArgs.schema");
exports.FactionSelectObjectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(), name: zod_1.z.boolean().optional(), items: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ItemInput_schema_1.ItemInputSchema.findMany)]).optional(), _count: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => FactionCountOutputTypeArgs_schema_1.FactionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();

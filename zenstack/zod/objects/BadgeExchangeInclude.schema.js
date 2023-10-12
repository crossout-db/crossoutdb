"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeExchangeIncludeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemArgs_schema_1 = require("./ItemArgs.schema");
exports.BadgeExchangeIncludeObjectSchema = zod_1.z.object({
    item: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ItemArgs_schema_1.ItemArgsObjectSchema)]).optional()
}).strict();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemStatsIncludeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemArgs_schema_1 = require("./ItemArgs.schema");
const UserArgs_schema_1 = require("./UserArgs.schema");
const ReleaseArgs_schema_1 = require("./ReleaseArgs.schema");
exports.ItemStatsIncludeObjectSchema = zod_1.z.object({
    item: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ItemArgs_schema_1.ItemArgsObjectSchema)]).optional(), user: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => UserArgs_schema_1.UserArgsObjectSchema)]).optional(), release: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ReleaseArgs_schema_1.ReleaseArgsObjectSchema)]).optional()
}).strict();

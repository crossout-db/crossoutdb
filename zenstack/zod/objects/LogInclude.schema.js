"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogIncludeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserArgs_schema_1 = require("./UserArgs.schema");
exports.LogIncludeObjectSchema = zod_1.z.object({
    user: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => UserArgs_schema_1.UserArgsObjectSchema)]).optional()
}).strict();

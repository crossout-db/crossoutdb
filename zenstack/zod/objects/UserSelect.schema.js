"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSelectObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const AccountInput_schema_1 = require("../input/AccountInput.schema");
const SessionInput_schema_1 = require("../input/SessionInput.schema");
const ItemStatsInput_schema_1 = require("../input/ItemStatsInput.schema");
const LogInput_schema_1 = require("../input/LogInput.schema");
const UserCountOutputTypeArgs_schema_1 = require("./UserCountOutputTypeArgs.schema");
exports.UserSelectObjectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(), name: zod_1.z.boolean().optional(), role: zod_1.z.boolean().optional(), email: zod_1.z.boolean().optional(), emailVerified: zod_1.z.boolean().optional(), image: zod_1.z.boolean().optional(), accounts: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => AccountInput_schema_1.AccountInputSchema.findMany)]).optional(), sessions: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => SessionInput_schema_1.SessionInputSchema.findMany)]).optional(), itemStats: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ItemStatsInput_schema_1.ItemStatsInputSchema.findMany)]).optional(), log: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => LogInput_schema_1.LogInputSchema.findMany)]).optional(), _count: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => UserCountOutputTypeArgs_schema_1.UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
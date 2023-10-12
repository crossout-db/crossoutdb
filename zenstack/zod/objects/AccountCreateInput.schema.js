"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCreateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserCreateNestedOneWithoutAccountsInput_schema_1 = require("./UserCreateNestedOneWithoutAccountsInput.schema");
exports.AccountCreateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), type: zod_1.z.string(), provider: zod_1.z.string(), providerAccountId: zod_1.z.string(), refresh_token: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), access_token: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), expires_at: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), token_type: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), scope: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), id_token: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), session_state: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), user: zod_1.z.lazy(() => UserCreateNestedOneWithoutAccountsInput_schema_1.UserCreateNestedOneWithoutAccountsInputObjectSchema)
}).strict();

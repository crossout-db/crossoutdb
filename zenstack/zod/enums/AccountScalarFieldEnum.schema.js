"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountScalarFieldEnumSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.AccountScalarFieldEnumSchema = zod_1.z.enum(["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"]);

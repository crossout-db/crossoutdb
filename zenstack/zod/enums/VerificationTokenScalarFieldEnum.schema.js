"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenScalarFieldEnumSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.VerificationTokenScalarFieldEnumSchema = zod_1.z.enum(["identifier", "token", "expires"]);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackScalarFieldEnumSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.PackScalarFieldEnumSchema = zod_1.z.enum(["id", "name", "description", "steamAppID", "key", "coins", "releaseId", "active"]);

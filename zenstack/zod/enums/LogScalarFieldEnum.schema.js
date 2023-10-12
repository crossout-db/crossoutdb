"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogScalarFieldEnumSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.LogScalarFieldEnumSchema = zod_1.z.enum(["id", "timestamp", "userId", "tableChanged", "recordId", "record"]);

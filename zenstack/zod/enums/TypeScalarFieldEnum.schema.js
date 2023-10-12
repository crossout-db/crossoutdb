"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeScalarFieldEnumSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.TypeScalarFieldEnumSchema = zod_1.z.enum(["id", "name"]);

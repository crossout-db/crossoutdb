"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleScalarFieldEnumSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.ExampleScalarFieldEnumSchema = zod_1.z.enum(["id", "name", "createdAt", "updatedAt"]);

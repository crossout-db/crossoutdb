"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackItemScalarFieldEnumSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.PackItemScalarFieldEnumSchema = zod_1.z.enum(["id", "packId", "itemId", "quantity"]);

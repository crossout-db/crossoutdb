"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RarityScalarFieldEnumSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.RarityScalarFieldEnumSchema = zod_1.z.enum(["id", "name", "order", "primaryColor", "secondaryColor"]);

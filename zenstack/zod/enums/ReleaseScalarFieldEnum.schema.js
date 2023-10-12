"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseScalarFieldEnumSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.ReleaseScalarFieldEnumSchema = zod_1.z.enum(["id", "name", "xoVersion", "build", "description", "battlePass", "url", "startDate", "endDate", "active"]);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonNullValueFilterSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.JsonNullValueFilterSchema = zod_1.z.enum(["DbNull", "JsonNull", "AnyNull"]);
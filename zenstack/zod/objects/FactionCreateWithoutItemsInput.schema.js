"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactionCreateWithoutItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.FactionCreateWithoutItemsInputObjectSchema = zod_1.z.object({
    name: zod_1.z.string()
}).strict();

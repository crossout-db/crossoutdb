"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactionUncheckedCreateWithoutItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.FactionUncheckedCreateWithoutItemsInputObjectSchema = zod_1.z.object({
    id: zod_1.z.number().optional(), name: zod_1.z.string()
}).strict();

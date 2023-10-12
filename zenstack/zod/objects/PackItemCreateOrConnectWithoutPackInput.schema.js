"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackItemCreateOrConnectWithoutPackInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackItemWhereUniqueInput_schema_1 = require("./PackItemWhereUniqueInput.schema");
const PackItemCreateWithoutPackInput_schema_1 = require("./PackItemCreateWithoutPackInput.schema");
const PackItemUncheckedCreateWithoutPackInput_schema_1 = require("./PackItemUncheckedCreateWithoutPackInput.schema");
exports.PackItemCreateOrConnectWithoutPackInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => PackItemWhereUniqueInput_schema_1.PackItemWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => PackItemCreateWithoutPackInput_schema_1.PackItemCreateWithoutPackInputObjectSchema),
        zod_1.z.lazy(() => PackItemUncheckedCreateWithoutPackInput_schema_1.PackItemUncheckedCreateWithoutPackInputObjectSchema)])
}).strict();

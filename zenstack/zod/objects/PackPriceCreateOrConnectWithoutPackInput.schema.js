"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackPriceCreateOrConnectWithoutPackInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackPriceWhereUniqueInput_schema_1 = require("./PackPriceWhereUniqueInput.schema");
const PackPriceCreateWithoutPackInput_schema_1 = require("./PackPriceCreateWithoutPackInput.schema");
const PackPriceUncheckedCreateWithoutPackInput_schema_1 = require("./PackPriceUncheckedCreateWithoutPackInput.schema");
exports.PackPriceCreateOrConnectWithoutPackInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => PackPriceWhereUniqueInput_schema_1.PackPriceWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => PackPriceCreateWithoutPackInput_schema_1.PackPriceCreateWithoutPackInputObjectSchema),
        zod_1.z.lazy(() => PackPriceUncheckedCreateWithoutPackInput_schema_1.PackPriceUncheckedCreateWithoutPackInputObjectSchema)])
}).strict();

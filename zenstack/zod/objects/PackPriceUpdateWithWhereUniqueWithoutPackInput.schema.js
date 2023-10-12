"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackPriceUpdateWithWhereUniqueWithoutPackInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackPriceWhereUniqueInput_schema_1 = require("./PackPriceWhereUniqueInput.schema");
const PackPriceUpdateWithoutPackInput_schema_1 = require("./PackPriceUpdateWithoutPackInput.schema");
const PackPriceUncheckedUpdateWithoutPackInput_schema_1 = require("./PackPriceUncheckedUpdateWithoutPackInput.schema");
exports.PackPriceUpdateWithWhereUniqueWithoutPackInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => PackPriceWhereUniqueInput_schema_1.PackPriceWhereUniqueInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => PackPriceUpdateWithoutPackInput_schema_1.PackPriceUpdateWithoutPackInputObjectSchema),
        zod_1.z.lazy(() => PackPriceUncheckedUpdateWithoutPackInput_schema_1.PackPriceUncheckedUpdateWithoutPackInputObjectSchema)])
}).strict();

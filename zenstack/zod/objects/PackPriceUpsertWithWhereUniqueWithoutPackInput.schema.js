"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackPriceUpsertWithWhereUniqueWithoutPackInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackPriceWhereUniqueInput_schema_1 = require("./PackPriceWhereUniqueInput.schema");
const PackPriceUpdateWithoutPackInput_schema_1 = require("./PackPriceUpdateWithoutPackInput.schema");
const PackPriceUncheckedUpdateWithoutPackInput_schema_1 = require("./PackPriceUncheckedUpdateWithoutPackInput.schema");
const PackPriceCreateWithoutPackInput_schema_1 = require("./PackPriceCreateWithoutPackInput.schema");
const PackPriceUncheckedCreateWithoutPackInput_schema_1 = require("./PackPriceUncheckedCreateWithoutPackInput.schema");
exports.PackPriceUpsertWithWhereUniqueWithoutPackInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => PackPriceWhereUniqueInput_schema_1.PackPriceWhereUniqueInputObjectSchema), update: zod_1.z.union([zod_1.z.lazy(() => PackPriceUpdateWithoutPackInput_schema_1.PackPriceUpdateWithoutPackInputObjectSchema),
        zod_1.z.lazy(() => PackPriceUncheckedUpdateWithoutPackInput_schema_1.PackPriceUncheckedUpdateWithoutPackInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => PackPriceCreateWithoutPackInput_schema_1.PackPriceCreateWithoutPackInputObjectSchema),
        zod_1.z.lazy(() => PackPriceUncheckedCreateWithoutPackInput_schema_1.PackPriceUncheckedCreateWithoutPackInputObjectSchema)])
}).strict();

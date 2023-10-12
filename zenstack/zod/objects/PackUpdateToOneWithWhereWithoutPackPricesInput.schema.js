"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackUpdateToOneWithWhereWithoutPackPricesInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackWhereInput_schema_1 = require("./PackWhereInput.schema");
const PackUpdateWithoutPackPricesInput_schema_1 = require("./PackUpdateWithoutPackPricesInput.schema");
const PackUncheckedUpdateWithoutPackPricesInput_schema_1 = require("./PackUncheckedUpdateWithoutPackPricesInput.schema");
exports.PackUpdateToOneWithWhereWithoutPackPricesInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => PackWhereInput_schema_1.PackWhereInputObjectSchema).optional(), data: zod_1.z.union([zod_1.z.lazy(() => PackUpdateWithoutPackPricesInput_schema_1.PackUpdateWithoutPackPricesInputObjectSchema),
        zod_1.z.lazy(() => PackUncheckedUpdateWithoutPackPricesInput_schema_1.PackUncheckedUpdateWithoutPackPricesInputObjectSchema)])
}).strict();

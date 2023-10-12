"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackUpsertWithoutPackPricesInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackUpdateWithoutPackPricesInput_schema_1 = require("./PackUpdateWithoutPackPricesInput.schema");
const PackUncheckedUpdateWithoutPackPricesInput_schema_1 = require("./PackUncheckedUpdateWithoutPackPricesInput.schema");
const PackCreateWithoutPackPricesInput_schema_1 = require("./PackCreateWithoutPackPricesInput.schema");
const PackUncheckedCreateWithoutPackPricesInput_schema_1 = require("./PackUncheckedCreateWithoutPackPricesInput.schema");
const PackWhereInput_schema_1 = require("./PackWhereInput.schema");
exports.PackUpsertWithoutPackPricesInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => PackUpdateWithoutPackPricesInput_schema_1.PackUpdateWithoutPackPricesInputObjectSchema),
        zod_1.z.lazy(() => PackUncheckedUpdateWithoutPackPricesInput_schema_1.PackUncheckedUpdateWithoutPackPricesInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => PackCreateWithoutPackPricesInput_schema_1.PackCreateWithoutPackPricesInputObjectSchema),
        zod_1.z.lazy(() => PackUncheckedCreateWithoutPackPricesInput_schema_1.PackUncheckedCreateWithoutPackPricesInputObjectSchema)]), where: zod_1.z.lazy(() => PackWhereInput_schema_1.PackWhereInputObjectSchema).optional()
}).strict();

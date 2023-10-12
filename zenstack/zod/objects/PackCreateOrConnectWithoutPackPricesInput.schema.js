"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackCreateOrConnectWithoutPackPricesInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackWhereUniqueInput_schema_1 = require("./PackWhereUniqueInput.schema");
const PackCreateWithoutPackPricesInput_schema_1 = require("./PackCreateWithoutPackPricesInput.schema");
const PackUncheckedCreateWithoutPackPricesInput_schema_1 = require("./PackUncheckedCreateWithoutPackPricesInput.schema");
exports.PackCreateOrConnectWithoutPackPricesInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => PackWhereUniqueInput_schema_1.PackWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => PackCreateWithoutPackPricesInput_schema_1.PackCreateWithoutPackPricesInputObjectSchema),
        zod_1.z.lazy(() => PackUncheckedCreateWithoutPackPricesInput_schema_1.PackUncheckedCreateWithoutPackPricesInputObjectSchema)])
}).strict();

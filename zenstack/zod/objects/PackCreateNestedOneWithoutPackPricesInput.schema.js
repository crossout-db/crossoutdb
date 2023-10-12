"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackCreateNestedOneWithoutPackPricesInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackCreateWithoutPackPricesInput_schema_1 = require("./PackCreateWithoutPackPricesInput.schema");
const PackUncheckedCreateWithoutPackPricesInput_schema_1 = require("./PackUncheckedCreateWithoutPackPricesInput.schema");
const PackCreateOrConnectWithoutPackPricesInput_schema_1 = require("./PackCreateOrConnectWithoutPackPricesInput.schema");
const PackWhereUniqueInput_schema_1 = require("./PackWhereUniqueInput.schema");
exports.PackCreateNestedOneWithoutPackPricesInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => PackCreateWithoutPackPricesInput_schema_1.PackCreateWithoutPackPricesInputObjectSchema),
        zod_1.z.lazy(() => PackUncheckedCreateWithoutPackPricesInput_schema_1.PackUncheckedCreateWithoutPackPricesInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => PackCreateOrConnectWithoutPackPricesInput_schema_1.PackCreateOrConnectWithoutPackPricesInputObjectSchema).optional(), connect: zod_1.z.lazy(() => PackWhereUniqueInput_schema_1.PackWhereUniqueInputObjectSchema).optional()
}).strict();

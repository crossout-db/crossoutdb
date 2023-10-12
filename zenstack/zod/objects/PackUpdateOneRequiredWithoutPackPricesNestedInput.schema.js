"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackUpdateOneRequiredWithoutPackPricesNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackCreateWithoutPackPricesInput_schema_1 = require("./PackCreateWithoutPackPricesInput.schema");
const PackUncheckedCreateWithoutPackPricesInput_schema_1 = require("./PackUncheckedCreateWithoutPackPricesInput.schema");
const PackCreateOrConnectWithoutPackPricesInput_schema_1 = require("./PackCreateOrConnectWithoutPackPricesInput.schema");
const PackUpsertWithoutPackPricesInput_schema_1 = require("./PackUpsertWithoutPackPricesInput.schema");
const PackWhereUniqueInput_schema_1 = require("./PackWhereUniqueInput.schema");
const PackUpdateToOneWithWhereWithoutPackPricesInput_schema_1 = require("./PackUpdateToOneWithWhereWithoutPackPricesInput.schema");
const PackUpdateWithoutPackPricesInput_schema_1 = require("./PackUpdateWithoutPackPricesInput.schema");
const PackUncheckedUpdateWithoutPackPricesInput_schema_1 = require("./PackUncheckedUpdateWithoutPackPricesInput.schema");
exports.PackUpdateOneRequiredWithoutPackPricesNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => PackCreateWithoutPackPricesInput_schema_1.PackCreateWithoutPackPricesInputObjectSchema),
        zod_1.z.lazy(() => PackUncheckedCreateWithoutPackPricesInput_schema_1.PackUncheckedCreateWithoutPackPricesInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => PackCreateOrConnectWithoutPackPricesInput_schema_1.PackCreateOrConnectWithoutPackPricesInputObjectSchema).optional(), upsert: zod_1.z.lazy(() => PackUpsertWithoutPackPricesInput_schema_1.PackUpsertWithoutPackPricesInputObjectSchema).optional(), connect: zod_1.z.lazy(() => PackWhereUniqueInput_schema_1.PackWhereUniqueInputObjectSchema).optional(), update: zod_1.z.union([zod_1.z.lazy(() => PackUpdateToOneWithWhereWithoutPackPricesInput_schema_1.PackUpdateToOneWithWhereWithoutPackPricesInputObjectSchema),
        zod_1.z.lazy(() => PackUpdateWithoutPackPricesInput_schema_1.PackUpdateWithoutPackPricesInputObjectSchema),
        zod_1.z.lazy(() => PackUncheckedUpdateWithoutPackPricesInput_schema_1.PackUncheckedUpdateWithoutPackPricesInputObjectSchema)]).optional()
}).strict();

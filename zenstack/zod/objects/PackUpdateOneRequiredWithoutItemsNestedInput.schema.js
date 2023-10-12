"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackUpdateOneRequiredWithoutItemsNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackCreateWithoutItemsInput_schema_1 = require("./PackCreateWithoutItemsInput.schema");
const PackUncheckedCreateWithoutItemsInput_schema_1 = require("./PackUncheckedCreateWithoutItemsInput.schema");
const PackCreateOrConnectWithoutItemsInput_schema_1 = require("./PackCreateOrConnectWithoutItemsInput.schema");
const PackUpsertWithoutItemsInput_schema_1 = require("./PackUpsertWithoutItemsInput.schema");
const PackWhereUniqueInput_schema_1 = require("./PackWhereUniqueInput.schema");
const PackUpdateToOneWithWhereWithoutItemsInput_schema_1 = require("./PackUpdateToOneWithWhereWithoutItemsInput.schema");
const PackUpdateWithoutItemsInput_schema_1 = require("./PackUpdateWithoutItemsInput.schema");
const PackUncheckedUpdateWithoutItemsInput_schema_1 = require("./PackUncheckedUpdateWithoutItemsInput.schema");
exports.PackUpdateOneRequiredWithoutItemsNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => PackCreateWithoutItemsInput_schema_1.PackCreateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => PackUncheckedCreateWithoutItemsInput_schema_1.PackUncheckedCreateWithoutItemsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => PackCreateOrConnectWithoutItemsInput_schema_1.PackCreateOrConnectWithoutItemsInputObjectSchema).optional(), upsert: zod_1.z.lazy(() => PackUpsertWithoutItemsInput_schema_1.PackUpsertWithoutItemsInputObjectSchema).optional(), connect: zod_1.z.lazy(() => PackWhereUniqueInput_schema_1.PackWhereUniqueInputObjectSchema).optional(), update: zod_1.z.union([zod_1.z.lazy(() => PackUpdateToOneWithWhereWithoutItemsInput_schema_1.PackUpdateToOneWithWhereWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => PackUpdateWithoutItemsInput_schema_1.PackUpdateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => PackUncheckedUpdateWithoutItemsInput_schema_1.PackUncheckedUpdateWithoutItemsInputObjectSchema)]).optional()
}).strict();

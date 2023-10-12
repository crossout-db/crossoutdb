"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackCreateNestedOneWithoutItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackCreateWithoutItemsInput_schema_1 = require("./PackCreateWithoutItemsInput.schema");
const PackUncheckedCreateWithoutItemsInput_schema_1 = require("./PackUncheckedCreateWithoutItemsInput.schema");
const PackCreateOrConnectWithoutItemsInput_schema_1 = require("./PackCreateOrConnectWithoutItemsInput.schema");
const PackWhereUniqueInput_schema_1 = require("./PackWhereUniqueInput.schema");
exports.PackCreateNestedOneWithoutItemsInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => PackCreateWithoutItemsInput_schema_1.PackCreateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => PackUncheckedCreateWithoutItemsInput_schema_1.PackUncheckedCreateWithoutItemsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => PackCreateOrConnectWithoutItemsInput_schema_1.PackCreateOrConnectWithoutItemsInputObjectSchema).optional(), connect: zod_1.z.lazy(() => PackWhereUniqueInput_schema_1.PackWhereUniqueInputObjectSchema).optional()
}).strict();

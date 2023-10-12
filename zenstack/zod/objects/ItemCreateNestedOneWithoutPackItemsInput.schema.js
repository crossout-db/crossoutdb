"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCreateNestedOneWithoutPackItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateWithoutPackItemsInput_schema_1 = require("./ItemCreateWithoutPackItemsInput.schema");
const ItemUncheckedCreateWithoutPackItemsInput_schema_1 = require("./ItemUncheckedCreateWithoutPackItemsInput.schema");
const ItemCreateOrConnectWithoutPackItemsInput_schema_1 = require("./ItemCreateOrConnectWithoutPackItemsInput.schema");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
exports.ItemCreateNestedOneWithoutPackItemsInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutPackItemsInput_schema_1.ItemCreateWithoutPackItemsInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutPackItemsInput_schema_1.ItemUncheckedCreateWithoutPackItemsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ItemCreateOrConnectWithoutPackItemsInput_schema_1.ItemCreateOrConnectWithoutPackItemsInputObjectSchema).optional(), connect: zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema).optional()
}).strict();

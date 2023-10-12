"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpdateOneRequiredWithoutRecipesNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateWithoutRecipesInput_schema_1 = require("./ItemCreateWithoutRecipesInput.schema");
const ItemUncheckedCreateWithoutRecipesInput_schema_1 = require("./ItemUncheckedCreateWithoutRecipesInput.schema");
const ItemCreateOrConnectWithoutRecipesInput_schema_1 = require("./ItemCreateOrConnectWithoutRecipesInput.schema");
const ItemUpsertWithoutRecipesInput_schema_1 = require("./ItemUpsertWithoutRecipesInput.schema");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
const ItemUpdateToOneWithWhereWithoutRecipesInput_schema_1 = require("./ItemUpdateToOneWithWhereWithoutRecipesInput.schema");
const ItemUpdateWithoutRecipesInput_schema_1 = require("./ItemUpdateWithoutRecipesInput.schema");
const ItemUncheckedUpdateWithoutRecipesInput_schema_1 = require("./ItemUncheckedUpdateWithoutRecipesInput.schema");
exports.ItemUpdateOneRequiredWithoutRecipesNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutRecipesInput_schema_1.ItemCreateWithoutRecipesInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutRecipesInput_schema_1.ItemUncheckedCreateWithoutRecipesInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ItemCreateOrConnectWithoutRecipesInput_schema_1.ItemCreateOrConnectWithoutRecipesInputObjectSchema).optional(), upsert: zod_1.z.lazy(() => ItemUpsertWithoutRecipesInput_schema_1.ItemUpsertWithoutRecipesInputObjectSchema).optional(), connect: zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema).optional(), update: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateToOneWithWhereWithoutRecipesInput_schema_1.ItemUpdateToOneWithWhereWithoutRecipesInputObjectSchema),
        zod_1.z.lazy(() => ItemUpdateWithoutRecipesInput_schema_1.ItemUpdateWithoutRecipesInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedUpdateWithoutRecipesInput_schema_1.ItemUncheckedUpdateWithoutRecipesInputObjectSchema)]).optional()
}).strict();

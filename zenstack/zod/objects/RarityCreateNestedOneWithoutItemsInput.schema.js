"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RarityCreateNestedOneWithoutItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RarityCreateWithoutItemsInput_schema_1 = require("./RarityCreateWithoutItemsInput.schema");
const RarityUncheckedCreateWithoutItemsInput_schema_1 = require("./RarityUncheckedCreateWithoutItemsInput.schema");
const RarityCreateOrConnectWithoutItemsInput_schema_1 = require("./RarityCreateOrConnectWithoutItemsInput.schema");
const RarityWhereUniqueInput_schema_1 = require("./RarityWhereUniqueInput.schema");
exports.RarityCreateNestedOneWithoutItemsInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => RarityCreateWithoutItemsInput_schema_1.RarityCreateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => RarityUncheckedCreateWithoutItemsInput_schema_1.RarityUncheckedCreateWithoutItemsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => RarityCreateOrConnectWithoutItemsInput_schema_1.RarityCreateOrConnectWithoutItemsInputObjectSchema).optional(), connect: zod_1.z.lazy(() => RarityWhereUniqueInput_schema_1.RarityWhereUniqueInputObjectSchema).optional()
}).strict();

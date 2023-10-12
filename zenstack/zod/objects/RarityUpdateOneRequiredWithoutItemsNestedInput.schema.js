"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RarityUpdateOneRequiredWithoutItemsNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RarityCreateWithoutItemsInput_schema_1 = require("./RarityCreateWithoutItemsInput.schema");
const RarityUncheckedCreateWithoutItemsInput_schema_1 = require("./RarityUncheckedCreateWithoutItemsInput.schema");
const RarityCreateOrConnectWithoutItemsInput_schema_1 = require("./RarityCreateOrConnectWithoutItemsInput.schema");
const RarityUpsertWithoutItemsInput_schema_1 = require("./RarityUpsertWithoutItemsInput.schema");
const RarityWhereUniqueInput_schema_1 = require("./RarityWhereUniqueInput.schema");
const RarityUpdateToOneWithWhereWithoutItemsInput_schema_1 = require("./RarityUpdateToOneWithWhereWithoutItemsInput.schema");
const RarityUpdateWithoutItemsInput_schema_1 = require("./RarityUpdateWithoutItemsInput.schema");
const RarityUncheckedUpdateWithoutItemsInput_schema_1 = require("./RarityUncheckedUpdateWithoutItemsInput.schema");
exports.RarityUpdateOneRequiredWithoutItemsNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => RarityCreateWithoutItemsInput_schema_1.RarityCreateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => RarityUncheckedCreateWithoutItemsInput_schema_1.RarityUncheckedCreateWithoutItemsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => RarityCreateOrConnectWithoutItemsInput_schema_1.RarityCreateOrConnectWithoutItemsInputObjectSchema).optional(), upsert: zod_1.z.lazy(() => RarityUpsertWithoutItemsInput_schema_1.RarityUpsertWithoutItemsInputObjectSchema).optional(), connect: zod_1.z.lazy(() => RarityWhereUniqueInput_schema_1.RarityWhereUniqueInputObjectSchema).optional(), update: zod_1.z.union([zod_1.z.lazy(() => RarityUpdateToOneWithWhereWithoutItemsInput_schema_1.RarityUpdateToOneWithWhereWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => RarityUpdateWithoutItemsInput_schema_1.RarityUpdateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => RarityUncheckedUpdateWithoutItemsInput_schema_1.RarityUncheckedUpdateWithoutItemsInputObjectSchema)]).optional()
}).strict();

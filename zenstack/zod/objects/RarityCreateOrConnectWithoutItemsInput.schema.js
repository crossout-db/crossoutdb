"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RarityCreateOrConnectWithoutItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RarityWhereUniqueInput_schema_1 = require("./RarityWhereUniqueInput.schema");
const RarityCreateWithoutItemsInput_schema_1 = require("./RarityCreateWithoutItemsInput.schema");
const RarityUncheckedCreateWithoutItemsInput_schema_1 = require("./RarityUncheckedCreateWithoutItemsInput.schema");
exports.RarityCreateOrConnectWithoutItemsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => RarityWhereUniqueInput_schema_1.RarityWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => RarityCreateWithoutItemsInput_schema_1.RarityCreateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => RarityUncheckedCreateWithoutItemsInput_schema_1.RarityUncheckedCreateWithoutItemsInputObjectSchema)])
}).strict();

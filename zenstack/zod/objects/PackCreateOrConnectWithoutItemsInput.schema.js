"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackCreateOrConnectWithoutItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackWhereUniqueInput_schema_1 = require("./PackWhereUniqueInput.schema");
const PackCreateWithoutItemsInput_schema_1 = require("./PackCreateWithoutItemsInput.schema");
const PackUncheckedCreateWithoutItemsInput_schema_1 = require("./PackUncheckedCreateWithoutItemsInput.schema");
exports.PackCreateOrConnectWithoutItemsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => PackWhereUniqueInput_schema_1.PackWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => PackCreateWithoutItemsInput_schema_1.PackCreateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => PackUncheckedCreateWithoutItemsInput_schema_1.PackUncheckedCreateWithoutItemsInputObjectSchema)])
}).strict();

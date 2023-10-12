"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackItemCreateOrConnectWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackItemWhereUniqueInput_schema_1 = require("./PackItemWhereUniqueInput.schema");
const PackItemCreateWithoutItemInput_schema_1 = require("./PackItemCreateWithoutItemInput.schema");
const PackItemUncheckedCreateWithoutItemInput_schema_1 = require("./PackItemUncheckedCreateWithoutItemInput.schema");
exports.PackItemCreateOrConnectWithoutItemInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => PackItemWhereUniqueInput_schema_1.PackItemWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => PackItemCreateWithoutItemInput_schema_1.PackItemCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => PackItemUncheckedCreateWithoutItemInput_schema_1.PackItemUncheckedCreateWithoutItemInputObjectSchema)])
}).strict();

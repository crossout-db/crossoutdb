"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeCreateOrConnectWithoutItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const TypeWhereUniqueInput_schema_1 = require("./TypeWhereUniqueInput.schema");
const TypeCreateWithoutItemsInput_schema_1 = require("./TypeCreateWithoutItemsInput.schema");
const TypeUncheckedCreateWithoutItemsInput_schema_1 = require("./TypeUncheckedCreateWithoutItemsInput.schema");
exports.TypeCreateOrConnectWithoutItemsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => TypeWhereUniqueInput_schema_1.TypeWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => TypeCreateWithoutItemsInput_schema_1.TypeCreateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => TypeUncheckedCreateWithoutItemsInput_schema_1.TypeUncheckedCreateWithoutItemsInputObjectSchema)])
}).strict();

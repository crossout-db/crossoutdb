"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeCreateNestedOneWithoutItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const TypeCreateWithoutItemsInput_schema_1 = require("./TypeCreateWithoutItemsInput.schema");
const TypeUncheckedCreateWithoutItemsInput_schema_1 = require("./TypeUncheckedCreateWithoutItemsInput.schema");
const TypeCreateOrConnectWithoutItemsInput_schema_1 = require("./TypeCreateOrConnectWithoutItemsInput.schema");
const TypeWhereUniqueInput_schema_1 = require("./TypeWhereUniqueInput.schema");
exports.TypeCreateNestedOneWithoutItemsInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => TypeCreateWithoutItemsInput_schema_1.TypeCreateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => TypeUncheckedCreateWithoutItemsInput_schema_1.TypeUncheckedCreateWithoutItemsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => TypeCreateOrConnectWithoutItemsInput_schema_1.TypeCreateOrConnectWithoutItemsInputObjectSchema).optional(), connect: zod_1.z.lazy(() => TypeWhereUniqueInput_schema_1.TypeWhereUniqueInputObjectSchema).optional()
}).strict();

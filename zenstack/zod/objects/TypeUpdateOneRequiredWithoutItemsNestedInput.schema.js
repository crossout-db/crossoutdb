"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeUpdateOneRequiredWithoutItemsNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const TypeCreateWithoutItemsInput_schema_1 = require("./TypeCreateWithoutItemsInput.schema");
const TypeUncheckedCreateWithoutItemsInput_schema_1 = require("./TypeUncheckedCreateWithoutItemsInput.schema");
const TypeCreateOrConnectWithoutItemsInput_schema_1 = require("./TypeCreateOrConnectWithoutItemsInput.schema");
const TypeUpsertWithoutItemsInput_schema_1 = require("./TypeUpsertWithoutItemsInput.schema");
const TypeWhereUniqueInput_schema_1 = require("./TypeWhereUniqueInput.schema");
const TypeUpdateToOneWithWhereWithoutItemsInput_schema_1 = require("./TypeUpdateToOneWithWhereWithoutItemsInput.schema");
const TypeUpdateWithoutItemsInput_schema_1 = require("./TypeUpdateWithoutItemsInput.schema");
const TypeUncheckedUpdateWithoutItemsInput_schema_1 = require("./TypeUncheckedUpdateWithoutItemsInput.schema");
exports.TypeUpdateOneRequiredWithoutItemsNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => TypeCreateWithoutItemsInput_schema_1.TypeCreateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => TypeUncheckedCreateWithoutItemsInput_schema_1.TypeUncheckedCreateWithoutItemsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => TypeCreateOrConnectWithoutItemsInput_schema_1.TypeCreateOrConnectWithoutItemsInputObjectSchema).optional(), upsert: zod_1.z.lazy(() => TypeUpsertWithoutItemsInput_schema_1.TypeUpsertWithoutItemsInputObjectSchema).optional(), connect: zod_1.z.lazy(() => TypeWhereUniqueInput_schema_1.TypeWhereUniqueInputObjectSchema).optional(), update: zod_1.z.union([zod_1.z.lazy(() => TypeUpdateToOneWithWhereWithoutItemsInput_schema_1.TypeUpdateToOneWithWhereWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => TypeUpdateWithoutItemsInput_schema_1.TypeUpdateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => TypeUncheckedUpdateWithoutItemsInput_schema_1.TypeUncheckedUpdateWithoutItemsInputObjectSchema)]).optional()
}).strict();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeUpsertWithoutItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const TypeUpdateWithoutItemsInput_schema_1 = require("./TypeUpdateWithoutItemsInput.schema");
const TypeUncheckedUpdateWithoutItemsInput_schema_1 = require("./TypeUncheckedUpdateWithoutItemsInput.schema");
const TypeCreateWithoutItemsInput_schema_1 = require("./TypeCreateWithoutItemsInput.schema");
const TypeUncheckedCreateWithoutItemsInput_schema_1 = require("./TypeUncheckedCreateWithoutItemsInput.schema");
const TypeWhereInput_schema_1 = require("./TypeWhereInput.schema");
exports.TypeUpsertWithoutItemsInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => TypeUpdateWithoutItemsInput_schema_1.TypeUpdateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => TypeUncheckedUpdateWithoutItemsInput_schema_1.TypeUncheckedUpdateWithoutItemsInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => TypeCreateWithoutItemsInput_schema_1.TypeCreateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => TypeUncheckedCreateWithoutItemsInput_schema_1.TypeUncheckedCreateWithoutItemsInputObjectSchema)]), where: zod_1.z.lazy(() => TypeWhereInput_schema_1.TypeWhereInputObjectSchema).optional()
}).strict();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackItemUpdateManyWithWhereWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackItemScalarWhereInput_schema_1 = require("./PackItemScalarWhereInput.schema");
const PackItemUpdateManyMutationInput_schema_1 = require("./PackItemUpdateManyMutationInput.schema");
const PackItemUncheckedUpdateManyWithoutItemInput_schema_1 = require("./PackItemUncheckedUpdateManyWithoutItemInput.schema");
exports.PackItemUpdateManyWithWhereWithoutItemInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => PackItemScalarWhereInput_schema_1.PackItemScalarWhereInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => PackItemUpdateManyMutationInput_schema_1.PackItemUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => PackItemUncheckedUpdateManyWithoutItemInput_schema_1.PackItemUncheckedUpdateManyWithoutItemInputObjectSchema)])
}).strict();

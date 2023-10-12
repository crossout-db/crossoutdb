"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackPriceUpdateManyWithWhereWithoutPackInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackPriceScalarWhereInput_schema_1 = require("./PackPriceScalarWhereInput.schema");
const PackPriceUpdateManyMutationInput_schema_1 = require("./PackPriceUpdateManyMutationInput.schema");
const PackPriceUncheckedUpdateManyWithoutPackInput_schema_1 = require("./PackPriceUncheckedUpdateManyWithoutPackInput.schema");
exports.PackPriceUpdateManyWithWhereWithoutPackInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => PackPriceScalarWhereInput_schema_1.PackPriceScalarWhereInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => PackPriceUpdateManyMutationInput_schema_1.PackPriceUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => PackPriceUncheckedUpdateManyWithoutPackInput_schema_1.PackPriceUncheckedUpdateManyWithoutPackInputObjectSchema)])
}).strict();

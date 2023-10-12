"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackItemUpdateWithWhereUniqueWithoutPackInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackItemWhereUniqueInput_schema_1 = require("./PackItemWhereUniqueInput.schema");
const PackItemUpdateWithoutPackInput_schema_1 = require("./PackItemUpdateWithoutPackInput.schema");
const PackItemUncheckedUpdateWithoutPackInput_schema_1 = require("./PackItemUncheckedUpdateWithoutPackInput.schema");
exports.PackItemUpdateWithWhereUniqueWithoutPackInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => PackItemWhereUniqueInput_schema_1.PackItemWhereUniqueInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => PackItemUpdateWithoutPackInput_schema_1.PackItemUpdateWithoutPackInputObjectSchema),
        zod_1.z.lazy(() => PackItemUncheckedUpdateWithoutPackInput_schema_1.PackItemUncheckedUpdateWithoutPackInputObjectSchema)])
}).strict();

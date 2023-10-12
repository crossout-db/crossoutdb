"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackItemUpsertWithWhereUniqueWithoutPackInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackItemWhereUniqueInput_schema_1 = require("./PackItemWhereUniqueInput.schema");
const PackItemUpdateWithoutPackInput_schema_1 = require("./PackItemUpdateWithoutPackInput.schema");
const PackItemUncheckedUpdateWithoutPackInput_schema_1 = require("./PackItemUncheckedUpdateWithoutPackInput.schema");
const PackItemCreateWithoutPackInput_schema_1 = require("./PackItemCreateWithoutPackInput.schema");
const PackItemUncheckedCreateWithoutPackInput_schema_1 = require("./PackItemUncheckedCreateWithoutPackInput.schema");
exports.PackItemUpsertWithWhereUniqueWithoutPackInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => PackItemWhereUniqueInput_schema_1.PackItemWhereUniqueInputObjectSchema), update: zod_1.z.union([zod_1.z.lazy(() => PackItemUpdateWithoutPackInput_schema_1.PackItemUpdateWithoutPackInputObjectSchema),
        zod_1.z.lazy(() => PackItemUncheckedUpdateWithoutPackInput_schema_1.PackItemUncheckedUpdateWithoutPackInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => PackItemCreateWithoutPackInput_schema_1.PackItemCreateWithoutPackInputObjectSchema),
        zod_1.z.lazy(() => PackItemUncheckedCreateWithoutPackInput_schema_1.PackItemUncheckedCreateWithoutPackInputObjectSchema)])
}).strict();

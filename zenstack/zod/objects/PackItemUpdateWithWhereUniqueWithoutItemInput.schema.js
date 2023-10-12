"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackItemUpdateWithWhereUniqueWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackItemWhereUniqueInput_schema_1 = require("./PackItemWhereUniqueInput.schema");
const PackItemUpdateWithoutItemInput_schema_1 = require("./PackItemUpdateWithoutItemInput.schema");
const PackItemUncheckedUpdateWithoutItemInput_schema_1 = require("./PackItemUncheckedUpdateWithoutItemInput.schema");
exports.PackItemUpdateWithWhereUniqueWithoutItemInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => PackItemWhereUniqueInput_schema_1.PackItemWhereUniqueInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => PackItemUpdateWithoutItemInput_schema_1.PackItemUpdateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => PackItemUncheckedUpdateWithoutItemInput_schema_1.PackItemUncheckedUpdateWithoutItemInputObjectSchema)])
}).strict();

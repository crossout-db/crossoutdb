"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemStatsUpdateWithWhereUniqueWithoutUserInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemStatsWhereUniqueInput_schema_1 = require("./ItemStatsWhereUniqueInput.schema");
const ItemStatsUpdateWithoutUserInput_schema_1 = require("./ItemStatsUpdateWithoutUserInput.schema");
const ItemStatsUncheckedUpdateWithoutUserInput_schema_1 = require("./ItemStatsUncheckedUpdateWithoutUserInput.schema");
exports.ItemStatsUpdateWithWhereUniqueWithoutUserInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => ItemStatsUpdateWithoutUserInput_schema_1.ItemStatsUpdateWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsUncheckedUpdateWithoutUserInput_schema_1.ItemStatsUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();

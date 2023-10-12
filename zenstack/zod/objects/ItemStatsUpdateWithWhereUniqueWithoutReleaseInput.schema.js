"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemStatsUpdateWithWhereUniqueWithoutReleaseInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemStatsWhereUniqueInput_schema_1 = require("./ItemStatsWhereUniqueInput.schema");
const ItemStatsUpdateWithoutReleaseInput_schema_1 = require("./ItemStatsUpdateWithoutReleaseInput.schema");
const ItemStatsUncheckedUpdateWithoutReleaseInput_schema_1 = require("./ItemStatsUncheckedUpdateWithoutReleaseInput.schema");
exports.ItemStatsUpdateWithWhereUniqueWithoutReleaseInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => ItemStatsUpdateWithoutReleaseInput_schema_1.ItemStatsUpdateWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsUncheckedUpdateWithoutReleaseInput_schema_1.ItemStatsUncheckedUpdateWithoutReleaseInputObjectSchema)])
}).strict();

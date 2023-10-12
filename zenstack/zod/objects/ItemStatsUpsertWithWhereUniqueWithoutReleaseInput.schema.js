"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemStatsUpsertWithWhereUniqueWithoutReleaseInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemStatsWhereUniqueInput_schema_1 = require("./ItemStatsWhereUniqueInput.schema");
const ItemStatsUpdateWithoutReleaseInput_schema_1 = require("./ItemStatsUpdateWithoutReleaseInput.schema");
const ItemStatsUncheckedUpdateWithoutReleaseInput_schema_1 = require("./ItemStatsUncheckedUpdateWithoutReleaseInput.schema");
const ItemStatsCreateWithoutReleaseInput_schema_1 = require("./ItemStatsCreateWithoutReleaseInput.schema");
const ItemStatsUncheckedCreateWithoutReleaseInput_schema_1 = require("./ItemStatsUncheckedCreateWithoutReleaseInput.schema");
exports.ItemStatsUpsertWithWhereUniqueWithoutReleaseInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema), update: zod_1.z.union([zod_1.z.lazy(() => ItemStatsUpdateWithoutReleaseInput_schema_1.ItemStatsUpdateWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsUncheckedUpdateWithoutReleaseInput_schema_1.ItemStatsUncheckedUpdateWithoutReleaseInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => ItemStatsCreateWithoutReleaseInput_schema_1.ItemStatsCreateWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsUncheckedCreateWithoutReleaseInput_schema_1.ItemStatsUncheckedCreateWithoutReleaseInputObjectSchema)])
}).strict();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemStatsCreateOrConnectWithoutReleaseInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemStatsWhereUniqueInput_schema_1 = require("./ItemStatsWhereUniqueInput.schema");
const ItemStatsCreateWithoutReleaseInput_schema_1 = require("./ItemStatsCreateWithoutReleaseInput.schema");
const ItemStatsUncheckedCreateWithoutReleaseInput_schema_1 = require("./ItemStatsUncheckedCreateWithoutReleaseInput.schema");
exports.ItemStatsCreateOrConnectWithoutReleaseInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => ItemStatsCreateWithoutReleaseInput_schema_1.ItemStatsCreateWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsUncheckedCreateWithoutReleaseInput_schema_1.ItemStatsUncheckedCreateWithoutReleaseInputObjectSchema)])
}).strict();

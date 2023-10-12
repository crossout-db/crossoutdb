"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemStatsCreateOrConnectWithoutUserInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemStatsWhereUniqueInput_schema_1 = require("./ItemStatsWhereUniqueInput.schema");
const ItemStatsCreateWithoutUserInput_schema_1 = require("./ItemStatsCreateWithoutUserInput.schema");
const ItemStatsUncheckedCreateWithoutUserInput_schema_1 = require("./ItemStatsUncheckedCreateWithoutUserInput.schema");
exports.ItemStatsCreateOrConnectWithoutUserInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => ItemStatsCreateWithoutUserInput_schema_1.ItemStatsCreateWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsUncheckedCreateWithoutUserInput_schema_1.ItemStatsUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();

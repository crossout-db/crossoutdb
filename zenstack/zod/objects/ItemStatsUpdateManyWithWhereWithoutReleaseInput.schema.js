"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemStatsUpdateManyWithWhereWithoutReleaseInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemStatsScalarWhereInput_schema_1 = require("./ItemStatsScalarWhereInput.schema");
const ItemStatsUpdateManyMutationInput_schema_1 = require("./ItemStatsUpdateManyMutationInput.schema");
const ItemStatsUncheckedUpdateManyWithoutReleaseInput_schema_1 = require("./ItemStatsUncheckedUpdateManyWithoutReleaseInput.schema");
exports.ItemStatsUpdateManyWithWhereWithoutReleaseInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemStatsScalarWhereInput_schema_1.ItemStatsScalarWhereInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => ItemStatsUpdateManyMutationInput_schema_1.ItemStatsUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsUncheckedUpdateManyWithoutReleaseInput_schema_1.ItemStatsUncheckedUpdateManyWithoutReleaseInputObjectSchema)])
}).strict();

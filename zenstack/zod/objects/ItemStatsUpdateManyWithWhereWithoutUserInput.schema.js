"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemStatsUpdateManyWithWhereWithoutUserInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemStatsScalarWhereInput_schema_1 = require("./ItemStatsScalarWhereInput.schema");
const ItemStatsUpdateManyMutationInput_schema_1 = require("./ItemStatsUpdateManyMutationInput.schema");
const ItemStatsUncheckedUpdateManyWithoutUserInput_schema_1 = require("./ItemStatsUncheckedUpdateManyWithoutUserInput.schema");
exports.ItemStatsUpdateManyWithWhereWithoutUserInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemStatsScalarWhereInput_schema_1.ItemStatsScalarWhereInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => ItemStatsUpdateManyMutationInput_schema_1.ItemStatsUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsUncheckedUpdateManyWithoutUserInput_schema_1.ItemStatsUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();

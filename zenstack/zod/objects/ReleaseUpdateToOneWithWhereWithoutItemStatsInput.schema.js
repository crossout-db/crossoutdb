"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseUpdateToOneWithWhereWithoutItemStatsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ReleaseWhereInput_schema_1 = require("./ReleaseWhereInput.schema");
const ReleaseUpdateWithoutItemStatsInput_schema_1 = require("./ReleaseUpdateWithoutItemStatsInput.schema");
const ReleaseUncheckedUpdateWithoutItemStatsInput_schema_1 = require("./ReleaseUncheckedUpdateWithoutItemStatsInput.schema");
exports.ReleaseUpdateToOneWithWhereWithoutItemStatsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ReleaseWhereInput_schema_1.ReleaseWhereInputObjectSchema).optional(), data: zod_1.z.union([zod_1.z.lazy(() => ReleaseUpdateWithoutItemStatsInput_schema_1.ReleaseUpdateWithoutItemStatsInputObjectSchema),
        zod_1.z.lazy(() => ReleaseUncheckedUpdateWithoutItemStatsInput_schema_1.ReleaseUncheckedUpdateWithoutItemStatsInputObjectSchema)])
}).strict();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseUpsertWithoutItemStatsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ReleaseUpdateWithoutItemStatsInput_schema_1 = require("./ReleaseUpdateWithoutItemStatsInput.schema");
const ReleaseUncheckedUpdateWithoutItemStatsInput_schema_1 = require("./ReleaseUncheckedUpdateWithoutItemStatsInput.schema");
const ReleaseCreateWithoutItemStatsInput_schema_1 = require("./ReleaseCreateWithoutItemStatsInput.schema");
const ReleaseUncheckedCreateWithoutItemStatsInput_schema_1 = require("./ReleaseUncheckedCreateWithoutItemStatsInput.schema");
const ReleaseWhereInput_schema_1 = require("./ReleaseWhereInput.schema");
exports.ReleaseUpsertWithoutItemStatsInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => ReleaseUpdateWithoutItemStatsInput_schema_1.ReleaseUpdateWithoutItemStatsInputObjectSchema),
        zod_1.z.lazy(() => ReleaseUncheckedUpdateWithoutItemStatsInput_schema_1.ReleaseUncheckedUpdateWithoutItemStatsInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => ReleaseCreateWithoutItemStatsInput_schema_1.ReleaseCreateWithoutItemStatsInputObjectSchema),
        zod_1.z.lazy(() => ReleaseUncheckedCreateWithoutItemStatsInput_schema_1.ReleaseUncheckedCreateWithoutItemStatsInputObjectSchema)]), where: zod_1.z.lazy(() => ReleaseWhereInput_schema_1.ReleaseWhereInputObjectSchema).optional()
}).strict();

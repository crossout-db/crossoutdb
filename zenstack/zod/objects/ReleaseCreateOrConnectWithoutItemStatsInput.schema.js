"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseCreateOrConnectWithoutItemStatsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ReleaseWhereUniqueInput_schema_1 = require("./ReleaseWhereUniqueInput.schema");
const ReleaseCreateWithoutItemStatsInput_schema_1 = require("./ReleaseCreateWithoutItemStatsInput.schema");
const ReleaseUncheckedCreateWithoutItemStatsInput_schema_1 = require("./ReleaseUncheckedCreateWithoutItemStatsInput.schema");
exports.ReleaseCreateOrConnectWithoutItemStatsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ReleaseWhereUniqueInput_schema_1.ReleaseWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => ReleaseCreateWithoutItemStatsInput_schema_1.ReleaseCreateWithoutItemStatsInputObjectSchema),
        zod_1.z.lazy(() => ReleaseUncheckedCreateWithoutItemStatsInput_schema_1.ReleaseUncheckedCreateWithoutItemStatsInputObjectSchema)])
}).strict();

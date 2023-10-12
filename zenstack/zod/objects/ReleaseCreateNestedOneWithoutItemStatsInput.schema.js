"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseCreateNestedOneWithoutItemStatsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ReleaseCreateWithoutItemStatsInput_schema_1 = require("./ReleaseCreateWithoutItemStatsInput.schema");
const ReleaseUncheckedCreateWithoutItemStatsInput_schema_1 = require("./ReleaseUncheckedCreateWithoutItemStatsInput.schema");
const ReleaseCreateOrConnectWithoutItemStatsInput_schema_1 = require("./ReleaseCreateOrConnectWithoutItemStatsInput.schema");
const ReleaseWhereUniqueInput_schema_1 = require("./ReleaseWhereUniqueInput.schema");
exports.ReleaseCreateNestedOneWithoutItemStatsInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ReleaseCreateWithoutItemStatsInput_schema_1.ReleaseCreateWithoutItemStatsInputObjectSchema),
        zod_1.z.lazy(() => ReleaseUncheckedCreateWithoutItemStatsInput_schema_1.ReleaseUncheckedCreateWithoutItemStatsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ReleaseCreateOrConnectWithoutItemStatsInput_schema_1.ReleaseCreateOrConnectWithoutItemStatsInputObjectSchema).optional(), connect: zod_1.z.lazy(() => ReleaseWhereUniqueInput_schema_1.ReleaseWhereUniqueInputObjectSchema).optional()
}).strict();

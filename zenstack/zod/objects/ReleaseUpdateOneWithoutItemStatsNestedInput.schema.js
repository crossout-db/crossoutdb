"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseUpdateOneWithoutItemStatsNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ReleaseCreateWithoutItemStatsInput_schema_1 = require("./ReleaseCreateWithoutItemStatsInput.schema");
const ReleaseUncheckedCreateWithoutItemStatsInput_schema_1 = require("./ReleaseUncheckedCreateWithoutItemStatsInput.schema");
const ReleaseCreateOrConnectWithoutItemStatsInput_schema_1 = require("./ReleaseCreateOrConnectWithoutItemStatsInput.schema");
const ReleaseUpsertWithoutItemStatsInput_schema_1 = require("./ReleaseUpsertWithoutItemStatsInput.schema");
const ReleaseWhereInput_schema_1 = require("./ReleaseWhereInput.schema");
const ReleaseWhereUniqueInput_schema_1 = require("./ReleaseWhereUniqueInput.schema");
const ReleaseUpdateToOneWithWhereWithoutItemStatsInput_schema_1 = require("./ReleaseUpdateToOneWithWhereWithoutItemStatsInput.schema");
const ReleaseUpdateWithoutItemStatsInput_schema_1 = require("./ReleaseUpdateWithoutItemStatsInput.schema");
const ReleaseUncheckedUpdateWithoutItemStatsInput_schema_1 = require("./ReleaseUncheckedUpdateWithoutItemStatsInput.schema");
exports.ReleaseUpdateOneWithoutItemStatsNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ReleaseCreateWithoutItemStatsInput_schema_1.ReleaseCreateWithoutItemStatsInputObjectSchema),
        zod_1.z.lazy(() => ReleaseUncheckedCreateWithoutItemStatsInput_schema_1.ReleaseUncheckedCreateWithoutItemStatsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ReleaseCreateOrConnectWithoutItemStatsInput_schema_1.ReleaseCreateOrConnectWithoutItemStatsInputObjectSchema).optional(), upsert: zod_1.z.lazy(() => ReleaseUpsertWithoutItemStatsInput_schema_1.ReleaseUpsertWithoutItemStatsInputObjectSchema).optional(), disconnect: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ReleaseWhereInput_schema_1.ReleaseWhereInputObjectSchema)]).optional(), delete: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ReleaseWhereInput_schema_1.ReleaseWhereInputObjectSchema)]).optional(), connect: zod_1.z.lazy(() => ReleaseWhereUniqueInput_schema_1.ReleaseWhereUniqueInputObjectSchema).optional(), update: zod_1.z.union([zod_1.z.lazy(() => ReleaseUpdateToOneWithWhereWithoutItemStatsInput_schema_1.ReleaseUpdateToOneWithWhereWithoutItemStatsInputObjectSchema),
        zod_1.z.lazy(() => ReleaseUpdateWithoutItemStatsInput_schema_1.ReleaseUpdateWithoutItemStatsInputObjectSchema),
        zod_1.z.lazy(() => ReleaseUncheckedUpdateWithoutItemStatsInput_schema_1.ReleaseUncheckedUpdateWithoutItemStatsInputObjectSchema)]).optional()
}).strict();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketUpdateManyWithWhereWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const MarketScalarWhereInput_schema_1 = require("./MarketScalarWhereInput.schema");
const MarketUpdateManyMutationInput_schema_1 = require("./MarketUpdateManyMutationInput.schema");
const MarketUncheckedUpdateManyWithoutItemInput_schema_1 = require("./MarketUncheckedUpdateManyWithoutItemInput.schema");
exports.MarketUpdateManyWithWhereWithoutItemInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => MarketScalarWhereInput_schema_1.MarketScalarWhereInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => MarketUpdateManyMutationInput_schema_1.MarketUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => MarketUncheckedUpdateManyWithoutItemInput_schema_1.MarketUncheckedUpdateManyWithoutItemInputObjectSchema)])
}).strict();

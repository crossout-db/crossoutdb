"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeExchangeUpdateManyWithWhereWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const BadgeExchangeScalarWhereInput_schema_1 = require("./BadgeExchangeScalarWhereInput.schema");
const BadgeExchangeUpdateManyMutationInput_schema_1 = require("./BadgeExchangeUpdateManyMutationInput.schema");
const BadgeExchangeUncheckedUpdateManyWithoutItemInput_schema_1 = require("./BadgeExchangeUncheckedUpdateManyWithoutItemInput.schema");
exports.BadgeExchangeUpdateManyWithWhereWithoutItemInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => BadgeExchangeScalarWhereInput_schema_1.BadgeExchangeScalarWhereInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => BadgeExchangeUpdateManyMutationInput_schema_1.BadgeExchangeUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => BadgeExchangeUncheckedUpdateManyWithoutItemInput_schema_1.BadgeExchangeUncheckedUpdateManyWithoutItemInputObjectSchema)])
}).strict();

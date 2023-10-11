import { z } from 'zod';
import { RecipeWhereInputObjectSchema } from '../objects/RecipeWhereInput.schema';
import { RecipeOrderByWithAggregationInputObjectSchema } from '../objects/RecipeOrderByWithAggregationInput.schema';
import { RecipeScalarWhereWithAggregatesInputObjectSchema } from '../objects/RecipeScalarWhereWithAggregatesInput.schema';
import { RecipeScalarFieldEnumSchema } from '../enums/RecipeScalarFieldEnum.schema';

export const RecipeGroupBySchema = z.object({
  where: RecipeWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      RecipeOrderByWithAggregationInputObjectSchema,
      RecipeOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: RecipeScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(RecipeScalarFieldEnumSchema),
});

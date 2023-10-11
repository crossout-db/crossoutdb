import { z } from 'zod';
import { RecipeOrderByWithRelationInputObjectSchema } from '../objects/RecipeOrderByWithRelationInput.schema';
import { RecipeWhereInputObjectSchema } from '../objects/RecipeWhereInput.schema';
import { RecipeWhereUniqueInputObjectSchema } from '../objects/RecipeWhereUniqueInput.schema';
import { RecipeCountAggregateInputObjectSchema } from '../objects/RecipeCountAggregateInput.schema';
import { RecipeMinAggregateInputObjectSchema } from '../objects/RecipeMinAggregateInput.schema';
import { RecipeMaxAggregateInputObjectSchema } from '../objects/RecipeMaxAggregateInput.schema';
import { RecipeAvgAggregateInputObjectSchema } from '../objects/RecipeAvgAggregateInput.schema';
import { RecipeSumAggregateInputObjectSchema } from '../objects/RecipeSumAggregateInput.schema';

export const RecipeAggregateSchema = z.object({
  orderBy: z
    .union([
      RecipeOrderByWithRelationInputObjectSchema,
      RecipeOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: RecipeWhereInputObjectSchema.optional(),
  cursor: RecipeWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), RecipeCountAggregateInputObjectSchema])
    .optional(),
  _min: RecipeMinAggregateInputObjectSchema.optional(),
  _max: RecipeMaxAggregateInputObjectSchema.optional(),
  _avg: RecipeAvgAggregateInputObjectSchema.optional(),
  _sum: RecipeSumAggregateInputObjectSchema.optional(),
});

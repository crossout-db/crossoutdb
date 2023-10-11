import { z } from 'zod';
import { RecipeUpdateManyMutationInputObjectSchema } from '../objects/RecipeUpdateManyMutationInput.schema';
import { RecipeWhereInputObjectSchema } from '../objects/RecipeWhereInput.schema';

export const RecipeUpdateManySchema = z.object({
  data: RecipeUpdateManyMutationInputObjectSchema,
  where: RecipeWhereInputObjectSchema.optional(),
});

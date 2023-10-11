import { z } from 'zod';
import { RecipeWhereInputObjectSchema } from '../objects/RecipeWhereInput.schema';

export const RecipeDeleteManySchema = z.object({
  where: RecipeWhereInputObjectSchema.optional(),
});

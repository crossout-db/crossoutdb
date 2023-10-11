import { z } from 'zod';
import { RecipeWhereUniqueInputObjectSchema } from '../objects/RecipeWhereUniqueInput.schema';

export const RecipeDeleteOneSchema = z.object({
  where: RecipeWhereUniqueInputObjectSchema,
});

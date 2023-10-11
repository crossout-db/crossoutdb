import { z } from 'zod';
import { RecipeWhereUniqueInputObjectSchema } from '../objects/RecipeWhereUniqueInput.schema';

export const RecipeFindUniqueSchema = z.object({
  where: RecipeWhereUniqueInputObjectSchema,
});

import { z } from 'zod';
import { RecipeCreateInputObjectSchema } from '../objects/RecipeCreateInput.schema';
import { RecipeUncheckedCreateInputObjectSchema } from '../objects/RecipeUncheckedCreateInput.schema';

export const RecipeCreateOneSchema = z.object({
  data: z.union([
    RecipeCreateInputObjectSchema,
    RecipeUncheckedCreateInputObjectSchema,
  ]),
});

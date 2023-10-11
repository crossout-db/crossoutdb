import { z } from 'zod';
import { RecipeUpdateInputObjectSchema } from '../objects/RecipeUpdateInput.schema';
import { RecipeUncheckedUpdateInputObjectSchema } from '../objects/RecipeUncheckedUpdateInput.schema';
import { RecipeWhereUniqueInputObjectSchema } from '../objects/RecipeWhereUniqueInput.schema';

export const RecipeUpdateOneSchema = z.object({
  data: z.union([
    RecipeUpdateInputObjectSchema,
    RecipeUncheckedUpdateInputObjectSchema,
  ]),
  where: RecipeWhereUniqueInputObjectSchema,
});

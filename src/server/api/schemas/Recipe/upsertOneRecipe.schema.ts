import { z } from 'zod';
import { RecipeWhereUniqueInputObjectSchema } from '../objects/RecipeWhereUniqueInput.schema';
import { RecipeCreateInputObjectSchema } from '../objects/RecipeCreateInput.schema';
import { RecipeUncheckedCreateInputObjectSchema } from '../objects/RecipeUncheckedCreateInput.schema';
import { RecipeUpdateInputObjectSchema } from '../objects/RecipeUpdateInput.schema';
import { RecipeUncheckedUpdateInputObjectSchema } from '../objects/RecipeUncheckedUpdateInput.schema';

export const RecipeUpsertSchema = z.object({
  where: RecipeWhereUniqueInputObjectSchema,
  create: z.union([
    RecipeCreateInputObjectSchema,
    RecipeUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    RecipeUpdateInputObjectSchema,
    RecipeUncheckedUpdateInputObjectSchema,
  ]),
});

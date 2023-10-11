import { z } from 'zod';
import { RecipeOrderByWithRelationInputObjectSchema } from '../objects/RecipeOrderByWithRelationInput.schema';
import { RecipeWhereInputObjectSchema } from '../objects/RecipeWhereInput.schema';
import { RecipeWhereUniqueInputObjectSchema } from '../objects/RecipeWhereUniqueInput.schema';
import { RecipeScalarFieldEnumSchema } from '../enums/RecipeScalarFieldEnum.schema';

export const RecipeFindManySchema = z.object({
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
  distinct: z.array(RecipeScalarFieldEnumSchema).optional(),
});

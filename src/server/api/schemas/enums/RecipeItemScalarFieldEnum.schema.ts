import { z } from 'zod';

export const RecipeItemScalarFieldEnumSchema = z.enum([
  'id',
  'recipeId',
  'itemId',
  'quantity',
]);

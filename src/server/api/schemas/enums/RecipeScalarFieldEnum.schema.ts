import { z } from 'zod';

export const RecipeScalarFieldEnumSchema = z.enum([
  'id',
  'resultItemId',
  'quantity',
  'releaseId',
  'craftCost',
  'timestamp',
  'active',
]);

import { z } from 'zod';

export const PackItemScalarFieldEnumSchema = z.enum([
  'id',
  'packId',
  'itemId',
  'quantity',
]);

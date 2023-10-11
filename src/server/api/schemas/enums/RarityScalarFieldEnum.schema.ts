import { z } from 'zod';

export const RarityScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'order',
  'primaryColor',
  'secondaryColor',
]);

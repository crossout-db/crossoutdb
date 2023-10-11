import { z } from 'zod';

export const BadgeExchangeScalarFieldEnumSchema = z.enum([
  'id',
  'itemId',
  'quantity',
  'badges',
  'active',
  'timestamp',
]);

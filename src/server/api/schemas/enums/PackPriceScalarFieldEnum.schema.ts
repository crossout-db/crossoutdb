import { z } from 'zod';

export const PackPriceScalarFieldEnumSchema = z.enum([
  'id',
  'packId',
  'timestamp',
  'priceUSD',
  'priceEUR',
  'priceGBP',
  'priceRUB',
  'discount',
]);

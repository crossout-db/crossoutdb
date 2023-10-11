import { z } from 'zod';

export const MarketScalarFieldEnumSchema = z.enum([
  'id',
  'itemId',
  'marketDef',
  'sellPriceMin',
  'sellOrders',
  'buyPriceMax',
  'buyOrders',
  'craftCost',
  'timestamp',
]);

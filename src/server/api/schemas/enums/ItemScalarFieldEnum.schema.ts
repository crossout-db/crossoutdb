import { z } from 'zod';

export const ItemScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'marketDef',
  'quantity',
  'typeId',
  'categoryId',
  'factionId',
  'rarityId',
  'level',
  'sellPriceMin',
  'sellOrders',
  'buyPriceMax',
  'buyOrders',
  'craftCost',
  'timestamp',
  'active',
  'logId',
]);

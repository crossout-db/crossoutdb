import { z } from 'zod';

export const PackScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'description',
  'steamAppID',
  'key',
  'coins',
  'releaseId',
  'active',
]);

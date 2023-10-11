import { z } from 'zod';

export const LogScalarFieldEnumSchema = z.enum([
  'id',
  'timestamp',
  'userId',
  'tableChanged',
  'recordId',
  'record',
]);

import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'role',
  'email',
  'emailVerified',
  'image',
]);

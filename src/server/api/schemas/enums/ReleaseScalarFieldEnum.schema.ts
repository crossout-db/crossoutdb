import { z } from 'zod';

export const ReleaseScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'xoVersion',
  'build',
  'description',
  'battlePass',
  'url',
  'startDate',
  'endDate',
  'active',
]);

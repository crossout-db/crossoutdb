import { z } from 'zod';

export const UserRoleSchema = z.enum(['USER', 'CONTRIBUTOR', 'ADMIN']);

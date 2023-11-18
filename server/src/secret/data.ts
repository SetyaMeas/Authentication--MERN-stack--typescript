import { config } from 'dotenv';
import { join } from 'path';

config({ path: join(__dirname, "..", "..", ".env") });

export const secretToken: any = process.env.JWT_SECRET_TOKEN;
export const dataBaseUri: any = process.env.DATABASE_URI;

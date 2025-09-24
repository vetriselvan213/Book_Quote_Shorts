import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const required = ['PGHOST', 'PGPORT', 'PGDATABASE', 'PGUSER', 'PGPASSWORD', 'PORT'];

for (const key of required) {
  if (!process.env[key]) {
    console.error(`❌ Missing required env var: ${key}`);
    process.exit(1);
  }
}

export const env = {
  pgHost: process.env.PGHOST!,
  pgPort: Number(process.env.PGPORT!),
  pgDatabase: process.env.PGDATABASE!,
  pgUser: process.env.PGUSER!,
  pgPassword: process.env.PGPASSWORD!,
  port: Number(process.env.PORT!),
  clientOrigin: process.env.CLIENT_ORIGIN || '*',
};

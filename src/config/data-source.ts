import { DataSource } from "typeorm";

export function bootstrapDatabase() {
  const dataSource = new DataSource({
    type: "postgres",
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DB,
    synchronize: true,
    logging: false,
    entities: ["./**/*.entity.{ts,js}"],
    subscribers: [],
    migrations: [],
  });

  return dataSource.initialize();
}

import { injectable } from "inversify";
import { bootstrapDatabase } from "../../config/data-source";
import { DataSource, EntityTarget, Repository } from "typeorm";

@injectable()
export class DatabaseService {
  private static datasource: DataSource;

  public static getDatasource() {
    if (DatabaseService.datasource instanceof DataSource) {
      return DatabaseService.datasource;
    }
    throw Error("missing datasource");
  }

  public static async bootstrap() {
    try {
      DatabaseService.datasource = await bootstrapDatabase();
      return DatabaseService.datasource;
    } catch (e) {
      process.exit(1);
    }
  }

  public repo<E>(entity: EntityTarget<E>): Repository<E> {
    const db = DatabaseService.getDatasource();
    return db.getRepository(entity);
  }
}

import { Container } from "inversify";
import { DatabaseService } from "./database.service";

export function registerCommonService(container: Container) {
  container.bind(DatabaseService).toSelf();
}

export { DatabaseService };

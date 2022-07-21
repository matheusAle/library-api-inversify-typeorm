import { Container } from "inversify";
import { Author } from "./author.entity";
import { AuthorRepository } from "./author.repository";
import { AuthorService } from "./author.service";

export * from "./types";

export function registerAutherServices(container: Container) {
  container.bind(AuthorRepository).toDynamicValue(() => new AuthorRepository());
  container.bind(AuthorService).toSelf();
}

export { Author, AuthorRepository, AuthorService };

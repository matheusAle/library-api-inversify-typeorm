import { Container } from "inversify";
import { BookRepository } from "./book.repository";
import { BookService } from "./book.service";

export function registerBookServices(container: Container) {
  container.bind(BookRepository).toDynamicValue(() => new BookRepository());
  container.bind(BookService).toSelf();
}

import { DatabaseService } from "commom/services";
import { Repository } from "typeorm";
import { Book } from "./book.entity";

export class BookRepository extends Repository<Book> {
  constructor() {
    super(Book, DatabaseService.getDatasource().manager);
  }
}

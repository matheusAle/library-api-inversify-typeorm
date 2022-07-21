import { DatabaseService } from "commom/services";
import { Repository } from "typeorm";
import { Author } from "./author.entity";

export class AuthorRepository extends Repository<Author> {
  constructor() {
    super(Author, DatabaseService.getDatasource().manager);
  }

  getBooks() {
    return [];
  }
}

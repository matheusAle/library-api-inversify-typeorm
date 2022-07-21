import {
  controller,
  httpGet,
  httpPost,
  requestBody,
} from "inversify-express-utils";
import { BookService } from "domain/book/book.service";
import { BookCreatePayload } from "domain/book/types";

@controller("/books")
export class BookController {
  constructor(private bookservice: BookService) {}

  @httpGet("/")
  getAll() {
    return this.bookservice.getAll();
  }

  @httpPost("/")
  createBook(@requestBody() body: BookCreatePayload) {
    return this.bookservice.createBook(body);
  }
}

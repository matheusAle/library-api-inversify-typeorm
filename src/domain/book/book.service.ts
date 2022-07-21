import { injectable } from "inversify";
import { AuthorService } from "domain/author";
import { Book } from "./book.entity";
import { BookRepository } from "./book.repository";
import { BookCreatePayload } from "./types";

@injectable()
export class BookService {
  constructor(
    private bookRepo: BookRepository,
    private authorService: AuthorService
  ) {}

  getAll(): Promise<Book[]> {
    return this.bookRepo.find({
      relations: ["author"],
    });
  }

  async createBook({ authorId, ...data }: BookCreatePayload): Promise<Book> {
    const author = await this.authorService.getById(authorId);
    if (!author) throw new Error("Author not found");

    const book = new Book();
    book.ISBM = data.ISBM;
    book.title = data.title;
    book.author = author;

    await this.bookRepo.save(book);
    return book;
  }
}

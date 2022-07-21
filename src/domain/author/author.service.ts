import { injectable } from "inversify";
import { Author } from "./author.entity";
import { AuthorRepository } from "./author.repository";
import { AuthorRegisterPayload } from "./types";

@injectable()
export class AuthorService {
  constructor(private authorRepo: AuthorRepository) {}

  getAll(): Promise<Author[]> {
    return this.authorRepo.find();
  }

  getById(id: number): Promise<Author> {
    return this.authorRepo.findOneBy({ id });
  }

  async registerAuthor(data: AuthorRegisterPayload): Promise<Author> {
    const author = new Author();
    author.email = data.email;
    author.name = data.name;
    author.bio = data.bio;

    await this.authorRepo.save(author);

    return author;
  }
}

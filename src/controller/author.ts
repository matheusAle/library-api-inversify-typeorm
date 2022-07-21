import {
  controller,
  httpGet,
  httpPost,
  requestBody,
} from "inversify-express-utils";
import { AuthorRegisterPayload, AuthorService } from "domain/author";

@controller("/authors")
export class AuthorController {
  constructor(private authorService: AuthorService) {}

  @httpGet("/")
  listAll() {
    return this.authorService.getAll();
  }

  @httpPost("/")
  registerAuthor(@requestBody() body: AuthorRegisterPayload) {
    return this.authorService.registerAuthor(body);
  }
}

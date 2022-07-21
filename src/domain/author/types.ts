import { Author } from "./author.entity";

export type AuthorRegisterPayload = Pick<Author, "email" | "name" | "bio">;

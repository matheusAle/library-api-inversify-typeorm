import { Book } from "./book.entity";

export type BookCreatePayload = Omit<Book, "author"> & { authorId: number };

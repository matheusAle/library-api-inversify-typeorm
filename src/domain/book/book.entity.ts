import { Author } from "domain/author";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Book {
  @PrimaryColumn({ unique: true })
  ISBM: string;

  @Column()
  title: string;

  @OneToOne(() => Author)
  @JoinColumn()
  author: Author;
}

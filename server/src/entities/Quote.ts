import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity('quotes')
export class Quotes {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("text")
  text!: string;

  @Column({ nullable: true })
  author?: string;

  @Column({ name: "book_title", nullable: true })
  bookTitle?: string;

  @Column({ default: 0 })
  likes!: number;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;
}


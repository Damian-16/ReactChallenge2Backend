import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SearchResult {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  img: string;

  @Column()
  species: string;

  @Column()
  origin: string;

  @Column()
  gender: string;
}

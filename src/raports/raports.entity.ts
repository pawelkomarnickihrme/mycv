import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Raport {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  price: string;
}

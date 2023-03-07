import { v4 as uuidV4 } from "uuid";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";

import { Category } from "./Category";
import { Specification } from "./Specification";

@Entity("cars")
class Car {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  daily_rate: number;

  @Column()
  available: boolean;

  @Column()
  license_plate: string;

  @Column()
  fine_amount: number;

  @Column()
  brand: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: "category_id" })
  category: Category;

  @Column()
  category_id: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToMany(() => Specification)
  @JoinTable({
    name: "specifications_cars",
    joinColumns: [{ name: "car_id" }],
    inverseJoinColumns: [{ name: "specification_id" }],
  })
  specifications: Specification[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Car };
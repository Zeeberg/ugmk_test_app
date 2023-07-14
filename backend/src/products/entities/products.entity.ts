import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { EntityHelper } from "src/utils/entity-helper";
import { Factory } from "../../factory/entities/factory.entity";

@Entity()
export class Products extends EntityHelper {
  @PrimaryColumn()
  id: number;

  @ManyToOne(() => Factory, {
    eager: true,
  })
  factory: Factory;

  @Column({ nullable: true })
  date: Date;

  @Column({ nullable: true })
  product1?: number;

  @Column({ nullable: true })
  product2?: number;

  @Column({ nullable: true })
  product3?: number;

  constructor(product: {
    id: string;
    factory: Factory;
    date: Date | null;
    product1: number;
    product2: number;
    product3: number;
  }) {
    super();
    Object.assign(this, product);
  }
}

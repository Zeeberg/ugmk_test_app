import { Column, Entity, PrimaryColumn } from 'typeorm';
import { EntityHelper } from 'src/utils/entity-helper';

@Entity()
export class Factory extends EntityHelper {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;
}

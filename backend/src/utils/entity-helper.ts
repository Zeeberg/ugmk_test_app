import { instanceToPlain } from "class-transformer";
import { AfterLoad, BaseEntity } from "typeorm";

export class EntityHelper extends BaseEntity {
  toJSON() {
    return instanceToPlain(this);
  }
}

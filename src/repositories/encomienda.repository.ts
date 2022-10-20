import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Encomienda, EncomiendaRelations} from '../models';

export class EncomiendaRepository extends DefaultCrudRepository<
  Encomienda,
  typeof Encomienda.prototype.id,
  EncomiendaRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Encomienda, dataSource);
  }
}

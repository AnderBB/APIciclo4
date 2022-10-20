import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Servicios, ServiciosRelations} from '../models';

export class ServiciosRepository extends DefaultCrudRepository<
  Servicios,
  typeof Servicios.prototype.id,
  ServiciosRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Servicios, dataSource);
  }
}

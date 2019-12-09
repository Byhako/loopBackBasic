import {DefaultCrudRepository} from '@loopback/repository';
import {People, PeopleRelations} from '../models';
import {DatabaseDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PeopleRepository extends DefaultCrudRepository<
  People,
  typeof People.prototype.id,
  PeopleRelations
> {
  constructor(
    @inject('datasources.database') dataSource: DatabaseDataSource,
  ) {
    super(People, dataSource);
  }
}

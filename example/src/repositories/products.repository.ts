import {DefaultCrudRepository} from '@loopback/repository';
import {Products, ProductsRelations} from '../models';
import {ProductsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProductsRepository extends DefaultCrudRepository<
  Products,
  typeof Products.prototype.id,
  ProductsRelations
> {
  constructor(
    @inject('datasources.products') dataSource: ProductsDataSource,
  ) {
    super(Products, dataSource);
  }
}

import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './data-helo.datasource.json';

export class DataHeloDataSource extends juggler.DataSource {
  static dataSourceName = 'dataHelo';

  constructor(
    @inject('datasources.config.dataHelo', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}

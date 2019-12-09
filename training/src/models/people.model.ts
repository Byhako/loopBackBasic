import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class People extends Entity {
  @property({
    type: 'string',
    required: true,
    default: 'noName',
  })
  name: string;

  @property({
    type: 'string',
    required: true,
    default: 'noName',
  })
  surname: string;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  age: number;

  @property({
    type: 'number',
    id: true,
  })
  id?: number;


  constructor(data?: Partial<People>) {
    super(data);
  }
}

export interface PeopleRelations {
  // describe navigational properties here
}

export type PeopleWithRelations = People & PeopleRelations;

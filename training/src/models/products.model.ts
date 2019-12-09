import {Entity, model, property} from '@loopback/repository';

@model()
export class Products extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  price: number;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;


  constructor(data?: Partial<Products>) {
    super(data);
  }
}

export interface ProductsRelations {
  // describe navigational properties here
}

export type ProductsWithRelations = Products & ProductsRelations;

import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {People} from '../models';
import {PeopleRepository} from '../repositories';

export class PeopleController {
  constructor(
    @repository(PeopleRepository)
    public peopleRepository : PeopleRepository,
  ) {}

  @post('/people', {
    responses: {
      '200': {
        description: 'People model instance',
        content: {'application/json': {schema: getModelSchemaRef(People)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(People, {exclude: ['id']}),
        },
      },
    })
    people: Omit<People, ''>,
  ): Promise<People> {
    return this.peopleRepository.create(people);
  }

  @get('/people/count', {
    responses: {
      '200': {
        description: 'People model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(People)) where?: Where<People>,
  ): Promise<Count> {
    return this.peopleRepository.count(where);
  }

  @get('/people', {
    responses: {
      '200': {
        description: 'Array of People model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(People)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(People)) filter?: Filter<People>,
  ): Promise<People[]> {
    return this.peopleRepository.find(filter);
  }

  @patch('/people', {
    responses: {
      '200': {
        description: 'People PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(People, {partial: true}),
        },
      },
    })
    people: People,
    @param.query.object('where', getWhereSchemaFor(People)) where?: Where<People>,
  ): Promise<Count> {
    return this.peopleRepository.updateAll(people, where);
  }

  @get('/people/{id}', {
    responses: {
      '200': {
        description: 'People model instance',
        content: {'application/json': {schema: getModelSchemaRef(People)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<People> {
    return this.peopleRepository.findById(id);
  }

  @patch('/people/{id}', {
    responses: {
      '204': {
        description: 'People PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(People, {partial: true}),
        },
      },
    })
    people: People,
  ): Promise<void> {
    await this.peopleRepository.updateById(id, people);
  }

  @put('/people/{id}', {
    responses: {
      '204': {
        description: 'People PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() people: People,
  ): Promise<void> {
    await this.peopleRepository.replaceById(id, people);
  }

  @del('/people/{id}', {
    responses: {
      '204': {
        description: 'People DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.peopleRepository.deleteById(id);
  }
}

// import {inject} from '@loopback/context';
import { get } from '@loopback/rest'

export class HelloController {
  @get('/hello')
  hello(): string {
    return 'Hola Selene';
  }
}

import { Injectable } from '@nestjs/common';
import {InjectConnection} from '@nestjs/mongoose'
import { Connection } from 'mongoose';

@Injectable()
export class AppService {
  constructor(@InjectConnection() private readonly connection: Connection){}
  checkStatus():boolean{
    const isConnected : boolean = this.connection.readyState === 1
    return isConnected
  }
}

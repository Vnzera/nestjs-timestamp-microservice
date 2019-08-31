import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(date: string): string {
    return date;
  }
}

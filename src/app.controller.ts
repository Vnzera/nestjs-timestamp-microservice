import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('timestamp')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getTimeNow() {
    return new Date();
  }

  @Get('/:DATE_STRING')
  getHello(@Param('DATE_STRING') DATE_STRING: string) {
    // new Date returns a date object which contains a number
    const timestamp = new Date(DATE_STRING);

    // valueOf() will return a number if DATE_STRING was parsed by new Date()
    // isNaN will return true if the parameter is not a number
    const valid = !isNaN(timestamp.valueOf());

    // if date is invalid then return an error message
    if (!valid) {
      return { error: 'Invalid Date' };
    }

    return timestamp;

  }

}

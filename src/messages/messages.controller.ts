import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'Hello';
  }

  @Post()
  storeMessages(@Body() body: CreateMessageDto) {
    console.log(body);
    return 'Hello Post';
  }

  @Get('/:id')
  showMessage(@Param('id') id: string) {
    console.log(id);
    return `Hello ${id}`;
  }
}

import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable() //Tell Nest that register this class in the DI Container
export class MessagesService {
  // Inversion of control
  constructor(public messagesRepo: MessagesRepository) {}

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }
  findAll() {
    return this.messagesRepo.findAll();
  }
  create(content: string) {
    return this.messagesRepo.create(content);
  }
}

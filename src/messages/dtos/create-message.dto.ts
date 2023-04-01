import { IsString } from 'class-validator'; //Extra package
// We need class-transformer package to turn the body into an instance od the DTO
export class CreateMessageDto {
  @IsString() // validation
  content: string;
}

import { ApiProperty } from "@nestjs/swagger";

export class NewsDto {
  @ApiProperty({example: 'Минск на фото из БССР и девяностых...', description: 'Описание новсти.'})
  readonly title: string;
  @ApiProperty({example: 'Беларусь', description: 'Страна связанная с новостью'})
  readonly country: string;
  @ApiProperty({example: 'https:/news-example.com', description: 'Ссылка на первоисточник.'})
  readonly link: string;
}
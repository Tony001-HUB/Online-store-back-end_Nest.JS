import { ApiProperty } from "@nestjs/swagger";

export class PostDto {
    @ApiProperty({example: 'Этот пост о природе...', description: ''})
    readonly title: string;
    @ApiProperty({example: 'Сегодня в Логойском лесу особенно красиво...', description: ''})
    readonly content: string;
    @ApiProperty({example: 'example.jpg', description: ''})
    readonly image: string;
    @ApiProperty({example: '1', description: ''})
    readonly userId: number;
}
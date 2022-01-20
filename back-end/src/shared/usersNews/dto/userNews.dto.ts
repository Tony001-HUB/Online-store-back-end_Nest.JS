import { ApiProperty } from "@nestjs/swagger";

export class UsersNewsDto { 
    @ApiProperty({example: 'aasipenka@demo.com', description: 'Email of users'}) 
    readonly email: string; 
    @ApiProperty({example: '1', description: 'Id of news'}) 
    readonly newsId: number;
    @ApiProperty({example: '2', description: 'Id of user'})
    readonly userId: number;
}
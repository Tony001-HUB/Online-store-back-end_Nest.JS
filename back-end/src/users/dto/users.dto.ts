import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
    @ApiProperty({example: 'Anton', description: 'User name'})
    readonly name: string;
    @ApiProperty({example: 'Asipenka', description: 'User second name'})
    readonly secondName: string;
    @ApiProperty({example: 'user@gmail.com', description: 'User e-mail'})
    readonly email: string;
    @ApiProperty({example: 'QWERTY12345', description: 'User password'})
    readonly password: string;
}
import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PostDto } from './dto/post.dto';
import { PostsService } from './posts.service';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService) {}

    @ApiOperation({summary: 'Post creation'})
    @ApiResponse({status: 200, type: PostDto})
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createPost(@Body() dto: PostDto, @UploadedFile() image) {
       return this.postsService.createPost(dto, image);
    }

}

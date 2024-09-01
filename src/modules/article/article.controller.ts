import { Bind, Body, Controller, Delete, FileTypeValidator, Get, MaxFileSizeValidator, Param, ParseFilePipe, ParseFilePipeBuilder, Patch, Post, Req, UploadedFile, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { ArticleService } from './article.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from 'src/core/guard/auth.guard';

@Controller('article')
@UseGuards(AuthGuard)
export class ArticleController {
  constructor(private readonly _articleService: ArticleService) {}


  @Get()
  getArticle() {
    return this._articleService.getAllArticle();
  }
  @Get(':id')
  getArticleById(@Param() id: any) {
    return this._articleService.getArticleById(id);
  }
  @Post()
  // @UseInterceptors(FileInterceptor('file'))
  @UseInterceptors(FilesInterceptor('files', 10))
  addArticle(@Body() body: any ,@UploadedFiles() files: Array<Express.Multer.File>,@Req() req:any)
  {
    console.log(files);
    console.log(req['userId']);
    body['author']=req['userId']
    return this._articleService.addNewArticle(body,files);
  }

  @Delete(':id')
  deleteArticle(@Param('id') id: any) {
    return this._articleService.deleteArticle(id);
  }


}

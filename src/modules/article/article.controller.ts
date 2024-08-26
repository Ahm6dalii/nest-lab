import { Bind, Body, Controller, Delete, FileTypeValidator, Get, MaxFileSizeValidator, Param, ParseFilePipe, ParseFilePipeBuilder, Patch, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ArticleService } from './article.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

@Controller('article')
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
  addArticle(@Body() body: any ,@UploadedFiles() files: Array<Express.Multer.File>){
    console.log(files);
    return this._articleService.addNewArticle(body,files);
  }

  @Delete(':id')
  deleteArticle(@Param('id') id: any) {
    return this._articleService.deleteArticle(id);
  }


}

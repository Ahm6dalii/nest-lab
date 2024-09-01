import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { Article, articleSchema } from 'src/core/schema/article.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Tag, tagSchema } from 'src/core/schema/tags.schema';
import { User, userSchema } from 'src/core/schema/users.schema';
import { MulterModule } from '@nestjs/platform-express';
import { extname } from 'path';
import * as multer from 'multer';
import { JwtService } from '@nestjs/jwt';
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './upload');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + extname(file.originalname));
  },
});

@Module({
  imports: [ MulterModule.register({
   storage
  }),MongooseModule.forFeature([{ name: Article.name, schema: articleSchema }, { name: Tag.name, schema: tagSchema },{ name: User.name, schema:userSchema }])],
  controllers: [ArticleController],
  providers: [ArticleService,JwtService],
})
export class ArticleModule {}

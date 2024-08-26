import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { Article, articleSchema } from 'src/core/schema/article.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Tag, tagSchema } from 'src/core/schema/tags.schema';
import { User, userSchema } from 'src/core/schema/users.schema';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [ MulterModule.register({
    dest: './upload',
  }),MongooseModule.forFeature([{ name: Article.name, schema: articleSchema }, { name: Tag.name, schema: tagSchema },{ name: User.name, schema:userSchema }])],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}

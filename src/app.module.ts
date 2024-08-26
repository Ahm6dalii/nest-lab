import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagsModule } from './modules/tags/tags.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SignUpModule } from './modules/auth/sign-up/sign-up.module';
import { SignInModule } from './modules/auth/sign-in/sign-in.module';
import { ArticleModule } from './modules/article/article.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [ MulterModule.register({
    dest: './src/uploads', // Specify the destination folder
  }),SignInModule,ArticleModule ,SignUpModule,TagsModule,MongooseModule.forRoot("mongodb+srv://ahmedalielian20:qgs5Psws6FANCrPU@nest-app.rgmb0.mongodb.net/nest?retryWrites=true&w=majority&appName=nest-app")],
controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

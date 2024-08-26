import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Tag, tagSchema } from 'src/core/schema/tags.schema';
import { User, userSchema } from 'src/core/schema/users.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Tag.name, schema: tagSchema },{ name: User.name, schema:userSchema }])],
  controllers: [TagsController],
  providers: [TagsService]
})
export class TagsModule {}

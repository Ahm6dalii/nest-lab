import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { tagsDTO } from 'src/modules/tags/dto/tags.dto';
import { TagsService } from './tags.service';
@Controller('tags')
export class TagsController {
  constructor(private _tagsService: TagsService) {}

  @Get()
  getTags() {
    return this._tagsService.getAllTags();
  }
  @Get(':id')
  getTagsById(@Param() id: any) {
    return this._tagsService.getTagsById(id);
  }

  @Post()
  addTags(@Body() body: tagsDTO) {
    return this._tagsService.addNewTag(body);
  }

  @Delete(':id')
  deleteTags(@Param('id') id: any) {
    return this._tagsService.deleteTags(id);
  }

  @Patch(':id')
  updateTags(@Body() body: tagsDTO, @Param('id') id: any) {
    return this._tagsService.updateTags(body, id);
  }
}

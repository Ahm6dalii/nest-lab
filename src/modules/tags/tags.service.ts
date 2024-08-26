import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tag } from 'src/core/schema/tags.schema';
import { TagsModule } from './tags.module';
import { User } from 'src/core/schema/users.schema';

@Injectable()
export class TagsService {
    constructor(@InjectModel(Tag.name) private tagModel: Model<Tag>,@InjectModel(User.name) private userModel: Model<User>) {}

async getAllTags() {
return {tags: await this.tagModel.find()}
}
 
async getTagsById({id}){
    console.log(id);
    const founded=await  this.tagModel.findById(id).populate('createdBy','name email')
    if(!founded)return "not found tags"
return founded
}

async addNewTag(body){
let user=this.userModel.findById(body.id)  
if(!user) return'not user'
let tag=await this.tagModel.insertMany({title:body.title,createdBy:body.id})
return{message:'added',tags:tag}
}
 async deleteTags(id){
    let tag=await this.tagModel.findOneAndDelete(id)
    if(!tag) return {message:'tag not exist'}
    return{message:"deleted Successfuly",tags:tag}

}
async updateTags(body,id){ 
let tag =await this.tagModel.findByIdAndUpdate(id,body,{new:true})
if(!tag) return {message:'tag not exist'}
return {message:"message Updated succesfully",tag:tag};
}

}

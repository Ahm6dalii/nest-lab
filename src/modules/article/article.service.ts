import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article } from 'src/core/schema/article.schema';
import { Tag } from 'src/core/schema/tags.schema';
import { User } from 'src/core/schema/users.schema';

@Injectable()
export class ArticleService {
constructor(@InjectModel(Article.name) private aritcleModel:Model<Article>,@InjectModel(Tag.name) private tagModel: Model<Tag>,@InjectModel(User.name) private userModel: Model<User>)
{}

async getAllArticle() {
    return {Article: await this.aritcleModel.find()}
    }
     
async getArticleById({id}){
    console.log(id);
     const founded= await  this.aritcleModel.findById(id).populate('author tags','name email title -_id')
    if(!founded)return "not found Article"
    return founded
    }
    
    async addNewArticle(body,files){
        // console.log(file);
        
        const {author,...aricleData}=body
        // console.log(aricleData);
        
    let user=await this.userModel.findById(author)  
    if(!user) return'not user'
        const imgPath=files.map(ele=>ele.filename)
    let article=await this.aritcleModel.insertMany({...aricleData,images:imgPath,author:user._id})
    // let article=await this.aritcleModel.insertMany({...aricleData,coverImg:file.originalname,author:user._id})
    return{message:'added',Article:article}
    }

     async deleteArticle(id){
        let article=await this.aritcleModel.findByIdAndDelete(id)
        if(!article) return {message:'article not exist'}
        return{message:"deleted Successfuly",article:article}
    
    }
    async updateArticle(body,id){ 
    let article =await this.aritcleModel.findByIdAndUpdate(id,body,{new:true})
    if(!article) return {message:'article not exist'}
    return {message:"message Updated succesfully",article:article};
    }

}

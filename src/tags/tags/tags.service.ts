import { Injectable } from '@nestjs/common';

@Injectable()
export class TagsService {
tags=[
    {   id:1,
        name:'my first',
        title:'hellow first'
    },
    {   id:2,
        name:'my second',
        title:'hellow second'
    }
]
getAllTags(){
return {tags:this.tags}
}
getTagsById({id}){
    console.log(id);
    const founded=this.tags.find(ele=>ele.id==id)
    if(!founded)return "not found tags"
return founded
}
addNewTag(body){
body.id=this.tags[this.tags.length-1].id+1
this.tags.push(body)
return{message:'added',tags:this.tags}
}
deleteTags(id){
    this.tags=this.tags.filter(ele=>ele.id!=id)
    
    return{message:"deleted Successfuly",tags:this.tags}

}
updateTags(body,id){ 
   const tagIndex = this.tags.findIndex(ele => ele.id == id);
        if (tagIndex === -1) return "Tag not found";
    this.tags[tagIndex] = { ...this.tags[tagIndex], ...body };
        return {message:"message Updated succesfully",tag:this.tags[tagIndex]};
}

}

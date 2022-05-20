const postModel = require('../../models/postModel.js');
const jimp = require('jimp');


class postController{
    async addPost(req,res){
        const {uid,video,description,user,timestamp,email,profile,name} = req.body;
        // console.log(req.file);
        // const image = await jimp.read(req.file.path);
        // image.resize(250, jimp.AUTO);
        // image.write(req.file.path);
        const post = await postModel.create({uid,video,description,user,timestamp,email,profile,name});
        return res.status(200).json(post);
        // res.send(post);
    }

    async getPost(req,res){
        const post = await postModel.find({});
        return res.status(200).json(post);
    }

    async addLike(req,res){
        const {postId,uid,email,name,profile} = req.body;
        const getPost=await postModel.find({_id:postId});
        for(let i=0; i<getPost[0].likes.length; i++){

            if(getPost[0].likes[i].uid===uid){
                return res.status(400).json({message:"User already liked this post"});
            }
        }
        const post = await postModel.findOneAndUpdate({_id:postId},{$push:{likes:{uid,email,name,profile}}});
        return res.status(200).json(post);
    }
}

module.exports = new postController();
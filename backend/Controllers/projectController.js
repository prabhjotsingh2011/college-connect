
const projectModel=require('../models/projectModel.js');
const jimp = require('jimp');
class projectController{
    async addProjectPic(req,res){
        try {
            const {uid,description,projectName,owner,tags}=JSON.parse(req.body.jsonfile);
            const image=req.file.path
            // console.log(uid,description,projectName,owner,tags)
            const project = await projectModel.create({uid:uid,image,description:description,projectName:projectName,owner:owner,tags:tags});
            return res.status(200).json(project);
        } catch (error) {
            return res.status(500).json({message:"error in uploading project pic"});
        }
    }

    async getProjects(req,res){
        try {
            const project = await projectModel.find({});
            return res.status(200).json(project);
        } catch (error) {
            return res.status(500).json({message:"error in getting project"});
        }
    }
    

    
}

module.exports=new projectController();


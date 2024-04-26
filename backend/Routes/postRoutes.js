const express = require ('express');
const router = express.Router();
const post = require('../Model/post');

router.use(express.json());

//add
router.post('/addblog',async(req,res)=>{
    const blog = req.body;
    try{
        const data = await post(blog).save();
        res.status(200).json({message:"Blog added",blog}) 
    } catch (error) {
        console.log(error)
        res.json({message:"Unble to add blog"})
    }
}),

router.get('/viewall',async(req,res)=>{
    try{
        const data= await post.find();
        res.status(200).json(data)
    } catch(error){
        console.log(error)
        res.json({message:"Unble to find blogs"})
    }
})
router.delete('/remove/:id',async(req,res)=>{
    const {id} = req.params;
    try{
        console.log(req.params.id)
        const data = await post.findByIdAndDelete(req.params.id)
        res.status(200).send({message:"Blog deleted",data})
    }catch (error) {
        res.status(404).send({message:"No blog found"});
    }
})

router.put('/edit/:id',async(req,res)=>{
    try{
        var userid = req.params.id;
        const data = await post.findByIdAndUpdate(userid,req.body);
        res.status(200).send({message:"Blog updated successfully",data})

    } catch (error){
        console.log(error)
        res.status(404).send({message:"No blog found"});

    }
})

module.exports=router;
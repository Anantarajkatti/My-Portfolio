const express = require('express');
const router = express.Router();

const{ IntroList ,AboutList,EducationList, ProjectsList,CoursesList, ContactList } =require('../models/portfolioModel');
const User= require("../models/userModel")
const mongoose = require("mongoose");

router.get('/get-portfolio-data',
    async(req,res)=>{
        try{
            const intros=await IntroList.find();
            const abouts= await AboutList.find();
            const educations= await EducationList.find();
            const projects= await ProjectsList.find();
            const courses= await CoursesList.find();
            const contacts= await ContactList.find();

            res.status(200).send(
                {
                    introRes:intros[0],
                    aboutRes:abouts[0],
                    educationRes:educations,
                    projectRes:projects,
                    courseRes:courses,
                    contactRes:contacts[0]
                }
            )

        }
        catch(error){
            res.status(200).send(error)
        }
    }
) 


router.post("/update-intro",async(req,res)=>{
    try {
        // const {_id, ...updateData}= req.body
        // console.log(updateData)
            console.log(IntroList)
        console.log('requestBody:---',req.body) 
        console.log('Request ID :---',req.body._id)

        const document = await IntroList.findOne({ _id:req.body._id });
         console.log("find Op:---", document)
       
            // if(document){
            //     Object.keys(req.body).forEach((key)=>{
            //         document[key]=req.body[key]
            //     })
            // }
            // const saveData= await document.save()
            // console.log("saved Data:----",saveData)
 
        const introRes = await IntroList.findOneAndUpdate(
            {_id : req.body._id },   
          req.body, 
            {new:true}
        );

       
        console.log('updated response:----',introRes)
        
   
        res.status(200).send(
            {
             data:introRes,
             success:true,
             message:"update Success"
            }
         )
    }
  
        
        
     catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
})

router.post("/update-about",async(req,res)=>{
    try {
        
            console.log(AboutList)
        console.log('requestBody:---',req.body) 
        console.log('Request ID :---',req.body._id)

        const document = await AboutList.findOne({ _id:req.body._id });
         console.log("find Op:---", document)
       
 
        const aboutRes = await AboutList.findOneAndUpdate(
            {_id : req.body._id },   
          req.body, 
            {new:true}
        );

       
        console.log('updated response:----',aboutRes)
        
   
        res.status(200).send(
            {
             data:aboutRes,
             success:true,
             message:"update Success"
            }
         )
    }
  
        
        
     catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
})


router.post('/add-project',async(req,res)=>{
    try {
        console.log('req body:--',req.body)
        const project= new ProjectsList(req.body)
        project.save()
        res.status(200).send(
            {
             data:project,
             success:true,
             message:"update Success"
            }
         )
        
    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
})

router.post("/update-project",async(req,res)=>{
    try {
        // const {_id, ...updateData}= req.body
        // console.log(updateData)
            console.log(ProjectsList)
        console.log('requestBody:---',req.body) 
        console.log(' this line executes')
        console.log('Request ID :---',req.body._id)


        const document = await ProjectsList.findOne({ _id:req.body._id });
         console.log("find Op:---", document)
       
            
 
        const projectRes = await ProjectsList.findOneAndUpdate(
            {_id : req.body._id },   
          req.body, 
            {new:true}
        );

       
        console.log('updated response:----',projectRes)
        
   
        res.status(200).send(
            {
             data:projectRes,
             success:true,
             message:"update Success"
            }
         )
    }
  
        
        
     catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
})

router.delete("/delete-project/:id",async(req,res)=>{
    try {
        const { id } = req.params; 
        // Extract project ID from the URL
    await ProjectsList.findByIdAndDelete(id); // Delete the project
        res.status(200).send(
            {
             success:true,
             message:"delete Success"
            }
         )
    }
        
    catch (error) {
        res.status(500).send(error)
        console.log(error) 
    }
}
)

router.post('/add-course',async(req,res)=>{
    try {
        console.log('req body:--',req.body)
        const course= new CoursesList(req.body)
        course.save()
        res.status(200).send(
            {
             data:course,
             success:true,
             message:"update Success"
            }
         )
        
    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
})

router.post("/update-course",async(req,res)=>{
    try {
        // const {_id, ...updateData}= req.body
        // console.log(updateData)
            console.log(CoursesList)
        console.log('requestBody:---',req.body) 
        console.log(' this line executes') 
        console.log('Request ID :---',req.body._id)    


        const document = await CoursesList.findOne({ _id:req.body._id });
         console.log("find Op:---", document)
       
            
 
        const courseRes = await CoursesList.findOneAndUpdate(
            {_id : req.body._id },   
          req.body, 
            {new:true}
        );

       
        console.log('updated response:----',courseRes)
        
   
        res.status(200).send(
            {
             data:courseRes,
             success:true,
             message:"update Success"
            }
         )
    }
  
        
        
     catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
})

router.delete("/delete-course/:id",async(req,res)=>{
    try {
        const { id } = req.params; 
        // Extract project ID from the URL
    await CoursesList.findByIdAndDelete(id); // Delete the project
        res.status(200).send(
            {
             success:true,
             message:"delete Success"
            }
         )
    }
    catch (error) {
        res.status(500).send(error)
        console.log(error) 
    }
}
)

router.post("/update-contact",async(req,res)=>{
    try {
        // const {_id, ...updateData}= req.body
        // console.log(updateData)
            console.log(ContactList)
        console.log('requestBody:---',req.body) 
        console.log('Request ID :---',req.body._id)

        const document = await ContactList.findOne({ _id:req.body._id });
         console.log("find Op:---", document)
       
          
        
       const contactRes = await ContactList.findOneAndUpdate(
            {_id : req.body._id },   
            req.body, 
            {new:true}  
        );

       
        console.log('updated response:----',contactRes)
        
   
        res.status(200).send(
            {
             data:contactRes,
             success:true,
             message:"update Success"
            }
         )
    }
  
        
        
     catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
}) 

router.post("/admin-login",async(req,res)=>{
    try {

        const user= await User.findOne({username:req.body.username,password:req.body.password})

        user.password=" " // to make invisible in token
        if(user){
            res.status(200).send({
                data:user,
                success:true,
                message:"Login Successful"
            })
        }
        else{
            res.status(200).send({
                data:user,
                success:false,
                message:"Invalid Username or password"
            })
        }
        
    } catch (error) {
        res.status(200).send(error)


    }
})





module.exports=router;   
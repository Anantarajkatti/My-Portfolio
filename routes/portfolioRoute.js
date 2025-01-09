const express = require('express');
const router = express.Router();

const{ IntroList ,AboutList,EducationList, ProjectsList,CoursesList, ContactList } =require('../models/portfolioModel');
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





module.exports=router;   
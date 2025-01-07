const express = require('express');
const router = express.Router();

const{ IntroList ,AboutList,EducationList, ProjectsList,CoursesList, ContactList } =require('../models/portfolioModel')

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

module.exports=router;  
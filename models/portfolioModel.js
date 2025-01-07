const mongoose=require('mongoose')

const introSchema= new mongoose.Schema({
    welcometext:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    caption:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true 
    }
});

const aboutSchema=new mongoose.Schema({
    lottieLink:{
        type:String,
        required:true
    },
    descriptionOne:{
        type:String,
        required:true
    },
    descriptionTwo:{
        type:String,
        required:true
    },
    skills:{
        type:Array,
        required:true
    }

});

const educationSchema= new mongoose.Schema({
    course:{
        type:String,
        required:true
    },
    specification:{
        type:String,
        required:true
    },
    organization:{
        type:String,
        required:true
    },
    score:{
        type:String,
        required:true
    }
})

const projectSchema= new mongoose.Schema({
    projectName:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },


});

const courseSchema= new mongoose.Schema({
    courseName:{
        type:String,
        required:true
    },
    skills:{
        type:Array,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    organization:{
        type:String,
        required:true
    }
});

const contactSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    nationality:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    }
});

module.exports={
    IntroList : mongoose.model("intros",introSchema) ,
    AboutList : mongoose.model("abouts",aboutSchema),
    EducationList: mongoose.model("educations",educationSchema),
    ProjectsList : mongoose.model("projects",projectSchema),
    CoursesList : mongoose.model("courses",courseSchema),
    ContactList : mongoose.model("contacts",contactSchema)
};
  

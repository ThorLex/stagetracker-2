 const Workout = require ('../models/modelcontrolleur')
 const model = require('../models/model')
 const axios =  require("axios")
const sendEmail = require("./sendEmail")
const forgot = require("./forgot")
const chat = require('./chat')
const User = require ('../models/usermodels')
const mongoose = require('mongoose')
const jwt =  require('jsonwebtoken')


const { GoogleGenerativeAI } = require("@google/generative-ai");
 



//creation d un jeton de securite
    const createToken = (_id) => {
       return  jwt.sign({_id},process.env.SECRET,{expiresIn:'1d'}) 
      };
// login





const sendMail = async (req, res) => {
  const { subject, message, send_to  } = req.body;

  try {


    const sent_from = "stagetrackers@gmail.com";
    const reply_to = "stagetrackers@gmail.com";
  

    const me = await sendEmail(subject, message, send_to);
   
    res.status(200).json({ success: true, message: "email envoyé" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}



const forgott = async (req, res) => {
  const {email,contenu,sujet} = req.body;

  try {

      const send_to = email;
    const sent_from = "stagetrackers@gmail.com";
    const reply_to = "stagetrackers@gmail.com";
    const subject = sujet;
    const message = contenu;

    const me = await forgot(subject, message, send_to, sent_from, reply_to);
   
    res.status(200).json({ success: true, message: "email envoyé" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}




const chatt = async (req, res) => {
  const {username,message } = req.body;

  try {
    const me = await model.Chat(username,message);
    const stagetracker = await model.find({}).sort({createdAt: 1})
    res.status(200).json({ success: true, stagetracker});
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

const chatget = async (req, res) => {
  try {
    // Récupérer les données à partir du modèle, triées par date de création
    const stagetracker = await model.find({}).sort({ createdAt: 1 });

    // Répondre avec un statut 200 et les données JSON
    res.status(200).json({ success: true, stagetracker });
  } catch (error) {
    // En cas d'erreur, répondre avec un statut d'erreur et un message d'erreur
    res.status(500).json({ success: false, error: error.message });
  }
};

const GenererRapport = async (req, res) => {
  const { GoogleGenerativeAI } = require("@google/generative-ai");
  const {valeur} = req.body;

  const genAI = new GoogleGenerativeAI('AIzaSyBkWg81DlrkQ6eof00mdGYkWdbuMrQ8EkU');

    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  
    const prompt = valeur+ "genere moi cela sous forme de fcher texte avce un maximun de mise en forme , le document doit etre affiché sur word";
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text()
    console.log(text);
    return  res.status(200).json({ success: true, text:text});


}


 

const loginUser =  async(req,res) => {

    const {email , password} = req.body 
    console.log(email , password)
    
try {
    const user = await User.login(email,password)
    // creation d un jeton de securite 
const  token  =  createToken(user._id)

    return  res.status(200).json({email,token})
} catch (error) {

  return   res.status(404).json({error: error.message})
}

 
   
}
  
// get all workouts
const getWorkouts = async (req, res) => {
   
    const stagetracker = await User.find({}).sort({createdAt: -1})
  
    res.status(200).json(stagetracker)
  }
  
  // get a single workout
  const getWorkout = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'pas de coincidence '})
    }
  
    const workout = await User.findById(id)
  
    if (!workout) {
      return res.status(404).json({error: 'pas de coincidence '})
    }
  
    res.status(200).json(workout)
  }
  
  // create a new workout
  const createWorkout = async (req, res) => {
   
    const {email, title, status, help,dure} = req.body 
    try {
      const workout = await Workout.create({email:email , task: {title:title, status:status, help:help, dure:dure} })
      res.status(200).json(workout)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }

  }
  
  // delete a workout
  const deleteWorkout = async (req, res) => {
  
  }
  
  // update a workout
  const updateWorkout = async (req, res) => {
     

  
  }



const signupUser =  async(req,res) => {

    
 const {username, email , password} = req.body 
try {
     const user = await User.signup(username, email,password)
const  token  =  createToken(user._id)
     return  res.status(200).json({email,token,user,username,role})
} catch (error) {
   return   res.status(404).json({erreur: error.message})
}

 }

 module.exports = { chatt, sendMail,signupUser, loginUser, getWorkouts,GenererRapport,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,forgott,chatget}
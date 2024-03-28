 const Workout = require ('../models/modelcontrolleur')
 const axios =  require("axios")

const User = require ('../models/usermodels')
const mongoose = require('mongoose')
const jwt =  require('jsonwebtoken')
const sendEmail = require("./sendEmail");
const rapport = require('./Rapport')


//creation d un jeton de securite
    const createToken = (_id) => {
       return  jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})
        
      };
// login





const sendMail = async (req, res) => {
  const { email,contenu,sujet } = req.body;

  try {
    const send_to = email;
    const sent_from = "stagetrackers@gmail.com";
    const reply_to = "beyasbekono@gmail.com";
    const subject = sujet;
    const message = `<!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <title>recuperation de mot de passe</title>
    </head>
    <body>
    <h1>Recupération de mot de passe </h1>
      <br/>

    <p>account controller est ma possition</p>
    
    </body>
    </html>`;

    const me = await sendEmail(subject, message, send_to, sent_from, reply_to);
   
    res.status(200).json({ success: true, message: "nous vous avons envoyé un nouveau mot de passe; consulter votre boite mail" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}



const GenererRapport = async (req, res) => {
  const apiKey = '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';
 
  const axios = require('axios');

  const client = axios.create({
      headers: { 'Authorization': 'Bearer ' + apiKey }
  });
  
  const params = {
    "prompt": "Once upon a time", 
    "max_tokens": 10
  }
  
  client.post('https://api.openai.com/v1/engines/davinci/completions', params)
    .then(result => {
      console.log(params.prompt + result.data.choices[0].text);
  }).catch(err => {
    console.log(err);
  });




  // try {
  //   const response = await axios.post(
  //     'https://api.openai.com/v1/engines/davinci-codex/completions',
      
  //     {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer${apiKey}`,
  //       },
  //     }
  //   );
  
  //   const moi =  res.json({ reply: response.data.choices[0].text });
  // } catch (error) {
  //   console.error(error);
  //   const moi =  res.status(500).json({ error: 'An error occurred' });
  //   return moi
  // }
 
  
}


 

const loginUser =  async(req,res) => {

    const {email , password} = req.body 
    
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

// sign up  only pour les particulier (entreprise en gerant avec  le rib )

const signupUser =  async(req,res) => {

    
 const {email , password} = req.body 
try {
     const user = await User.signup(email,password)
     // creation d un jeton de securite 
const  token  =  createToken(user._id)

     return  res.status(200).json({email,token,user})
} catch (error) {
 
   return   res.status(404).json({erreur: error.message})
}

 }

 module.exports = {  sendMail,signupUser, loginUser, getWorkouts,GenererRapport,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout}
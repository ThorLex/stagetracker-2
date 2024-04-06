const mongoose = require ('mongoose')
const bcrypt =  require ('bcrypt')
const validator  = require('validator');
const crypto = require('crypto');
const e = require('express');



const Schema = mongoose.Schema;
const userSchema = new Schema ({

    username: {
        type: String,
        required : true,
        unique : true
    },

    email: {
        type: String,
        required : true,
        unique : true
    },

    password: {
        type: String,
        required : true,
    }
},{ timestamps: true })

// methode statique de login 


// ici je creer ma propre methode singnup ou je verifie que l email n as pas ete pris  si c est bon je crerr l utilisateur avec un mot de passe encrypté


userSchema.statics.signup = async function(username,email, password) {

  // validation
  if (!email || !password) {
    throw Error('All fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email not valid')
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
  }

  const exists = await this.findOne({ email })

  if (exists) {
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({username, email, password: hash })

  return user
}









// static login method
userSchema.statics.login = async function(email,password) {

  if (!email || !password) {
    throw Error('All fields must be filled')
  }

  const user = await this.findOne({ email })
  if (!user) {
    throw Error('Incorrect email')
  }

 
  const password1 = password;
 
  
  const hashedPassword1 = password1
  const hashedPassword2 = await bcrypt.hash(password1, 10);
  
  const match = await bcrypt.compare(hashedPassword1, user.password);
  

  
  //const match = await bcrypt.compare(password,user.password)
  if (!match) {
    console.log(password, user.password,match)
    throw Error("Mot de passe incorrect")
  }


  
  return user
}




//creation

userSchema.statics.creation = async function (username,email, password)
{
// validation 

if (!email || !password || !username) {
    throw Error ('tous les champs doivent etre remplis ')
 } 
 
 //verifica(tion de l email avec validator
 
 if (!validator.isEmail(email))
 {
    throw Error (("l'email entrer n'est pas correct "))
 }

//verifica(tion du password avec validator
 
if (!validator.isStrongPassword(password))
{
   throw Error (("le mot de passe entrer n'est pas assez fort doit contenir au moins une majuscule  8 caracteres un chiffre et un symbole"))
}



// si l email est deja utilisé

 const exists = await this.findOne({email})
if (exists) {
    throw Error ("l'email a deja été utilisé")

}

 const salt  = await bcrypt.genSalt(10)
 const hash = await bcrypt.hash(password,salt )
  const user = await this.create({ username,email , password: hash})

  return user

}





//mot de passe perdu








// schema utilisateur  comme pour sign up 
userSchema.statics.updated = async function ( email)
{


 
 const user = await this.findOne({email})
if (!user) {
    throw Error ("cet utilisateur n'existe pas ")

}

//.............. generateur de mot de passe 
function generatePassword(length = 9) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";
  const bytes = crypto.randomBytes(length);
  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset[bytes[i] % charset.length];
  }
  return password;
}

// Exemple d'utilisation
const password = generatePassword();
 // Affiche un mot de passe généré aléatoirement de 16 caractères


 const pas = password
 const hashedPassword1 = password
 const hashedPassword2 = await bcrypt.hash(password, 10);

const jour= await this.updateOne({email: email},{$set : {password:hashedPassword2}}  );
if (!jour) {
    throw Error ("operation echoué ")
    

}

 return pas
}



module.exports = mongoose.model('User',userSchema)
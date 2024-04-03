 const apiKey = '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';
 
  const axios = require('axios');

// URL de l'API
const apiUrl = 'https://chat.openai.com/c/38f9f948-27cf-4777-8895-6e5d72199aac';

// Données de la requête
const requestData = {
  model: 'text-davinci-003', // Modèle à utiliser (par exemple, text-davinci-003 pour GPT-3.5)
  prompt: 'Quelle est la capitale de la France ?', // Exemple de prompt
  max_tokens: 50 // Nombre maximum de jetons à générer
};

// Configuration de la requête avec l'en-tête d'authentification
const config = {
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
  }
};

// Envoi de la requête
axios.post(apiUrl, requestData, config)
  .then(response => {
    console.log(response.data.choices[0].text); // Affichage de la réponse
  })
  .catch(error => {
    console.error('Erreur lors de la requête : ', error);
  });
  // try {
  //   const response = await axios.post(
  //     'https://api.openai.com/v1/engines/davinci-codex/completions',
      
  //     {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer${apiKey}`,
  //       },cls
  //     }
  //   );
  
  //   const moi =  res.json({ reply: response.data.choices[0].text });
  // } catch (error) {
  //   console.error(error);
  //   const moi =  res.status(500).json({ error: 'An error occurred' });
  //   return moi
  // }
 
  
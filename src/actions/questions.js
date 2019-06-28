export const startFetchQuestions = () => ({
  type: 'START_FETCH_QUESTIONS',
});
export const fetchSuccessQuestions = (question) => {
  console.log('fetch success')
  return {type: 'FETCH_SUCCESS_QUESTIONS',
  question}
  
};
export const fetchErrorQuestions = err => ({
  type: 'FETCH_ERROR_QUESTIONS',
  err,
});

export const asyncFetchQuestions = (route) => (dispatch) => {
  console.log('reducer fetch')
  dispatch(startFetchQuestions());
  fetch(`http://192.168.1.38:8000/api${route}`)
    .then(res => res.json())
    .then((question) => {
      dispatch(fetchSuccessQuestions(question));
    })
    .catch(() => {
      dispatch(fetchErrorQuestions('Erreur lors du chargement de la question'));
    });
};

/* ex d'api : 
{
    "@context": "/api/contexts/Question",
    "@id": "/api/questions/4",
    "@type": "Question",
    "id": 4,
    "directive": "Combien de recherches Google ai-je effectué aujourd'hui ?",
    "Reponse": [
        {
            "id": 13,
            "name": "- de 5 recherches",
            "co2Impact": 7,
            "correspondance": "ça reste acceptable",
            "question": "/api/questions/4"
        },
        {
            "id": 14,
            "name": "entre 5 et 10 recherche",
            "co2Impact": 70,
            "correspondance": "...",
            "question": "/api/questions/4"
        },
        {
            "id": 15,
            "name": "entre 10 et 20 recherches",
            "co2Impact": 140,
            "correspondance": "ah !",
            "question": "/api/questions/4"
        },
        {
            "id": 16,
            "name": "plus de 20 recherches",
            "co2Impact": 220,
            "correspondance": "...",
            "question": "/api/questions/4"
        }
    ],
    "Solution": {
        "id": 4,
        "name": "Limiter le nombre d'onglets ouverts, utiliser un moteur de recherche eco-friendly qui vous permettra de compenser votre émission de CO2",
        "description": "Ecosia, Lilo...",
        "__initializer__": null,
        "__cloner__": null,
        "__isInitialized__": true
    }
}

*/
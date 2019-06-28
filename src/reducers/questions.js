const initialState = {
  question: {
    "@context": "/api/contexts/Question",
    "@id": "/api/questions/1",
    "@type": "Question",
    "id": 1,
    "directive": "Combien d'emails ai-je envoyé aujourd'hui ?",
    "Reponse": [
        {
            "id": 1,
            "name": "- de 5 emails",
            "co2Impact": 2,
            "correspondance": "je sais pas pour le moment !",
            "question": "/api/questions/1"
        },
        {
            "id": 2,
            "name": "entre 5 et 10 emails",
            "co2Impact": 4,
            "correspondance": "à voir !",
            "question": "/api/questions/1"
        },
        {
            "id": 3,
            "name": "entre 10 et 20 emails",
            "co2Impact": 8,
            "correspondance": "ah",
            "question": "/api/questions/1"
        },
        {
            "id": 4,
            "name": "plus de 20 emails",
            "co2Impact": 10,
            "correspondance": "Pollueur !",
            "question": "/api/questions/1"
        }
    ],
    "Solution": {
        "id": 1,
        "name": "CleanFox",
        "description": "CleanFox est une solution",
        "__initializer__": null,
        "__cloner__": null,
        "__isInitialized__": true
    }
}
}

const questions = (state = initialState, action) => {
  switch (action.type) {
    case 'START_FETCH_QUESTIONS': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'FETCH_SUCCESS_QUESTIONS': {
      console.log('question action fetch')
      return {
        loading: false,
        question: action.questions,
        error: '',
      };
    }
    case 'FETCH_ERROR_QUESTIONS': {
      return {
        ...state,
        loading: false,
        error: action.err,
      };
    }
    default:
      return state;
  }
};

export default questions;
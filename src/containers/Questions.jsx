import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncFetchQuestions } from '../actions/questions'
import { bindActionCreators } from 'redux'

class Questions extends Component {
  componentDidMount() {
    const { route } = this.props
    asyncFetchQuestions(route)
  }
  
  render() {
    const { question, route } = this.props
    return (
      <div className="Quizz">
      {`route : ${route}`}
        <div className="question">
          
          {question.directive}
            {question.Reponse.map(reponse => <div key={reponse.id}>{reponse.name}</div>)}
        </div>
        <div className="compteur">
          {`Impact carbonne : 0 g CO2`}
        </div>
      </div>
    );
  }
}

const mstp = state => ({
  question: state.questions.question,
  route: state.router.route
})

const mdtp = dispatch => bindActionCreators({ asyncFetchQuestions }, dispatch);

export default connect(mstp, mdtp)(Questions);
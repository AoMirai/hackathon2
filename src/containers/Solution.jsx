import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom';
import { router } from '../actions/router'


function Solution ({question, router, route, count, countAction}) {
  const newRoute = route.slice(0, 11) + (parseInt(route.substring(11)) + 1)
  if (parseInt(route.substring(11)) === 4) {
    newRoute = 'resulta'
  }
  return (
    <div className="Solution">
      <div className="compteur">
          {`Impact carbonne : ${count} g CO2`}
      </div>
      <div className='impact'>
        {`Vous avez consommé pour cette action ${countAction}g de CO2`}
      </div>
      <div className='name'>
        {question.Solution.name}
      </div>
      <div className='description'>
        {question.Solution.description}
      </div>
      <Link to={newRoute} onClick={() => router(newRoute)}><button type="button" >Suivant</button></Link>      
    </div>
  )
}

const mapStateToProps = (state) => ({
  question: state.questions.question,
  route: state.router.route,
  count: state.counter.count, 
  countAction: state.counter.countAction,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  router,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Solution)
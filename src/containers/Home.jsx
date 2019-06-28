import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { router } from '../actions/router'

function Home({route}) {
  return (
    <div className="Home">
      {route}
      <div className="intro">
        "Internet, c'est plus écologique que le papier ou les CD", 
        c'est effectivement ce qu'on a l'habitude de penser, et logiquement, 
        ça pourrait être vrai, mais ce n'est pas forcément le cas. 
        Connaissez vous réelement l'impact écologique de vos actions sur internet ? 
        Testez votre consommation de CO2 journalier via un Quizz !
      </div>
      <Link to="/questions/4" onClick={() => router('/questions/4')}><button type="button" >Commencer</button></Link>
    </div>
  );
}

const mstp = state => ({
  route: state.router.route,
})

const mdtp = (dispatch) => bindActionCreators({
  router,
}, dispatch)

export default connect(mstp, mdtp)(Home);
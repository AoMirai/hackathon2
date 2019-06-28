import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { router } from '../actions/router';
import home from '../img-bandeau_1493826345.jpg';

function Home({route, router}) {
  return (
    <div className="Home">
      <div className="intro">
        "Internet, c'est plus écologique que le papier ou les CD",
        c'est effectivement ce qu'on a l'habitude de penser, et logiquement, 
        ça pourrait être vrai, mais ce n'est pas forcément le cas.
          <strong>Connaissez vous réelement l'impact écologique de vos actions sur internet ? </strong>
        Testez votre consommation de CO2 journalier via un Quizz !
      </div>
        <img src={ home } className="laptop" alt='laptop'/>
        <div>
        <Link to="/questions/4" onClick={() => router('/questions/4')}><button type="button" className="bouton" >Commencer</button></Link>
        </div>
      <div className="signature">
        © Kame no Do
      </div>
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
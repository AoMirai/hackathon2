import React, {Component} from 'react';
import {connect} from 'react-redux';
import {asyncFetchQuestions} from '../actions/questions'
import {router} from '../actions/router'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router-dom';
import {counter} from '../actions/counter'


class Questions extends Component {
    state = {
        carbone: '0',
    }

    componentDidMount() {
        const {route, asyncFetchQuestions} = this.props
        asyncFetchQuestions(route)
    }

    incrementCarbone = (carbone) => {
        this.setState({carbone: parseInt(carbone)})
    }

    render() {
        const {question, route, count, loading, error, counter} = this.props
        const {carbone} = this.state
        const newRoute = route + '/solution'
        return (
            <div className="Quizz">
                <div className="compteur">
                    {`Impact carbonne : ${count} g CO2`}
                </div>
                {error !== '' ? <div>{error}</div> : ''}
                <div className="question">
                    <div className="consigne">
                        {loading ? <div>Chargement en cours...</div> : question.directive}
                    </div>
                </div>
                <div className="consigne">
                    {'Sélectionner votre réponse :'}
                </div>
                <ul className="choix">
                    {loading ? '' : question.Reponse.map
                    (reponse =>
                        <li
                            key={reponse.id}
                            onClick={() => this.incrementCarbone(reponse.co2Impact)}
                            className={carbone === reponse.co2Impact ? "coche reponse" : 'reponse'}
                        >
                            {reponse.name}
                        </li>
                    )
                    }
                </ul>


                <Link to={newRoute} onClick={() => counter(parseInt(carbone))}>
                    <button type="button" className="bouton">Valider</button>
                </Link>
                <div className="signature">
                    © Kame no Do
                </div>
            </div>
        )
            ;
    }
}

const mstp = state => ({
    loading: state.questions.loading,
    error: state.questions.error,
    question: state.questions.question,
    route: state.router.route,
    count: state.counter.count
})

const mdtp = dispatch => bindActionCreators({asyncFetchQuestions, counter}, dispatch);

export default connect(mstp, mdtp)(Questions);
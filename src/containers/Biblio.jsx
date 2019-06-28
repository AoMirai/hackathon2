import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {router} from "../actions/router";

function Biblio({route}) {
    return (
        <div className="Biblio">
            <div className="intro">
                Bravo, vous avez ouvert le coffre au trésor !
                Vous pouvez maintenant consulter des ressources qui vous aideront à diminuer votre impact CO2 lié au
                numérique !
                Et n'oubliez pas, il y a plein d'autres gestes à effecter au quotidien pour diminuer votre impact de
                façon plus globale !
            </div>

            <div>
                <div>
                    En général :
                </div>
                <div>
                    <a href="https://www.ademe.fr/sites/default/files/assets/documents/guide-pratique-face-cachee-numerique.pdf">
                        Les préconisations de l'ADEME (Agence de l'Environnement et de la maîtrise d'énergie)</a>
                </div>

                <div>
                    L'impact de l'envoi de vos emails:
                </div>
                <div>
                    <a href='https://www.numvision.com/limpact-environnemental-e-mails-de-lenvoi-de-fichiers-lourds/'>
                        La face cachée du numérique</a>
                </div>
                <div>
                    <a href='https://www.greenit.fr/2018/09/11/reduire-limpact-de-e-mails/'>
                       Agir efficacement</a>
                </div>

            </div>


        </div>
    );
}

const mstp = state => ({
    route: state.router.route,
})

export default connect(mstp)(Biblio);
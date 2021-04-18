import React from "react";
import "./user_management.scss";
import 'react-responsive-modal/styles.css';
import Toolbar1 from '.././Components/Toolbar/Toolbar1'
class aboutUs extends React.Component {

    render() {
        return (
            <div className='aboutUsPage'>
                <Toolbar1 />
                <hr />
                <div className='topSection container flex-wrap d-flex'>
                    <div className='campaignDetails col-sm-6'>
                        <h3>Campaign Name</h3>
                        <h5>Your campaign is being processed. We will start delivering
                            the first lead within the next 24 hours</h5>
                        <div className='d-flex py-3 flex-wrap'>
                            <div class="form-group pr-3">
                                <input maxlength="100" type="date" required="required"
                                    class="form-control" placeholder="START DATE" />
                            </div>
                            <div class="form-group">
                                <input maxlength="100" type="date" required="required"
                                    class="form-control" placeholder="START DATE" />
                            </div>
                        </div>
                    </div>
                    <div className='pauseComponent col-sm-6'>
                        <img class='pr-4' src='img/pauseicon.png' />
                        <div>
                            <h5>Pause Campaign</h5>
                        </div>
                    </div>
                </div>
                <div class='graphSection container'>
                    <img class='w-100 py-3' src='img/firstGraph.png' />
                    <img class='w-100 py-3' src='img/secondGraph.png' />
                    <img class='w-100 py-3' src='img/thirdGraph.png' />
                </div>
            </div>
        );
    }
}

export default aboutUs;

import React, { Component } from 'react';
import '../css/dev_desai.less';

class DevDesai extends Component {
    render() {
        return (
            <div className="col-md-12 col-xs-12 col-sm-12 MainContainer noPadding ">
                <div className="col-md-12 col-xs-12 col-sm-12 devdesai white noPadding">
                    <div className="col-md-12 col-xs-12 col-sm-12 trainer3 white">
                        <div className="col-md-6 col-md-offset-5 col-sm-6 col-sm-offset-6 marginTop-200" >
                            <h3 className="textSize red"><b>DEV DESAI</b></h3>
                            <p style={{
                                fontSize: "20px",
                                fontWeight: " 800", fontFamily: "Raleway"
                            }}>Director & Partner</p>
                            <p className="pText" style={{ fontSize: "16px", fontFamily: "Raleway" }}>A youth driven by passion for fitness.
                                        A Certified Fitness and Nutrition expert and with 18 Gold medal Gujarat State Championships in PowerLifting and State Bench Press Record Holder (155kg) . Keen to enhance Internal Health Factors along with Body Transformation programs.
                                        Believes,Anybody can achieve the body he/she want only if determined and dedicated.</p>
                            <div className="col-md-12 col-sm-12 noPadding" style={{ marginTop: "13px", fontFamily: "Raleway" }}>
                                <div className="col-md-12 col-sm-12 flex-box noPadding">
                                    <img src="../assets/images/Star.svg" alt="not find" />
                                    <div className="yellow" style={{ marginLeft: "10px", lineHeight: "3rem", fontSize: "15px" }}><i>FITNESS COUNSELLOR</i></div>
                                </div>
                                <div className="col-md-12 col-sm-12 flex-box noPadding">
                                    <img src="../assets/images/Star.svg" alt="not find" />
                                    <div className="yellow" style={{ marginLeft: "10px", lineHeight: "3rem", fontSize: "15px" }}><i>MACRO NUTRIENT EXPERT</i> </div>
                                </div>
                                <div className="col-md-12 col-sm-12 flex-box noPadding">
                                    <img src="../assets/images/Star.svg" alt="not find" />
                                    <div className="yellow" style={{ marginLeft: "10px", lineHeight: "3rem", fontSize: "15px" }}><i>BODY TRANSFORMATION</i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default DevDesai;
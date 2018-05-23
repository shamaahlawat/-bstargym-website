import React, { Component } from 'react';
import '../css/bhavin_patel.less';

class BhavinPatel extends Component {
    render() {
        return (
            <div className="col-md-12 col-xs-12 col-sm-12 MainContainer noPadding ">
                <div className="col-md-12 col-xs-12 col-sm-12 bhavinPatel noPadding ">
                    <div className="col-md-12 col-xs-12 col-sm-12 trainerSection">
                        <div className="col-md-6 col-md-offset-5 col-sm-6 col-sm-offset-5 trainerInfo">
                            <h3 className="red fontSize"><b>BHAVIN PATEL</b></h3>
                            <p className="white" style={{ fontSize: "20px", fontWeight: "800", fontFamily: "Raleway" }}>Founder & Director</p>
                            <p className="white pText">Meet Bhavin Patel, a National Tennis player came up with Mr. Fitness, John Abraham for the venture. Bhavin is no normal person. He had his fair share of health concerns, but then with the right guidance, confidence and self-belief and a friend like John Abraham, today Bhavin is one of the names to reckon with in the fitness Industry.
                            Bhavin has trained a range of clients, He believes exercise is fundamental to living a well-balanced life, and truly enjoys doing the best for his clients.  He is confident an inner athlete lives inside everyone, and it’s his duty to motivate clients to unlock their physical potential.
                            Bhavin incorporates different types of training method in his workouts and customized specific easy diet plan for each individual making sure that each workout and diet helps clients improve physical performance outside the gym.  He strives to make each workout a challenging learning experience, ensuring clients know how to properly perform exercises along with the ensuing benefits.</p>
                            <div className="col-md-12 col-sm-12 noPadding" style={{ marginTop: "13px", fontFamily: "Raleway" }}>
                                <div className="col-md-12 col-sm-12 flex-box noPadding">
                                    <img src="../assets/images/Star.svg" alt="not find" />
                                    <div className="yellow" style={{ marginLeft: "10px", lineHeight: "3rem", fontSize: "15px" }}><i>SPORTS SPECIFIC TRAINING</i> </div>
                                </div>
                                <div className="col-md-12 col-sm-12 flex-box noPadding">
                                    <img src="../assets/images/Star.svg" alt="not find" />
                                    <div className="yellow" style={{ marginLeft: "10px", lineHeight: "3rem", fontSize: "15px" }}><i>TRANSFORMATION</i> </div>
                                </div>
                                <div className="col-md-12 col-sm-12 flex-box noPadding">
                                    <img src="../assets/images/Star.svg" alt="not find" />
                                    <div className="yellow" style={{ marginLeft: "10px", lineHeight: "3rem", fontSize: "15px" }}><i>NUTRITIONIST</i> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default BhavinPatel;
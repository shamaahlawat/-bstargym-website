import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import './css/packages.less';


class Packages extends Component {
    render() {
        return (
            <div className="col-md-12 col-xs-12 col-sm-12 MainContainer noPadding ">
                <div className="col-md-12 col-xs-12 col-sm-12 backgroundImage">
                    <div className="col-md-10 col-md-offset-1 col-xs-12 col-sm-10 col-sm-offset-1 PackageContainer noPadding ">
                        <div className="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12 choosePlan">
                            <p className="col-md-8 col-md-offset-2 heading"><b>Choose your plan for</b></p>
                            <div className="col-md-12 menVSwomen">
                                <div className="imagePadding">
                                    <img className="borderRight" src="../assets/images/WOMEN.svg" alt="not found" />
                                    <p style={{ paddingTop: "10px" }}>WOMEN</p>
                                </div >
                                <div className="imagePadding">
                                    <img src="../assets/images/MEN.svg" alt="not found" />
                                    <p style={{ paddingTop: "10px" }}>MEN</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12 noOfPlans">
                            <div className="col-md-4 col-sm-4 col-xs-12 plans">
                                <h1> 1 </h1>
                                <p className="highlight"><b>FAT LOSS</b></p>

                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12 plans">
                                <h1> 2 </h1>
                                <p className="highlight"><b>MASS GAIN</b></p>

                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12 plans">
                                <h1> 3 </h1>
                                <p className="highlight"><b>BODY TRANSFORMATION</b></p>

                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12 plans  " >
                                <h1> 4 </h1>
                                <p className="highlight"><b>DIET PLANS</b></p>
                                <div className="col-md-12" style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                    <div className="flex-box">
                                        <img src="../assets/images/veg.svg" alt="not find" />
                                        <div style={{ marginLeft: "10px" }}>Pure Veg </div>
                                    </div>
                                    <div className="flex-box" style={{ marginLeft: "62px" }}>
                                        <img src="../assets/images/egg.svg" alt="not find" />
                                        <div style={{ marginLeft: "10px" }}>Veg & Eggetarian </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12 plans">
                                <h1> 5 </h1>
                                <p className="highlight"><b>DIET PLANS</b></p>
                                <div className="flex-box">
                                    <img src="../assets/images/nonVeg.svg" />
                                    <div style={{ marginLeft: "10px" }}>Non Veg </div>
                                </div>

                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12 plans">
                                <h1> 6 </h1>
                                <p className="highlight"><b>SUPPLEMENT PLAN</b></p>

                            </div>
                            <div className="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12 white moreAbout" style={{ textAlign: "center" }}>
                                <p className="package" style={{ marginTop: "25px" }}> TO KNOW MORE ABOUT THE PACKAGES
                                <a>
                                        <span
                                            style={{ color: "red", cursor: "pointer", paddingLeft: "10px", fontWeight: "900" }}
                                            onClick={() => browserHistory.push('/contactUs')}>
                                            CONTACT US
                                    </span>
                                    </a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
export default Packages;

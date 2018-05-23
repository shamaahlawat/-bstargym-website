import React, { Component } from 'react';
import '../css/john_abraham.less';

class JohnAbraham extends Component {
    render() {
        return (
            <div className="col-md-12 col-xs-12 col-sm-12 john noPadding ">
                <div className="col-md-12 col-xs-12 col-sm-12 johnAbraham" >
                    <div className="col-md-3 col-xs-9 col-md-offset-6 col-sm-6 col-sm-offset-6 noPadding trainerInfo" >
                        <h3 className="red fontSize" style={{ fontFamily: "Raleway" }}><b>JOHN ABRAHAM</b></h3>
                        <p className="white" style={{ fontSize: "20px", fontWeight: "800", fontFamily: "Raleway" }}>Founder & Motivator</p>
                        <p className="white" style={{ fontSize: "13px", fontFamily: "Raleway" }}>Fitness icon of our country.<br />Known as Greek God.<br />
                            The name says it all.</p>
                        <div className="col-md-12 col-sm-12 noPadding" style={{ marginTop: "13px", fontFamily: "Raleway" }}>
                            <div className="col-md-12 col-sm-12 flex-box noPadding">
                                <img src="../assets/images/Star.svg" alt="not find" />
                                <div className="yellow" style={{ marginLeft: "10px", lineHeight: "3rem", fontSize: "15px" }}><i>MENTOR</i></div>
                            </div>
                            <div className="col-md-12 col-sm-12 flex-box noPadding">
                                <img src="../assets/images/Star.svg" alt="not find" />
                                <div className="yellow" style={{ marginLeft: "10px", lineHeight: "3rem", fontSize: "15px" }}><i>IDEOLOGIST</i></div>
                            </div>
                            <div className="col-md-12 col-sm-12 flex-box noPadding">
                                <img src="../assets/images/Star.svg" alt="not find" />
                                <div className="yellow" style={{ marginLeft: "10px", lineHeight: "3rem", fontSize: "15px" }}><i>INSPIRATION</i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
export default JohnAbraham;
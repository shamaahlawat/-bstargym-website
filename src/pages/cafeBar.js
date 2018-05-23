import React, { Component } from 'react';
import './css/cafeBar.less';
import { Button } from 'react-bootstrap';

class CafeBar extends Component {
    render() {
        return (
            <div className="col-md-12 col-xs-12 col-sm-12 cafeBar noPadding ">

                <div className="col-md-12 col-xs-12 col-sm-12 background1 noPadding ">
                    <div className=" col-md-12 col-md-offset-1 col-xs-12 col-xs-offset-1 col-sm-12 col-sm-offset-1 noPadding" style={{ fontFamily: "raleway" }}>
                        <img src="../assets/images/cafelogo.png" alt="not find" />
                        <h3 style={{ color: "#ffcc01", fontWeight: "600", fontSize: "26px" }}>We feed healthy food.</h3>
                        <p style={{ color: "white", fontSize: "16px" }}>Enjoy delicious yet healthy food at the B-Star cafe</p>
                        <div className="col-md-12 col-xs-12 noPadding">
                            <Button bsStyle="primary">Know more</Button>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 col-xs-12 col-sm-12 background2 noPadding ">
                    <div className="col-md-10 col-md-offset-1 white" style={{ fontFamily: "raleway" }}>
                        <h3 className="col-md-9" style={{ color: "#ffcc01", fontSize: "26px" }}>What is cafe B Star? </h3>
                        <p className="col-md-9" >Fresh Fitness Food is a premium meal delivery service offering fresh, quality food that is customised to your exact needs by our nutrition team, prepared by our expert chefs and delivered daily to your home or work.</p>

                        <p className="col-md-9">We are passionate about convenience, great taste and results, as well as excellent customer service and support. We adopt a scientific approach to create highly personalised plans, giving you the precision, structure and consistency you need to achieve your health and fitness goals.</p>

                        <p className="col-md-9">We also give you back crucial hours each week by removing the need to plan, shop, cook or clean.</p>

                        <p className="col-md-9">Whether you are looking to shed fat, build muscle or simply live a healthier, energised and more balanced lifestyle, Fresh Fitness Food is the most convenient and delicious way to achieve rapid, long lasting results. </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default CafeBar;
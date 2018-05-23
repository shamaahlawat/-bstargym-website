import React, { Component } from 'react';
import './css/contactUs.less';
import { Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UserActions from '../redux/actions/user_actions';
import { storeId } from '../config/constants';

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, UserActions), dispatch)
    }
}

class ContactUs extends Component {
    constructor() {
        super();
        this.inputHandler = this.inputHandler.bind(this);
        this.onSendClick = this.onSendClick.bind(this);
        this.state = {
            contact_data: {
                name: "",
                email: "",
                phone: "",
                message: ""
            }
        }
    }

    inputHandler = (event) => {
        var data = this.state.contact_data;
        if (event.target.name === "name")
            data.name = event.target.value;
        if (event.target.name === "email")
            data.email = event.target.value;
        if (event.target.name === "phone")
            data.phone = event.target.value;
        if (event.target.name === "message")
            data.message = event.target.value;

        this.setState({
            contact_data: data
        })
    }

    onSendClick() {
        console.log('on send button clicked');
        var data = {
            store_id: storeId,
            name: this.state.contact_data.name,
            email: this.state.contact_data.email,
            phone: this.state.contact_data.phone,
            message: this.state.contact_data.message
        }
        console.log(data);
        console.log(storeId);
        this.props.actions.contactUsAction(data);
    }

    render() {
        return (
            <div className="col-md-12 col-sm-12 col-xs-12 contactUs noPadding">
                <div className="col-md-10 col-md-offset-1 noPadding white" style={{ marginTop: "48px" }}>
                    <div className="col-md-6 col-sm-6 col-xs-12 trainerDetail" >
                        <div className="col-xs-9 col-md-8 noPadding">
                            <p className="noMarginBottom fontSize">BHAVIN PATEL </p>
                            <p className="paddingBottom-17" style={{ fontSize: "16px", fontWeight: "500", paddingBottom: "20px" }}>FOUNDER AND DIRECTOR </p>
                            <img src="../assets/images/location.svg" alt="not find" />
                            <p className="textSize paddingBottom-17">Ahmedabad Racket Academy, Near PRL, Sindhubhavan Road, Thaltej, Ahmedabad-58</p>
                            <img src="../assets/images/call.svg" alt="not find" />
                            <p className="textSize paddingBottom-17">+91 79 65158003 / 6525 8003 <br />
                                +91 9825009860</p>
                            <img src="../assets/images/msg.svg" alt="not find" />
                            <p className="textSize" style={{ marginBottom: "33px" }}>info@b-star.in </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 trainerDetail" >
                        <div className="col-xs-9 col-md-8 col-sm-6 noPadding">
                            <p className="noMarginBottom fontSize">DEV DESAI </p>
                            <p className="paddingBottom-17" style={{ fontSize: "16px", fontWeight: "500", paddingBottom: "20px" }}>DIRECTOR AND PARTER </p>
                            <img src="../assets/images/location.svg" alt="not find" />
                            <p className="textSize paddingBottom-17">Ahmedabad Racket Academy, Near PRL, Sindhubhavan Road, Thaltej, Ahmedabad-58</p>
                            <img src="../assets/images/call.svg" alt="not find" />
                            <p className="textSize paddingBottom-17">+91 79 65158003 / 6525 8003 <br />
                                +91 +91 9099065315</p>

                            <img src="../assets/images/msg.svg" alt="not find" />
                            <p className="textSize">info@b-star.in </p>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 noPadding" style={{ marginTop: "50px" }}>
                        <div className="col-md-6 col-sm-6 col-xs-12 ">
                            <p className="paddingBottom-17" style={{ fontSize: "16px", fontWeight: "500" }}>LOCATION </p>
                            <div className="map" style={{ background: "black", marginBottom: "20px" }}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.500043132616!2d72.49067995059048!3d23.042122221305313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b66276443e9%3A0x9858e20a8ae79d93!2sB+Star+Gym!5e0!3m2!1sen!2sin!4v1513420531078" width="315" height="236" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12 " >
                            <p className="paddingBottom-17" style={{ fontSize: "16px", fontWeight: "500", paddingBottom: "20px" }}>GET IN TOUCH</p>
                            <form className="col-md-11 noPadding">
                                <input
                                    className="col-md-12 col-xs-12 inputStyle"
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={this.state.contact_data.name}
                                    onChange={this.inputHandler} />
                                <input
                                    className="col-md-12 col-xs-12 inputStyle"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={this.state.contact_data.email}
                                    onChange={this.inputHandler} />
                                <input
                                    className="col-md-12 col-xs-12 inputStyle"
                                    type="text"
                                    name="phone"
                                    placeholder="Phone"
                                    value={this.state.contact_data.phone}
                                    onChange={this.inputHandler} />
                                <textarea
                                    className="col-md-12 col-xs-12 inputStyle"
                                    placeholder="Message"
                                    rows="7"
                                    name="Message"
                                    value={this.state.contact_data.message}
                                    onChange={this.inputHandler} />

                                <div className="col-md-12 col-xs-12 noPadding" style={{ display: "flex", justifyContent: "flex-end", paddingTop: "10px" }}>
                                    <Button
                                        bsStyle="primary"
                                        onClick={this.onSendClick}
                                    >
                                        SEND
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
export default connect(null, mapDispatchToProps, null, { withRef: true })(ContactUs);

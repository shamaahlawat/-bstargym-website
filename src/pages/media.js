import React, { Component } from 'react';
import './css/media.less';
import { Button } from "react-bootstrap";
import ReactModal from 'react-modal';
import { Modal } from "react-bootstrap";
import ImageFrame from './components/_image_frame'
import { images } from '../config/constants';

class Media extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.state = {
            showModal: false,
            page1: images,
            page2: [
                {
                    pic: "../assets/images/11.jpg",
                    pageInfo: "JOHN ABRAHAM"
                },
                {
                    pic: "../assets/images/12.jpg",
                    pageInfo: "BHAVIN PATEL"
                },
                {
                    pic: "../assets/images/13.jpg",
                    pageInfo: "BHAVIN PATEL"
                },
                {
                    pic: "../assets/images/14.jpg",
                    pageInfo: "BHAVIN PATEL"
                },
                {
                    pic: "../assets/images/15.jpg",
                    pageInfo: "BHAVIN PATEL"
                },
                {
                    pic: "../assets/images/10.jpg",
                    pageInfo: "BHAVIN PATEL"
                },
                {
                    pic: "../assets/images/9.jpg",
                    pageInfo: "BHAVIN PATEL"
                },
                {
                    pic: "../assets/images/8.jpg",
                    pageInfo: "BHAVIN PATEL"
                },
            ],
            page3: [
                {
                    pic: "../assets/images/1.jpg",
                    pageInfo: "JOHN ABRAHAM"
                },
                {
                    pic: "../assets/images/2.jpg",
                    pageInfo: "BHAVIN PATEL"
                },
                {
                    pic: "../assets/images/11.jpg",
                    pageInfo: "BHAVIN PATEL"
                },
                {
                    pic: "../assets/images/14.jpg",
                    pageInfo: "BHAVIN PATEL"
                },
                {
                    pic: "../assets/images/15.jpg",
                    pageInfo: "BHAVIN PATEL"
                },
                {
                    pic: "../assets/images/6.jpg",
                    pageInfo: "BHAVIN PATEL"
                },
                {
                    pic: "../assets/images/7.jpg",
                    pageInfo: "BHAVIN PATEL"
                },
                {
                    pic: "../assets/images/3.jpg",
                    pageInfo: "BHAVIN PATEL"
                },
            ],
            page: "page1"
        }
    }

    setModalState(showModal) {
        this.setState({
            showModal: showModal
        });
    }
    close() {
        this.setState({ showModal: false });
    }
    open() {
        this.setState({ showModal: true });
    }
    render() {
        return (
            <div className="col-md-12 col-xs-12 col-sm-12 MainContainer noPadding ">
                <div className="col-md-12 col-xs-12 col-sm-12 MediaContainer noPadding ">
                    <div className="col-md-10 col-md-offset-1 contentSection">
                        {this.state.page === "page1" &&
                            <ImageFrame ImageList={this.state.page1} />}
                        {this.state.page === "page2" &&
                            <ImageFrame ImageList={this.state.page2} />}
                        {this.state.page === "page3" &&
                            <ImageFrame ImageList={this.state.page3} />}
                        <div className="buttons">
                            <ul className="menu">
                                <li
                                    className={"circularDiv " + (this.state.page === "page1" ? "activeStep" : "")}
                                    onClick={() => { this.setState({ page: "page1" }) }}>
                                    <a>1</a>
                                </li>
                                <li
                                    className={"circularDiv " + (this.state.page === "page2" ? "activeStep" : "")}
                                    onClick={() => { this.setState({ page: "page2" }) }}>
                                    <a>2</a>
                                </li>
                                 <li
                                    className={"circularDiv " + (this.state.page === "page3" ? "activeStep" : "")}
                                    onClick={() => { this.setState({ page: "page3" }) }}>
                                    <a>3</a>
                                </li> 
                            </ul>
                        </div>
                    </div>
                </div>
                <style>
                    {".modal-content { height: 80vh !important; width: 103vh !important,background:black }"}
                    {".modal{ top: 43px; }"}
                </style>
            </div>
        );
    }
}
export default Media;
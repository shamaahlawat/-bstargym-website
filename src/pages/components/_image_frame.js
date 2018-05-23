import React, { Component } from 'react';
import '../css/media.less';
import { Button } from "react-bootstrap"
import ReactModal from 'react-modal'
import { Modal } from "react-bootstrap"

class ImageFrame extends Component {
    constructor(props) {
        super(props);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.state = {
            showModal: false,
            modalImageUrl: "",
            info: ""
        };
    }

    setModalState(showModal) {
        this.setState({
            showModal: showModal
        });
    }
    close() {
        this.setState({ showModal: false });
    }
    open(url, info) {
        this.setState({
            showModal: true,
            modalImageUrl: url,
            info: info
        });
    }
    render() {
        return (
            <div className="flex-box">
                {
                    this.props.ImageList.map((image, index) => {
                        return (
                            <div className="col-xs-12 col-md-3 col-sm-4 marginBottom-20" >
                                <div className="col-md-12  imageStyle " style={{ backgroundImage: "url(" + image.pic + ")", height: "200px", cursor: "pointer" }}
                                    onClick={() => this.open(image.pic, image.pageInfo)}>
                                    {/* <img
                                    className="col-xs-12 col-md-12 col-sm-12 marginBottom-20 edit noPadding"
                                    data-toggle="modal"
                                    data-target=".FirstModal"
                                    onClick={() => this.open(image.pic, image.pageInfo)}
                                    src={image.pic}
                                    alt="not find"
                                    style={{ borderRadius: "10%" }}
                                    key={index} /> */}
                                </div>
                            </div>

                        );
                    })
                }
                <div className="modal modal-dialog fade firstModal " role="dialog">
                    <div className="static-modal"  >
                        <Modal dialogClassName="bgColor" show={this.state.showModal} onHide={this.close} >
                            <div className="main" style={{ backgroundImage: 'url(' + this.state.modalImageUrl + ')', height: "100%", backgroundSize: "cover" }} >
                                <div style={{ cursor: "pointer" }}>
                                    <span className=" cross " style={{ float: "right", fontSize: "25px", color: "white", marginRight: "22px" }} onClick={this.close} aria-hidden="true">&times;</span>
                                </div>
                                {/* <img className="" src={this.state.modalImageUrl} alt="not find" style={{ borderRadius: "15%", width: "100%" }} /> */}
                                {/* <div style={{ border: "0px", textAlign: "center", fontFamily: "raleway", fontSize: "20px" }}>
                                    <p style={{ color: "black" }}><b>{this.state.info}</b></p>
                                </div> */}
                            </div>
                        </Modal>
                        <style>
                            {".modal-content { height: 80vh !important; background:black!important;}"}
                        </style>
                    </div>
                </div>
            </div>
        );
    }
}
export default ImageFrame;




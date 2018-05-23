import React, { Component } from 'react';

class AboutComponent extends Component {
    render() {
        return (
            < div className="col-md-12 col-sm-12 col-xs-12 noPadding fontFamily" >
                {(window.innerWidth > 481) && (this.props.index % 2) === 0 && < div className="col-md-12 col-sm-12 col-xs-12 noPadding " >
                    <div className="col-md-6 col-sm-6 col-xs-12 imageSection noPadding">
                        <img className="image" src={this.props.data.pic} alt="not find" width="100%" />
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 textSection" style={{ background: "black" }}>
                        <div className="col-md-10 col-xs-12 flex-box">
                            <h3><b>{this.props.data.info.header} </b></h3>
                            <p>{this.props.data.info.body}</p>
                        </div>
                    </div>
                </div >}
                {(window.innerWidth > 481) && (this.props.index % 2) !== 0 && < div className="col-md-12 col-sm-12 col-xs-12 noPadding " >
                    <div className="col-md-6 col-sm-6 col-xs-12 textSection" style={{ background: "black" }}>
                        <div className="col-md-10 col-xs-12 flex-box">
                            <h3><b>{this.props.data.info.header} </b></h3>
                            <p>{this.props.data.info.body}</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 imageSection noPadding">
                        <img src={this.props.data.pic} alt="not find" width="100%" />
                    </div>
                </div >}

                {(window.innerWidth <= 480) &&
                    < div className="col-md-12 col-sm-12 col-xs-12 noPadding " >
                        <div className="col-md-6 col-sm-6 col-xs-12 textSection " style={{ background: "black" }}>
                            <div className="col-md-10 col-xs-12 flex-box">
                                <h3><b>{this.props.data.info.header} </b></h3>
                                <p>{this.props.data.info.body}</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12 imageSection noPadding">
                            <img src={this.props.data.pic} alt="not find" width="100%" />
                        </div>
                    </div >}

            </div>

        );
    }
}
export default AboutComponent;
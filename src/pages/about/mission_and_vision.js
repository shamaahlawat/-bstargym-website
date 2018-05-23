import React, { Component } from 'react';
import AboutComponent from './about_component';

class MissionAndVision extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    pic: "./assets/images/MISSION.png",
                    info: {
                        header: "MISSION",
                        body: "To treat our member’s health as a biggest asset of our firm and enhance these assets every day. Our life is dedicated in promoting health and fitness and will continue to do so."
                    }
                },
                {
                    pic: "./assets/images/Vision.png",
                    info: {
                        header: "VISION",
                        body: "To see a fit india, With least ratio of obesity and maximum ratio of sportsman and fit people"
                    }
                }

            ]
        }
    }
    render() {
        return (
            <div className="col-md-12 col-xs-12 col-sm-12 about_container noPadding ">
                {/* <AboutComponent data={this.state.data[0]} /> */}
                {this.state.data.map((item, index) => {
                    return (
                        <AboutComponent data={item} index={index} />
                    );
                })
                }
            </div>
        );
    }
}
export default MissionAndVision;

import React, { Component } from 'react';
import '../css/about.less';
import AboutComponent from '../about/about_component'
import MobileComponent from '../about/mobileComponent'

class About extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    pic: "./assets/images/THE GYM.png",
                    info: {
                        header: "The GYM ",
                        body: "B* (B-Star) the newest and the swankiest fitness point in Ahmedabad, is  the finest option in the city for fitness enthusiasts. Launched by none other than John Abraham, B* is already making news in the circuit. B* is established to segment the premium members of Ahmedabad. The gym is built up with luxurious ambiance over 16000 sq ft. at Ahmedabad Racquet Academy, Sindhu bhavan road, Off SG Highway."
                    }
                },
                {
                    pic: "./assets/images/OUR METHOD.png",
                    info: {
                        header: "Our Method",
                        body: "B* has introduced a special idea of letting the performer look at self while he/she is lying for the chest workouts. Mirrors are designed on the ceiling.B* doesn’t believe in workouts without a specific target, execution plan and knowledge of both workout and diet.B* has a specific flow chart which is mandatory to be followed by all trainers as well as members for the benefit of a systematic pattern from entry of a member till his existence of membership with B*. This is the most methodical and exclusive feature of B* in India so far.So now that we have told you about the most happening Gym of the city and the men behind the brand, without wasting a moment step into B-Star and start your journey towards a more healthier tomorrow."
                    }
                },
                {
                    pic: "./assets/images/OUR EQUIPMENT.png",
                    info: {
                        header: "Our Equipments",
                        body: "What makes B* unique is just not the names, equipments that are specially designed keeping in mind the accuracy of muscles involved on each equipment. Whether you are first timer or an athlete, the equipments are designed in a manner that leaves no scope for cheating in your performance. The dumbbells and plates are customized from USA specially as per the brand factor of B* and  have been autographed by John Abraham."
                    }
                }

            ]
        }
    }
    render() {

        return (
            <div className="col-md-12 col-xs-12 col-sm-12 about_container noPadding ">
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
export default About;



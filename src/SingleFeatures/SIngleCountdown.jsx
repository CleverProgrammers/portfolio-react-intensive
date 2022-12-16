import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
export default function SIngleCountdown(props) {
    const { title, start, end, duration, extraClass } = props;
    return (
        <div className={extraClass ? `col-md-3 col-sm-6 ${extraClass}` : "col-md-3 col-sm-6"}>
            <div className="counter-item text-center">
                    <VisibilitySensor>
                        {({ isVisible }) =>
                            <h4 className="pc"> {isVisible ? <><span className="count"><CountUp start={start} end={end} duration={duration}  /></span> + </> :
                                "0"}</h4>
                        }
                    </VisibilitySensor>
                <p>{title}</p>
            </div>
        </div>
    )
}

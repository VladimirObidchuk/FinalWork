import React, { useState, useEffect } from 'react';
import "./Event.scss";

const endDate = new Date("Aug 15, 2021 12:00:00").getTime();

function Event() {

    const [now, setNow] = useState(new Date().getTime());

    const t = endDate - now;

    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((t % (1000 * 60)) / 1000);

    useEffect(() => {
        const timer = setInterval(() => {
            setNow(new Date().getTime())
        }, 1000)

        return () => {
            clearInterval(timer);
        }
    }, []);


    return (
        <div className="event" id="event">
            <div className="event__main">
                <div className="event__left">
                    <div className="left__header">
                        <p className="left__subTitle">ELITE TOP PRIORITY</p>
                        <h3 className="left__title">BURNING CRUSSADE</h3>
                        <p className="left__text">CLASSIC TBC LEVELING</p>
                    </div>
                    <div className="event__footer">
                        <p className="footer__text">$279</p>
                        <h3 className="footer__title">$279</h3>
                    </div>
                </div>
                <div className="event__right">
                    <div className="right__main">
                        <div className="right__text">UNTIL SALE END</div>
                        <div className="right__duration" id="counter">
                            <h3 className="duration__title">
                                <span className="duration__text" id="day">{days}</span> DAYS
                            </h3>
                            <h3 className="duration__title">
                                <span className="duration__text" id="hours">{hours.toString().padStart(2, '0')}</span> HOURS
                            </h3>
                            <h3 className="duration__title">
                                <span className="duration__text" id="minuts">{mins.toString().padStart(2, '0')}</span> MINUTES
                            </h3>
                            <h3 className="duration__title">
                                <span className="duration__text" id="seconds">{secs.toString().padStart(2, '0')}</span> SECONDS
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;


import React from 'react'
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './progressbar.css'
const ProgressBar = ({ percentage }) => {
    return (
        <>
            <section className='progressBars'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                        <h3>Every Click Counts! </h3>
                        <p>Our all-in-one destination for Digital Excellence. From captivating designs defining your brand to strategic marketing solutions</p>
                        <h3>Design, Marketing, Strategy – We Do It All!</h3>
                        </div>
                        <div className="col-lg-5 d-flex align-items-center justify-content-center">
                            <div className="bars" style={{ width: '400px' }}>
                                <CircularProgressbarWithChildren
                                    value={75}
                                    strokeWidth={8}
                                    styles={buildStyles({
                                        pathColor: "#f00",
                                        trailColor: "lightgrey",
                                    })}
                                >
                                    <div style={{ width: "84%" }}>
                                        <CircularProgressbarWithChildren
                                            value={70}
                                            styles={buildStyles({
                                                trailColor: "lightgrey",
                                                pathColor: "#ff3838"
                                            })}
                                        >
                                            <div style={{ width: "84%" }}>
                                                <CircularProgressbar
                                                    value={70}
                                                    styles={buildStyles({
                                                        pathColor: "#ff7272",
                                                        trailColor: "lightgrey"
                                                    })}
                                                />
                                            </div>
                                        </CircularProgressbarWithChildren>
                                    </div>
                                </CircularProgressbarWithChildren>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='boxes'>
                                {/* Content for the second column */}
                               <p>Website and logo designing</p>
                               <p>Social media marketing and management</p>
                               <p>Digital marketing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ProgressBar
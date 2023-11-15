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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem fugit aspernatur, minima quia inventore dignissimos quos in, ea natus architecto dolorem eum quas saepe reprehenderit, atque laboriosam quibusdam velit quae.
                        </div>
                        <div className="col-lg-6 d-flex align-items-center justify-content-center">
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
                        <div className="col-lg-2">
                            <div className='boxes'>
                                {/* Content for the second column */}
                               <p>2D/3D Animation</p>
                               <p>Web Developement</p>
                               <p>App Development</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ProgressBar
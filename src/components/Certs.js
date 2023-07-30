import CertCard from "./CertCard.js"

import hr from "../assets/curve-hr.svg"
import aws from "../assets/certs/AWS.png"
import basic from "../assets/certs/basic.png"
import gait from "../assets/certs/gait.png"
import hrc from "../assets/certs/hrc.png"
import inter from "../assets/certs/inter.png"
import microsoft from "../assets/certs/microsoft.png"
import python from "../assets/certs/python.png"
import smartInt from "../assets/certs/smartInternz.png"
import web from "../assets/certs/webdev.png"

// import 

export default function Certs(){
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Certifications</h1>
            <p className="font-light text-gray-400">Here are some of my Certifications</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="Problem Solving Basic" img={basic} issued="HackerRank" date="Jan 2022" />
                <CertCard name="Amazon Web Service" img={aws} issued="Credly" date="April 2023" />
                <CertCard name="Gait Exam" img={gait} issued="Gait" date="May 2023" />
                <CertCard name="HighRadius Training" img={hrc} issued="HighRadius" date="July 2023" />
                <CertCard name="Problem Solving Intermediate" img={inter} issued="HackerRank" date="Sep 2022" />
                <CertCard name="Salesforce Developer Role " img={smartInt} issued="SmartInternz" date="July 2023" />
                <CertCard name="Python Basics" img={python} issued="Udemy" date="Oct 2021" />
                <CertCard name="Microsoft AI classroo Series" img={microsoft} issued="Progate" date="Dec 2020" />
                <CertCard name="Full Stack Development Bootcamp" img={web} issued="Udemy" date="Dec 2022" />

            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}

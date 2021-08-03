import React from 'react'
import Navbar from './Navbar'
import "../styles/master.css"
import WavesLayout from './WavesLayout'


export default function MasterLayout({children}) {
    return (  
        <div className="web_wrapper">
            <div id="Background">
                <Navbar />
            </div>
            <WavesLayout zPosition="0px" waveNumber="0" />
            <WavesLayout zPosition="100px" waveNumber="1"/>
            <WavesLayout zPosition="100px" waveNumber="2"/>
            <WavesLayout zPosition="100px" waveNumber="3"/>
            <WavesLayout zPosition="100px" waveNumber="4"/>

            <div className="MainContent">
                {children}
            </div>
        
            
        </div>
    );

}
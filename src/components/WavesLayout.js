import React from 'react'
import "../styles/waves.css"

export default function WavesLayout({zPosition, waveNumber}) {
    var classNames = "";
    var isEven = (waveNumber%2 == 0);
    if(isEven) {
        classNames = "pretty-wave";
    }
    var marginOffset = (50 + (parseInt(waveNumber) *7));
    console.log(marginOffset);
    return (
        <div id="Wave_Outer_Translator" style={{zIndex: 100-(2*waveNumber), bottom: ((30*waveNumber)-80) + "px"}} >
            <div id="Wave_Outer" style={{animationDelay: "-" + waveNumber*1 +"s"}}>
                <div id="Wave_Container" className={classNames} style={{ transform: "translateZ(-" + (waveNumber*120) + "px)", animationDelay: "-" + waveNumber*1 +"s", marginLeft: "-" + marginOffset + "vw"}} ></div>
            </div>
        </div>
    )
}

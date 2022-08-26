import {MdStar} from "react-icons/md"
import {GiArcher} from "react-icons/gi"
import {TbSwimming} from "react-icons/tb"
import {GiCycling} from "react-icons/gi"
import {GiHorseHead} from "react-icons/gi"
import {GiMountainClimbing} from "react-icons/gi"
import {GiGolfTee} from "react-icons/gi"
import {GiRunningNinja} from "react-icons/gi"
import {GiSpeedBoat} from "react-icons/gi"

import "./style.css"
export const  Header=()=>{

return(
    <div className="header">
        <div className="header-part one">
           <MdStar className="icons"></MdStar>
           <p>Featured</p>
        </div>
        <div className="header-part two">
           <GiArcher className="icons"></GiArcher>
           <p>Armoury</p>
        </div>
        <div className="header-part three">
           <TbSwimming className="icons"></TbSwimming>
           <p>Aquatics</p>
        </div>
        <div className="header-part four">
           <GiCycling className="icons"></GiCycling>
           <p>Cycling</p>
        </div>
        <div className="header-part five">
           <GiHorseHead className="icons"></GiHorseHead>
           <p>Equestrian</p>
        </div>
        <div className="header-part six">
           <GiMountainClimbing className="icons"></GiMountainClimbing>
           <p>Extreme</p>
        </div>
        <div className="header-part seven">
           <GiGolfTee className="icons"></GiGolfTee>
           <p>Golf</p>
        </div>
        <div className="header-part eight">
           <GiRunningNinja className="icons"></GiRunningNinja>
           <p>Gymnastics</p>
        </div>
        <div className="header-part nine">
           <GiSpeedBoat className="icons"></GiSpeedBoat>
           <p>Lake and Sea</p>
        </div>
    </div>
)
}
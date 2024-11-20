import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Side_Right = () =>{
    return(
        <div className="container-padding">
        <div className="padding">
          <div className="content1">
            <h2><i className="fa fa-briefcase fa-fw large" />School</h2>
            <h3>SD Advent Salemba Jakarta</h3>
            <p><i className="fa fa-calendar fa-fw large" />2008-2013</p>
            <p>SD Advent Salemba Jakarta dengan nilai kelulusan 25.60
            </p>
          </div>
          <hr />
          <div className="content2">
            <h3>SMP Advent Salemba Jakarta</h3>
            <p><i className="fa fa-calendar fa-fw large" />2013-2016</p>
            <p>SMP Advent Salemba Jakarta dengan nilai kelulusan 29.0
            </p>
          </div>
          <hr />
          <div className="content3"> 
            <h3>SMK Pelayaran Dewaruci Jakarta</h3>
            <p><i className="fa fa-calendar fa-fw large" />2016-2019</p>
            <p>SMK Pelayaran Dewaruci Jakarta dengan nilai kelulusan 21.0 , jurusan Nautika Kapal Niaga
            </p>
          </div>
        </div>
      </div>
    )
}

export default Side_Right
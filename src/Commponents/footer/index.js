import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Footer = () =>{
    return(
        <div className="padding-bottom">
    <div className="bottom">
      <div className="content1">
        <h2><i className="fa fa-briefcase fa-fw large" />Pengalaman :</h2>
        <h3>Google Data Analytics Professional Certificate</h3>
        <p><i className="fa fa-calendar fa-fw large" />2020</p>
      </div>
      <hr />
      <div className="content2">
        <h3>Microsoft Certified: Power BI Data Analyst Associate</h3>
        <p><i className="fa fa-calendar fa-fw large" />2021</p>
      </div>
      <hr />
      <div className="content3"> 
        <h3>IBM Data Analyst Professional Certificate</h3>
        <p><i className="fa fa-calendar fa-fw large" />2022</p>
      </div>
    </div>
  </div>
    )
}

export default Footer
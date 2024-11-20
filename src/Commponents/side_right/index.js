import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Side_Right = () =>{
  const [side_right, setSide_Right] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const side_rightRef = ref(db, "side_right");
    onValue(side_rightRef, (snapshot) => {
      const data = snapshot.val();
      setSide_Right(data);
    });
  }, []);
    return(
        <div className="container-padding">
        <div className="padding">
          <div className="content1">
            <h2><i className="fa fa-briefcase fa-fw large" />{side_right.title}</h2>
            <h3>{side_right.primari_school}</h3>
            <p><i className="fa fa-calendar fa-fw large" />{side_right.years}</p>
            <p>{side_right.text1}
            </p>
          </div>
          <hr />
          <div className="content2">
            <h3>{side_right.middle_school}</h3>
            <p><i className="fa fa-calendar fa-fw large" />{side_right.years1}</p>
            <p>{side_right.text2}
            </p>
          </div>
          <hr />
          <div className="content3"> 
            <h3>{side_right.high_school}</h3>
            <p><i className="fa fa-calendar fa-fw large" />{side_right.years2}</p>
            <p>{side_right.text3}
            </p>
          </div>
        </div>
      </div>
    )
}

export default Side_Right
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Side_Left = () =>{
  const [side_left, setSide_Left] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const side_leftRef = ref(db, "side_left");
    onValue(side_leftRef, (snapshot) => {
      const data = snapshot.val();
      setSide_Left(data);
    });
  }, []);
    return (
        <div id="colspan">
    <img src={`data:image/jpeg;base64,${side_left.image1}`} className="img1" />
    <h4>{side_left.name}</h4>
    <p><i className="fa fa-briefcase fa-fw large" />{side_left.text1}</p>
    <p><i className="fa fa-home fa-fw large" />{side_left.text2}</p>
    <p><i className="fa fa-phone fa-fw large" />{side_left.number1}</p>
    <hr />
    <h3><i className="fa fa-linux fa-fw large" />{side_left.text3}</h3>
    <p>{side_left.text4}</p>
    <div className="load">
      <div className="progress" style={{width: '90%'}}>{side_left.persen1}</div>
    </div>
    <p>{side_left.text5}</p>
    <div className="load2">
      <div className="progress2" style={{width: '80%'}}>{side_left.persen2}</div>
    </div>
    <p>{side_left.text6}</p>
    <div className="load3">
      <div className="progress3" style={{width: '70%'}}>{side_left.persen3}</div>
    </div>
    <p>{side_left.text7}</p>
    <div className="load4">
      <div className="progress4" style={{width: '65%'}}>{side_left.persen4}</div>
    </div>
    <p>{side_left.text8}</p>
    <div className="load4">
      <div className="progress4" style={{width: '65%'}}>{side_left.persen5}</div>
    </div>
    <p>{side_left.text9}</p>
    <div className="load4">
      <div className="progress4" style={{width: '65%'}}>{side_left.persen6}</div>
    </div>
    <hr />
    <h3><i className="fa fa-language fa-fw large" />{side_left.title_language}</h3>
    <p>{side_left.language1}</p>
    <p>{side_left.language2}</p>
    <hr />
    <h3><i className="fa fa-globe fa-fw large" />{side_left.titel_social}</h3>
    <a href="#"><i className="fa fa-facebook fa-fw large" /></a>
    <a href="#"><i className="fa fa-instagram fa-fw large" /></a>
    <a href="#"><i className="fa fa-twitter fa-fw large" /></a>
    <a href="#"><i className="fa fa-github fa-fw large" /></a>
    <a href="#"><i className="fa fa-git fa-fw large" /></a>
  </div>
    )
}

export default Side_Left
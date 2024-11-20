import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Footer = () =>{
  const [footer, setFooter] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const footerRef = ref(db, "footer");
    onValue(footerRef, (snapshot) => {
      const data = snapshot.val();
      setFooter(data);
    });
  }, []);
    return(
        <div className="padding-bottom">
    <div className="bottom">
      <div className="content1">
        <h2><i className="fa fa-briefcase fa-fw large" />{footer.title}</h2>
        <h3>{footer.text1}</h3>
        <p><i className="fa fa-calendar fa-fw large" />{footer.year1}</p>
      </div>
      <hr />
      <div className="content2">
        <h3>{footer.text2}</h3>
        <p><i className="fa fa-calendar fa-fw large" />{footer.year2}</p>
      </div>
      <hr />
      <div className="content3"> 
        <h3>{footer.text3}</h3>
        <p><i className="fa fa-calendar fa-fw large" />{footer.year3}</p>
      </div>
    </div>
  </div>
    )
}

export default Footer
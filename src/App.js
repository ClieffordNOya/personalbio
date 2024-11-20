import Side_Left from "./Commponents/side_left";

const App = () => {
  return (
<div className="container">
  <Side_Left />
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
</div>


  );
}

export default App;

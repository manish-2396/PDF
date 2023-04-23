import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const Pdf = () => {
  const [file, setFile] = useState("");
  const [singleProgress, setSingleProgress] = useState(0);

  const postpdf = async(payload : any, option : any) => {
    console.log(payload , option);
    
  }

  const handleFile = (e: any) => {
    // console.log(e.target.files[0]);
    setFile(e.target.files[0]);
    setSingleProgress(0);
  };

  const progress = {
    onUploadProgress: (ProgressEvent: any) => {
      console.log("m")
      const { loaded, total } = ProgressEvent;
      const per = Math.floor(((loaded / 1000) * 100) / (total / 100));
      setSingleProgress(per)
      console.log(per);
    },
  };

  const handleClick = async () => {
    const fileupload = new FormData();
    fileupload.append("pdf", file);


    await postpdf(fileupload , progress);

    console.log(fileupload);
  };
  return (
    <div>
      <input type="file" onChange={handleFile} />
      <br />
      <br />
      <div style={{ width: "20px" }}>
        <CircularProgressbar
          value={singleProgress}
          text={`${singleProgress}%`}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: "butt",
            textSize: "1px",
            pathTransitionDuration: 0.1,
            pathColor: `rgba(270, 136, 136, ${singleProgress / 100})`,
            textColor: "#f88",
            trailColor: "#d6d6d6",
            backgroundColor: "#3e98c7",
          })}
        />
      </div>

      <button onClick={handleClick}>Add PDF</button>
    </div>
  );
};

export default Pdf;

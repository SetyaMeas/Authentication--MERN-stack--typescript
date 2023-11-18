import { useState, useRef } from "react";
import src from "../../../assets/defaultImg";

const ImageFiled = ({ image }: any) => {
  const [imgValue, setImgValue] = useState<any>(src);
  const uploadImg: any = useRef(null);

  function handleUploadImg() {
    const file: any = uploadImg.current.files[0];
    const fileName: string = file.name;
    
    if(fileName.endsWith(".png") || fileName.endsWith(".jpg")){
      
      const fileReader: FileReader = new FileReader();
      fileReader.readAsDataURL(file);
  
      fileReader.addEventListener("load", () => {
        setImgValue(fileReader.result);
      });

    } else {
      alert("Only allowed PNG and JPG");
    }
  }

  return (
    <div className="flex gap-[15px] w-full">
      <div className="border flex justify-center items-center w-[90px] h-[120px]">
        <img src={imgValue} ref={image} className="w-full" />
      </div>

      <div className="h-[30px] flex gap-[9px] relative top-[90px]">
        <button onClick={() => uploadImg.current.click()} type="button" className="bg-[#355aff] h-full px-[6px] rounded-sm text-white">
          upload
        </button>
        <button onClick={() => setImgValue(src)} type="button" className="bg-[#ff3535] h-full px-[6px] rounded-sm text-white">
          remove
        </button>
      </div>

      <input type="file" ref={uploadImg} onChange={handleUploadImg} className="hidden" />
    </div>
  )
}

export default ImageFiled;
import { useEffect, useRef } from "react";
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";

const UploadWidget = () => {
  const cloudinaryRef = useRef()
  const widgetRef = useRef()

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'adinjesuha'
    }
  });
  
  const myImage = cld.image('chale_hn');

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: 'adinjesuha', 
      uploadPreset: 'chale_hn', 
      // folder: 'widgetUpload', 
      // cropping: true
    }, 
    (error, result) => { console.log(error, result) })
  }, [])
  return (
    <div>
      <button onClick={() => widgetRef.current.open()}>Upload</button>
      <AdvancedImage cldImg={myImage} />
    </div>
  )
}

export default UploadWidget
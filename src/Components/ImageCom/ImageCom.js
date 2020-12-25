import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataImage, imageData } from "../../redux/slice/imageSlice";

const ImageCom = () => {
  const dispatch = useDispatch();
  const { loading, imageApiData } = useSelector(dataImage);

  console.log(imageApiData);

  useEffect(() => {
    dispatch(imageData());
  }, [dispatch]);

  return <div></div>;
};

export default ImageCom;

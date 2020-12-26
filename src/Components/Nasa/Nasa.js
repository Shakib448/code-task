import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataNasa, nasaData } from "../../redux/slice/nasaSlice";

const Nasa = () => {
  const dispatch = useDispatch();
  const { loading, nasaApiData } = useSelector(dataNasa);

  useEffect(() => {
    dispatch(nasaData());
  }, [dispatch]);

  return (
    <div>
      <h1>This nasa</h1>
    </div>
  );
};

export default Nasa;

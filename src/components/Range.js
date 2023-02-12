import React, { useState } from "react";
import InputRange from "react-input-range";
import { useDispatch } from "react-redux";

const Range = () => {
  const [value, setValue] = useState({ min: 1980, max: 2023 });
  const dispatch = useDispatch();

  const getDate = (value) => {
    console.log(value);
    dispatch({ type: "GET_DATE", payload: { date: value } });
  };
  return (
    <InputRange
      maxValue={2023}
      minValue={1980}
      value={value}
      onChange={(value) => setValue(value)}
      onChangeComplete={(value) => getDate(value)}
    />
  );
};

export default Range;

import React, { useState } from "react";
import InputRange from "react-input-range";
import { useDispatch } from "react-redux";

// Movies 페이지의 영화 카드들을 개봉 연도 별로 필터링하는 range 컴포넌트.
const Range = () => {
  const [value, setValue] = useState({ min: 1980, max: 2023 });
  const dispatch = useDispatch();

  const getDate = (value) => {
    // console.log(value);
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

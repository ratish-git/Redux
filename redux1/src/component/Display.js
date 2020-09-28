import React from "react";

const DisplayItems = (props) => {
  const List = ({ dataList }) => {
    if (dataList) {
      return dataList.map((data) => {
        return <div key={data.id}>{data.course}</div>;
      });
    }
  };

  return <div>{List(props)}</div>;
};
export default DisplayItems;

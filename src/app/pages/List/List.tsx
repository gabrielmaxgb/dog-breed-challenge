import React from 'react'
import { useParams } from 'react-router-dom';

function List() {
  const params = useParams();

  console.log("params");
  console.log(params);

  return (
    <div>List</div>
  )
};

export default List;

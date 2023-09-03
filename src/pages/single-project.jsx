import React from 'react';
import { useParams } from "react-router-dom";

const SingleProject = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>SingleProject({id})</div>
  )
}
export default SingleProject;
import React, { useEffect } from 'react'


import { useDispatch, useSelector } from "react-redux";
import { getProjects } from '../redux/actions/project';


const Projects = () => {
  const projects = useSelector((state) => state.project.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch])

  const onClick = async () => {
    const res = await dispatch(getProjects());
    console.log(res)
  }

  return (
    <div>

      <button onClick={onClick} className="btn-btn-primary">
        Get projects
      </button>
      <hr />
      {projects.map((item) => <li key={item.id}>
        {item.name}
      </li>)}

    </div>
  )
}

export default Projects
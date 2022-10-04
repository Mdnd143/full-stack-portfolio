import React from "react";
import { useEffect, useState } from "react";
import { portfolioActions } from "../../store";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
export default function NewProject() {
  const [projects, getProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    liveLink: "",
    category: "",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(portfolioActions.getAllProjects());
  }, []);
  let getApi = "http://localhost:8000/api/projects";
  const callApi = async () => {
    const data = await axios.get(getApi);
    getProjects(data.data);
  };
  const submitform = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/addproject", formData);
  };
  useEffect(() => {
    callApi();
  }, [formData]);

  return (
    <div className="App">
      <h1>hi there</h1>
      <form onSubmit={submitform}>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="enter title"
        />
        <input
          type="text"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          placeholder="enter description"
        />
        <input
          type="text"
          value={formData.liveLink}
          onChange={(e) =>
            setFormData({ ...formData, liveLink: e.target.value })
          }
          placeholder="enter enter active link"
        />
        <input
          type="text"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          placeholder="enter category"
        />
        <button type="submit"> submit form</button>
      </form>
      <div className="card-container">
        {projects?.map((el, ix) => {
          return (
            <div className="card" key={ix}>
              <div className="title">{el.title}</div>
              <div className="description">{el.description}</div>
              <div className="title">{el.liveLink}</div>
              <div className="title">{el.category}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

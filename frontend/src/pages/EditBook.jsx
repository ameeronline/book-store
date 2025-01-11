import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() =>{
    setLoading(true);
    axios.get(`http://localhost:3000/books/${id}`)
    .then((response) => {
      setTitle(response.data.title);
      setAuthor(response.data.author);
      setPublishYear(response.data.publishYear);
      setLoading(false);
    }).catch((error) => {
      console.log(error);
      setLoading(false);
    })
  },[])

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };

    setLoading(true);
    axios
      .put(`http://localhost:3000/books/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  return (
    <div className="p-4 ">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Book</h1>
      {loading ? <Spinner /> : ""}

      <div className="w-1/2">
        <div className="flex flex-col mb-4">
          <label htmlFor="title" className="mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-slate-600 rounded-md p-1"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="author" className="mb-2">
            Author
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border border-slate-600 rounded-md p-1"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="publishyear" className="mb-2">
            Publish Year
          </label>
          <input
            type="text"
            id="publishyear"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border border-slate-600 rounded-md p-1"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleEditBook}
            className="bg-sky-800 text-white px-4 py-1 rounded-lg"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditBook;

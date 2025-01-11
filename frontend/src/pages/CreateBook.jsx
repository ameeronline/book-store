import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

function CreateBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };

    setLoading(true);
    axios
      .post("http://localhost:3000/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book created successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        enqueueSnackbar("Something went wrong!", { variant: "error" });
      });
  };
  return (
    <div className="p-4 ">
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>
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
            onClick={handleSaveBook}
            className="bg-sky-800 text-white px-4 py-1 rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateBook;

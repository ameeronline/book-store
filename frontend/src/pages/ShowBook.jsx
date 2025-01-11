import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

function ShowBook() {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full border-seperate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">Id</th>
              <td className="border border-slate-700 rounded-md text-center">{book._id}</td>
            </tr>
            
            <tr>
              <th className="border border-slate-600 rounded-md">Title</th>
              <td className="border border-slate-700 rounded-md text-center">{book.title}</td>
            </tr>
            
            <tr>
              <th className="border border-slate-600 rounded-md max-md:hidden">Author</th>
              <td className="border border-slate-700 rounded-md text-center max-md:hidden">{book.author}</td>
            </tr>
            
            <tr>
              <th className="border border-slate-600 rounded-md max-md:hidden">Publish Year</th>
              <td className="border border-slate-700 rounded-md text-center max-md:hidden">{book.publishYear}</td>
            </tr>
            <tr>
              <th className="border border-slate-600 rounded-md max-md:hidden">Created</th>
              <td className="border border-slate-700 rounded-md text-center max-md:hidden">{book.createdAt}</td>
            </tr>
            <tr>
              <th className="border border-slate-600 rounded-md max-md:hidden">Last Updated</th>
              <td className="border border-slate-700 rounded-md text-center max-md:hidden">{book.updatedAt}</td>
            </tr>
          </thead>
        </table>
      )}
    </div>
  );
}

export default ShowBook;

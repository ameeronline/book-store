import React, {useState} from 'react'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

function Deletebook() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const {enqueueSnackbar} = useSnackbar();

  const handleDeleteBook = () =>{
    setLoading(true);
    axios.delete(`http://localhost:3000/books/${id}`)
    .then(() => {
      setLoading(false);
      enqueueSnackbar('Book deleted successfully', {variant: 'success'});
      navigate('/');
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
      enqueueSnackbar('Something went wrong!', {variant: 'error'});
    });
  }
  const cancelDelete = () => navigate('/');
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are you sure You want to delete this book?</h3>

        <button className='p-4 bg-green-600 text-white m-8 w-full' onClick={cancelDelete}>Cancel </button>
        <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteBook}>Yes, Delete</button>
      </div>
    </div>
  )
}

export default Deletebook
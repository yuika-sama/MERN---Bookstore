import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner'; // Ensure the spinner component is imported correctly
import { Link } from 'react-router-dom';
import { AiOutlineEdit, AiOutlineLink } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table')

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        // Check if response structure matches expected format
        if (response.data && response.data.data) {
          setBooks(response.data.data);
        } else {
          console.log('Unexpected response format:', response);
          setBooks([]); // Set books to an empty array to avoid errors
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error fetching books:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick={() => setShowType('table')}>Table</button>
        <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick={() => setShowType('card')}>Card</button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {loading ? (
        <Spinner /> // Use Spinner component correctly
      ) : (
        showType == 'table' ? (<BooksTable books={books}/>) : (<BooksCard books = {books}/>)
      )}
    </div>
  );
};

export default Home;

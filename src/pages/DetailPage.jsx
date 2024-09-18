import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailPage = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const { data } = await axios.get(`https://parsingbot.pythonanywhere.com/${id}`);
                setItem(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchItem();
    }, [id]);

    if (!item) return <p className="text-center text-gray-500 text-lg">Loading...</p>;

    return (
        <div className='container mx-auto p-6 bg-white shadow-lg rounded-lg'>
            <h1 className='text-4xl font-bold text-gray-800 mb-4 text-center'>{item.title}</h1>
            <div className='flex justify-center'>
                <img src={item.file} alt={item.title} className="my-4 max-w-full h-auto rounded-lg shadow-md"/>
            </div>
            <p className='text-lg text-gray-700 leading-relaxed'>{item.description}</p>
        </div>
    );
};

export default DetailPage;

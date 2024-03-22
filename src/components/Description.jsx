import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Description = () => {
    const [description, setDescription] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchDescription = async () => {
            try {
                const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json`, {
                    params: {
                        apiKey: 'e695f82bca544e8d96ba1425e81f2a2c',
                    }
                });
                setDescription(response.data.ingredients);
            } catch (error) {
                console.error('Error fetching description:', error);
            }
        };

        fetchDescription();
    }, [id]);

    
    if (description.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className='flex justify-center items-center h-full mt-14'>
            
            <div className='max-w-lg w-full border rounded-lg border-black p-4'>
                <h1 className='text-2xl font-bold mb-4 text-center'>Here is the list of Ingredients</h1>
                {description.map((ingredient, index) => (
                    <div key={index} className='flex items-center justify-between mb-2'>
                        <h1 className='text-sm md:text-base uppercase font-semibold'>{ingredient.name}</h1>
                        <span className='text-sm md:text-base'>{ingredient.amount.metric.value} {ingredient.amount.metric.unit}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Description;
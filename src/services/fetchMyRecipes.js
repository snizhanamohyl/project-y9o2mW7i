import axios from 'axios';

const fetchMyRecipes = async () => {
        try {
            const response = await axios.get('https://64a8b750dca581464b85f54e.mockapi.io/recipes');
            return response.data
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    }

export default fetchMyRecipes;
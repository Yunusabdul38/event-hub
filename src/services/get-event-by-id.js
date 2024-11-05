// loader.js

import { END_POINT } from "../config/environment";
export async function eventLoader() {
    
    const response = await fetch(`${END_POINT.BASE_URL}/api/events/all`);
    
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json(); // The fetched data will be available in the component
}

import { END_POINT } from "../config/environment";
import store from "./app-contex";
import { updateEventList, updateEventListError, updateEventListLoading } from "./Auth/event-contex";
export async function homeGetEventLoader() {
    store.dispatch(updateEventListLoading())
    try{
        const response = await fetch(`${END_POINT.BASE_URL}/event/all?limit=10`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data =  response.json(); 
        store.dispatch(updateEventList(data))
        return data// The fetched data will be available in the component
    }catch(error){
        const message = {error}
        console.log(error)
        store.dispatch(updateEventListError(error))
        return message
    }   
}
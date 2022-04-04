import React from "react";
import { useFetch } from './2-useFetch';
import TourList from "./TourList";
import './BirthList.css';




const url = 'https://course-api.com/react-tours-project';

const Tour = () => {

  const { loading, data } = useFetch(url)



    


    return (<>


            <h1>  Sam</h1>

            <TourList  DATAS={data} Load={loading}  />






    </>);
}
 
export default Tour;
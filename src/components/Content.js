import React, { useState, useEffect } from "react";
import axios from "axios"

const Content = () => {

const [mydata, setData] = useState([])


useEffect(() => {
    axios
        .get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e3eb80a74ce74f51a3b83b058f918036")
        .then((response) => {
            console.log(response.data);
            setData([...response.articles])
            
        });
}, [])


  return (
    <div>Content {mydata}</div>
  )
}

export default Content
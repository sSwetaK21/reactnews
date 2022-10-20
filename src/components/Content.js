import React, { useState, useEffect } from "react";
import axios from "axios"
import Card from 'react-bootstrap/Card';


const Content = () => {



const [filter, setFilter] = useState([]);
const [mydata, setData] = useState([])
const [search, setSearchBar] = useState("");

useEffect(() => {
  axios
    .get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4255108b8af848bc86eebdfb27b52d19")
    .then((response) => {
      console.log(response.data);
      setData([...response.data.articles])

    });
}, [])

useEffect(() => {
  const filterDataValue = mydata.filter((post) =>{
    if (post.state) {
      return post.state.startsWith(search)
    }
  })
  setFilter(filterDataValue)
}, [search])
  



    return (
        <div className="d-flex  cardDis m-3"> {mydata.map(posts => {
            return (
                <div className="m-2">
                      <Card bg="dark" variant="dark">
                            <Card.Img variant="top" src={posts.urlToImage} />
                            <Card.Body className="whiteText">
                                <Card.Title>{posts.title}</Card.Title>
                                <Card.Text>
                                    {posts.description}
                                </Card.Text>
                                <Card.Link href={posts.url}>Read More</Card.Link>

                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                </div>
            )
        })}</div>
    )
}

export default Content
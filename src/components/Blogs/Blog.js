import React from "react";
import {useState} from "react";
import "./Blog.css";
import Blogcard from "./Blogcard";

//title , content, img, authorname, ratings
const Blog = () => {
	const data1 = [
		{
			blogTitle: "How can we do UPSC Preparation ?",
			rating: "2.3",
			content:
				"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
			author: "Jigar Shekhat",
		},
		{
			blogTitle: "How can we do UPSC Preparation2 ?",
			rating: "3.3",
			content:
				"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer2.",
			author: "Jigar Shekhat2",
		},
		{
			blogTitle: "How can we do UPSC Preparation3 ?",
			rating: "1.3",
			content:
				"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer3.",
			author: "Jigar Shekhat3",
		},
    {
			blogTitle: "How can we do UPSC Preparation3 ?",
			rating: "5.3",
			content:
				"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer3.",
			author: "Jigar Shekhat3",
		},
    {
			blogTitle: "How can we do UPSC Preparation3 ?",
			rating: "2.3",
			content:
				"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer3.",
			author: "Jigar Shekhat3",
		},
	];
  
  const [data,setData] = useState([]);
  const allBlogsApiCall = React.useCallback( async () => {
    const res = await fetch("http://localhost:4000/getAllBlog", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": 'application/json',
      },
      credentials: "include"
    })

    let data2 = await res.json();
    setData(data2.blogs);
    console.log(data)

},[])

React.useEffect(() => {
  allBlogsApiCall()
},[allBlogsApiCall])
	return (
		<>
<div className="container card-columns">
    <tbody>
    {data.map(function (i,index) {
      return(
        <Blogcard
        data={i}
      />
      );
      })}
</tbody>
</div>
		</>
	);
};

export default Blog;

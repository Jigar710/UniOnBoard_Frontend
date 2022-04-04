import React, { useState } from "react";
import axios from "axios";
const Addreview = ({id}) => {
	const [rating, setRating] = useState(0);
	const [comment, setComment] = useState("");

	const submitData = async (event) => {
		event.preventDefault();

		let formData = new FormData(); //formdata object

		formData.append("rating", rating); //append the values with key, value pair
		formData.append("comment", comment);

		const config = {
			headers: {
				Accept: "application/json",
				"Content-Type": "multipart/form-data",
			},
			withCredentials: true,
		};

		axios
			.put(`http://localhost:4000/review/${id}`, formData, config)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="ArticleContainer">
			<div className="AddArticle">
				<form>
					<h2>Add Review</h2>
					<input
						type="number"
						value={rating}
						name="Rating"
						placeholder="Rating"
						onChange={(e) => setRating(e.target.value)}
					/>
					<textarea
						onChange={(e) => setComment(e.target.value)}
						name="comment"
						placeholder="Enter Content"
						value={comment}
					></textarea>

					<button
						type="submit"
						className="btn btn-style w-100"
						onClick={submitData}
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};
export default Addreview;

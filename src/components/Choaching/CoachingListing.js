import React from "react";
import { useState, useEffect } from "react";
import CoachingListingCard from "./CoachingListingCard";
import "./coachingListing.css";
import {
	Row,
	Col,
	ListGroup,
	Card,
	FormGroup,
	FormControlLabel,
	Form,
	Check,
} from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import Container from "react-bootstrap/Container";
import axios from "../api/axios";
import Coachingdetails from "./Coachingdetails";
import Coachingdet from "./Coachingdet";
import { Checkbox } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";

const CoachingListing = () => {
	const iListing_URL = "/getAllInstitute";
	const [iDetails, setIDetails] = useState([]);
	const [toggle, setToggle] = useState(false);
	const [Iid, setIid] = useState(" ");
	const [sIndex, setSindex] = useState(0);
	const [eIndex, setEindex] = useState(5);
	const [iDet, setIDet] = useState([]);
	const [curcat, setCurcat] = useState([]);
	const [allI, setAllI] = useState([]);
	// console.log(toggle);
	const [menuItems, setMenuItems] = useState([]);
	// setMenuItems([...new Set(iDetails.map((Val) => Val.city))]);
	const filterItem = (Val) => {
		if (curcat.includes(Val)) {
			const index = curcat.indexOf(Val);
			// delete curcat[i];
			if (index > -1) {
				curcat.splice(index, 1); // 2nd parameter means remove one item only
			}
			console.log("cat", curcat);
			if (curcat.length === 0) {
				return setIDetails(allI);
			}
		} else {
			curcat.push(Val);
			console.log("add", curcat);
		}

		const newItem = allI.filter((newVal) => {
			// return newVal.city === curcat;
			return curcat.includes(newVal.city);
		});
		setIDetails(newItem);
	};
	useEffect(() => {
		axios.get(iListing_URL, {}).then((response) => {
			// console.log(response.data.result);
			// setIDetails(response.data.result.Nirma.instituteName);
			// const myRepo = response.data.result;
			setIDetails(response.data.institutes);
			setAllI(response.data.institutes);
			setMenuItems([
				...new Set(response.data.institutes.map((Val) => Val.city)),
			]);
		});
	}, []);

	// console.log(iDetails);
	// console.log(id);

	return (
		<>
			<Container
				className="cListingContainer"
				style={{ display: toggle ? "none" : " " }}
			>
				<Row>
					<Col sm={12} lg={4}>
						<Card className="form-main" style={{ width: "20rem" }}>
							<Form className="filter-main">
								<ListGroup variant="flush">
									<h4
										style={{
											marginTop: "5px",
											fontWeight: "bold",
											alignSelf: "center",
										}}
									>
										Quick Search
									</h4>
									<hr />

									{/* <h5 style={{ fontWeight: "bold" }}>Mode</h5> */}

									{/* <ListGroup.Item>
										{" "}
										<Form.Check type="checkbox" label="Online" />
										<Form.Check type="checkbox" label="Offline" />
									</ListGroup.Item> */}

									<h5
										style={{ marginTop: "18px", fontWeight: "bold" }}
									>
										Location
									</h5>
									{/* <div className="d-flex justify-content-center"> */}
									<ListGroup.Item>
										{menuItems.map((Val, id) => {
											return (
												<>
													<Form.Check
														type="checkbox"
														label={Val}
														value={Val}
														onChange={() => filterItem(Val)}
													/>
													{/* <input
														type="checkbox"
														id={id}
														name={Val}
														value={Val}
														onChange={() => filterItem(Val)}
													/>
													<label for="vehicle1" style={{float:"left"}}> {Val}</label> */}
												</>
											);
										})}
										{/* </div> */}
									</ListGroup.Item>
									<h5
										style={{ marginTop: "18px", fontWeight: "bold" }}
									>
										Ratings
									</h5>
									<ListGroup.Item>
										<Form.Check
											className="labeltag"
											type="checkbox"
											label=""
										/>{" "}
										<label className="label-main">
											<StarRateIcon />
											<StarRateIcon />
											<StarRateIcon />
											<StarRateIcon />
											<StarRateIcon />
										</label>
										<br />
										<Form.Check
											className="labeltag"
											type="checkbox"
											label=""
										/>{" "}
										<label className="label-main">
											<StarRateIcon />
											<StarRateIcon />
											<StarRateIcon />
											<StarRateIcon />
										</label>
										<br />
										<Form.Check
											className="labeltag"
											type="checkbox"
											label=""
										/>{" "}
										<label className="label-main">
											<StarRateIcon />
											<StarRateIcon />
											<StarRateIcon />
										</label>
										<br />
										<Form.Check
											className="labeltag"
											type="checkbox"
											label=""
										/>{" "}
										<label className="label-main">
											<StarRateIcon />
											<StarRateIcon />
										</label>
										<br />
										<Form.Check
											className="labeltag"
											type="checkbox"
											label=""
										/>{" "}
										<label className="label-main">
											<StarRateIcon />
										</label>
									</ListGroup.Item>
								</ListGroup>
							</Form>
						</Card>
					</Col>

					<Col sm={12} lg={8}>
						<Row className="navigatePannel ">
							{/* <Col sm={5} lg={5}></Col> */}

							<Col xs={3} lg={2}>
								<button
									className="navigateButton "
									onClick={() => {
										if (sIndex >= 10) {
											setSindex(sIndex - 10);
											setEindex(eIndex - 10);
										}
									}}
								>
									Previous
								</button>
							</Col>
							<Col className="navigateText" xs={6} lg={2}>
								{" "}
								&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{sIndex + 1} -{" "}
								{eIndex}
							</Col>
							<Col xs={3} lg={2}>
								<button
									className="navigateButton"
									onClick={() => {
										if (eIndex <= 196) {
											setSindex(sIndex + 10);
											setEindex(eIndex + 10);
										}
									}}
								>
									Next
								</button>
							</Col>
						</Row>
						{/* <hr className='navigateHr'></hr> */}
						<div>
							{iDetails.slice(sIndex, eIndex).map((iObj) => (
								<CoachingListingCard
									setToggle={setToggle}
									setIid={setIid}
									key={iObj._id}
									id={iObj._id}
									name={iObj.name}
									address={iObj.address}
									ratings={iObj.rating}
									fees={iObj.fees}
									logo={iObj.logo[0].secure_url}
									acceptedExam={iObj.acceptedExam}
									approvedBy={iObj.approvedBy}
								/>
							))}
						</div>
					</Col>
				</Row>
			</Container>
			<div style={{ display: toggle ? " " : "none" }}>
				<Coachingdet id={Iid} />
			</div>
		</>
	);
};

export default CoachingListing;

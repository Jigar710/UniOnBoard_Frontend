import React from "react";
import "./ClgRecommender.css";
const ClgRecommender = () => {
	return (
		<>
		{/* rank, location, category, branch, collegePreference, maxFee */}
			<div className="login-root">
				<div
					className="box-root padding-top--24 flex-flex flex-direction--column"
					style={{ flexGrow: "1", zIndex: "9" }}
				>
					<div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center"></div>
					<div className="formbg-outer row">
						<div className="formbg col">
							<div className="formbg-inner padding-horizontal--48">
								<h1>Rank Predictor</h1>

								<span className="padding-bottom--15">
									Enter Your Details
								</span>
								<div className="field padding-bottom--24">
									<label>Rank</label>
									<input type="number" name="rank" value={rank} onchange={(e) => setRank(e.target.value)} />
								</div>
								<div className="field padding-bottom--24">
									<div className="grid--50-50">
										<label>Gujcet PR</label>
									</div>
									<input type="text" name="gujcetpr" />
								</div>

								<div className="field padding-bottom--24">
									<input type="submit" name="submit" style={{backgroundColor:"black"}} />
								</div>
							</div>
						</div>
					</div>
					<div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">


					</div>
				</div>
			</div>
		</>
	);
};

export default ClgRecommender;

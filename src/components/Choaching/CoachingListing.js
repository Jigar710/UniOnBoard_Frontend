import React from 'react';
import { useState, useEffect } from 'react';
import CoachingListingCard from './CoachingListingCard';
import './coachingListing.css';
import { Row,Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import axios from '../api/axios';
import Coachingdetails from './Coachingdetails';
import Coachingdet from './Coachingdet';


const CoachingListing = () => {

  const iListing_URL= "/getAllInstitute";
  const [iDetails,setIDetails] = useState([]);
  const [toggle,setToggle] = useState(false);
  const [Iid,setIid] = useState(" ");
  const [sIndex,setSindex] = useState(0);
  const [eIndex,setEindex] = useState(10);
  const [iDet,setIDet] = useState([]);

  // console.log(toggle);

  useEffect(() => {
    axios.get(iListing_URL,{
    }).then((response => {
        // console.log(response.data.result);
        // setIDetails(response.data.result.Nirma.instituteName);
        // const myRepo = response.data.result;
        setIDetails(response.data.institutes);
    }))
},[])

// console.log(iDetails);
// console.log(id);
  

  return (
    <>  

        <Container className='cListingContainer' style={{ display: toggle ? 'none' : ' '}}>
        
            <Row>
                
                <Col sm={12} lg={4}>
                  {/* For the filter purpose */}
                </Col>

                <Col sm={12} lg={8}>
                  
                  <Row className='navigatePannel'>
                    {/* <Col sm={5} lg={5}></Col> */}
                    <Col sm={6} className='navigatePannelSpaceCOl'></Col>
                  
                    <Col className='navigateText' xs={6} lg={2}>Institutes {sIndex + 1} - {eIndex}</Col>
                     
                      <Col xs={3} lg={2}>
                          <button className='navigateButton' onClick={() => {
                            if(sIndex >= 10){
                              setSindex(sIndex - 10);
                              setEindex(eIndex - 10);
                          }
                          }}>
                              Previous
                          </button>
                        </Col>

                        <Col xs={3} lg={2}>
                          <button className='navigateButton' onClick={() => {
                            if(eIndex <= 196){
                              setSindex(sIndex + 10);
                              setEindex(eIndex + 10);
                          }
                          }}>
                              Next
                          </button>
                        </Col>
                      </Row>
                  <hr className='navigateHr'></hr>

                  {
                    iDetails.slice(sIndex,eIndex).map(
                        iObj => (
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
                          )
                      )
                  }
                </Col>
                
            </Row>
        </Container>
        <div style={{ display: toggle ? ' ' : 'none'}}>
          <Coachingdet id={Iid}/>
        </div>
    </>
  );
}

export default CoachingListing
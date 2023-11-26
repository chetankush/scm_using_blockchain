
import React,{useState, useEffect, useContext} from "react";
import {
  Table,
  Form,
  Services,
  Profile,
  CompleteShipment,
  GetShipment,
  StartShipment,
} from "../Components/index.js"

import {TrackingContext} from '../Context/TrackingContext.js'
const index = () => {
  
  const {
   currentUser,
   createShipment,
   getAllShipment,
   completeShipment,
   getShipment,
   startShipment,
   getShipmentsCount,
  } = useContext(TrackingContext);

  //state variables


  const [createShipmentModel, setcreateShipmentModel]= useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [startModal, setStartModal] = useState(false);
  const [completeModal,setCompleteModal] = useState(false);
  const [getModel, setGetModel] = useState(false);
//data state variable

  const [allshipmentsdata, setallShipmentsdata] = useState();
  

  useEffect(() => {

    const getCampaignsData = getAllShipment();

    console.log("data is coming to the table",getCampaignsData);
    return async () => {
      const allData = await getCampaignsData;
      setallShipmentsdata(allData);
      console.log("data is coming to the table",allData);
    }
  
  }, []);


  // useEffect(() => {
  //   const getCampaignsData = getAllShipment();
  
  //   return async () => {
  //     try {
  //       const allData = await getCampaignsData;
  //       console.log("Data received in useEffect:", allData);
  //       setallShipmentsdata(allData);
  //     } catch (error) {
  //       console.error("Error in useEffect:", error);
  //     }
  //   };
  // }, []);
  

return (
  


  <div>
    <Services
    setOpenProfile = {setOpenProfile}
    setCompleteModal = {setCompleteModal}
    setGetModel = {setGetModel}
    setStartModal={setStartModal}
    />
    
    <Table
    setcreateShipmentModel = {setcreateShipmentModel}
    allshipmentsdata = {allshipmentsdata}
    />
    
    <Form
     createShipmentModel = {createShipmentModel}
     createShipment = {createShipment}
     setcreateShipmentModel = {setcreateShipmentModel}
    />

    <Profile
     openProfile={openProfile}
     setOpenProfile={setOpenProfile}
     currentUser={currentUser}
     getShipmentsCount={getShipmentsCount}
    />

    <CompleteShipment
     completeModal = {completeModal}
     setCompleteModal={setCompleteModal}
     completeShipment={completeShipment}
    />

    <GetShipment
     getModel={getModel}
     setGetModel={setGetModel}
     getShipment={getShipment}
    />

    <StartShipment
     startModal={startModal}
     setStartModal={setStartModal}
     startShipment={startShipment}
    />

  </div>
);
};

export default index;

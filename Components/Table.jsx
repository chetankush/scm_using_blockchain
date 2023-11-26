export default ({setcreateShipmentModel, allshipmentsdata})=>{
  
  
  const converTime = (time) => {
    const newTime = new Date(time);
    const dateTime = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(newTime);
    return dateTime;

  };

  console.log("shipment data in memory - ",allshipmentsdata);





 

  return (

    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="itmes-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Create Tracking
          </h3>
          <p className="text-gray-600 mt-2">
            Lorem Ipsum is alskdf ladsjf lakjsdflkj  alsdkf  lakdsjf lasdkjf  alskdj ljjfa asdf a dsf a sdf a sdf asd f s dfsdf  d f s fd s dfsd f d
          </p>
        </div>
        <div className="mt-3 md:mt-0 cursor-pointer">
          <p
            onClick={() => setcreateShipmentModel(true)}
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 md:text-sm rounded-lg md:inline-flex"
          >
            Add Tracking
          </p>
        </div>
      </div>

      <div className="mt-12 shadow-sm border rounded-lg oveflow-x-auto">
        <table
        className="w-full table-auto text-sm text-left">
        <thead className="bg-gray-50 text-gray-600 font-medium border-b">
        <tr>
          <th className="py-3 px-6">Sender</th>
          <th className="py-3 px-6">Recevier</th>
          <th className="py-3 px-6">PickupTime</th>
          <th className="py-3 px-6">Distance</th>
          <th className="py-3 px-6">Price</th>
          <th className="py-3 px-6">Delivery Time</th>
          <th className="py-3 px-6">Paid</th>
          <th className="py-3 px-6">Status</th>
        </tr>
        </thead>

        <tbody className="text-gray-600 divide-y">
         
        {allshipmentsdata?.map((shipment,idx)=>(
          
          <tr key={idx}>
        
          <td className="px-6 py-4 whitespace-nowrap">
          {shipment.sender.slice(0,15)}...
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
          {shipment.receiver.slice(0,15)}...
          </td>
   
          <td className="px-6 py-4 whitespace-nowrap">
          {converTime(shipment.pickupTime)}
          </td>

          <td className="px-6 py-4 whitespace-nowrap">
          {shipment.distance}Km
          </td>

          <td className="px-6 py-4 whitespace-nowrap">
          {shipment.price}
          </td>

          <td className="px-6 py-4 whitespace-nowrap">
          {converTime(shipment.deliveryTime)}
          </td>

          <td className="px-6 py-4 whitespace-nowrap">
          {shipment.isPaid ? "completed": "Not Complete"}
          </td>

          <td className="px-6 py-4 whitespace-nowrap">
        {   shipment.status == 0
          ? "Pending"
          : shipment.status == 1
          ? "IN_TRANSIT"
          : "Delivered"
        }
          </td>

          </tr>
          
        ))}
        
        </tbody>

        </table>
      </div>

      table
      
    </div>

  );
}





  


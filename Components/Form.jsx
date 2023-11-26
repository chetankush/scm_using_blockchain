import React,{useState, useEffect} from "react";

const Form = ({ setcreateShipmentModel, createShipmentModel, createShipment }) => {

  const [shipment, setShipment] = useState({
    receiver: "",
    pickupTime: "",
    distance: "",
    price: "",
  });

  const CreateItem = async () => {
    try {
      await createShipment(shipment);
    } catch (error) {
      console.log("wrong creating item");
    }
  }


  return createShipmentModel ? (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={() => setcreateShipmentModel(false)}>

      </div>

      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w0full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
          <div className="flex justify-end">
            <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
              onClick={() => setcreateShipmentModel(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>

            </button>
          </div>

          <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
            <h4 className="text-lg font-medium text-gray-800">
              Track product, Create Shipment
            </h4>
            <p className="text-[15px] text-gray-600">
              kalsfdkj  alkjdsf   aldskj   dlfkajlf   alkdsjf   alskjdfjaj  lakjdsflk aksdf lkakjds f   lfakjsdkf a  d flkjalkd f  lkjfa  lakdsjfkjjla akjdsflkjla lkajsdlkfj  llkjk llkj lkj  aldkflak aldskfjjajf lakdjf al
            </p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="relative mt-3">customer name
                <input
                  type="text"
                  placeholder="Customer Name"
                  className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rouned-lg"
                  onChange={(e) => {
                    setShipment({
                      ...shipment,
                      receiver: e.target.value,
                    })
                  }}
                />
              </div>

              <div className="relative mt-3">time
                <input
                  type="date"
                  placeholder="pickupTime"
                  className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  onChange={(e) =>
                    setShipment({
                      ...shipment,
                      pickupTime: e.target.value,
                    })
                  }
                />
              </div>
              <div className="relative mt-3">//distance
                <input
                  type="text"
                  placeholder="distance"
                  className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  onChange={(e) =>
                    setShipment({
                      ...shipment,
                      distance: e.target.value,
                    })}
                />
              </div>

              <div className="relative mt-3">//last
                <input
                  type="text"
                  placeholder="price"
                  className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  onChange={(e) =>
                    setShipment({
                      ...shipment,
                      price: e.target.value,
                    })}
                />
              </div>

              <button
                onClick={() => CreateItem()}
                className="block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2"
              >
                Create Shipment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  )
};

export default Form;

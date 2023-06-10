const Popup = ({ close, el }) => {
  return (

    // CONTACT DETAILS POPUP
    <div className="fixed top-0    text-black left-0 w-full h-full  bg-opacity-20 bg-black flex items-center justify-center">
      <div className="bg-white drop-shadow-md rounded-md p-4 w-mid">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-medium">Contact Details</h2>
          <button
            className="text-gray-100 px-2 rounded-md bg-red-500 hover:text-gray-800"
            onClick={() => close()}
          >
            x
          </button>
        </div>
        <div key={el.id} className="bg-gray-300  m-4 p-4 text-black">
          <div className="w-3/4 m-auto  ">
            <img
              className="w-full rounded-full"
              src="https://static.thenounproject.com/png/4035892-200.png"
              alt=""
            />
            <div className="p-4"></div>
          </div>
          <div className="text-center ">
            <p>First Name : {el.first_name}</p>
            <p>Last Name : {el.last_name}</p>
            <p>Mobile : {el.mob}</p>
            <p>Status : {el.status == "active" ? "Active" : "Inactive"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Popup from "../Components/Popup";
import { removeContact } from "../Redux/action";

const Contacts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [singleContact, setSingleContact] = useState({});
  let data = undefined;
  const AllContacts = useSelector((store) => store.contacts);
  const dispatch = useDispatch();
  // console.log(AllContacts)

  const togglePopup = (contact) => {
    setSingleContact(contact);

    setIsOpen(!isOpen);
  };
  useEffect(() => {}, [dispatch, AllContacts.length]);
  return (
    <div className="justify-center pt-16 text-gray-50   p-4  w-full ">
      {/* CREATE CONTACT BUTTON */}
      <button className="rounded bg-sky-600 p-2 m-3 text-2xl">
        <Link to="/contact_form">+ Create Contact</Link>
      </button>

      {/* IN CASE NO CONTACT IS THERE */}
      {AllContacts.length == 0 && (
        <div className=" m-auto w-fit p-4 align-middle text-gray-500 justify-center">
          <svg
            className="m-auto"
            width="280"
            height="280"
            viewBox="0 0 280 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M184.462 197.807L146.371 160.168L138.828 167.801L176.92 205.44L184.462 197.807Z"
              fill="#514e52"
            />
            <path
              d="M199.013 207.92L169.378 178.637C169.213 178.474 168.947 178.476 168.784 178.641L157.568 189.992C157.405 190.157 157.406 190.423 157.571 190.586L187.206 219.869C187.371 220.032 187.637 220.031 187.8 219.866L199.017 208.514C199.18 208.349 199.178 208.083 199.013 207.92Z"
              fill="#514e52"
            />
            <path
              d="M112.611 179.097C138.816 179.097 160.06 157.853 160.06 131.648C160.06 105.442 138.816 84.1982 112.611 84.1982C86.4051 84.1982 65.1613 105.442 65.1613 131.648C65.1613 157.853 86.4051 179.097 112.611 179.097Z"
              fill="#514e52"
            />
            <path
              d="M112.611 171.355C134.54 171.355 152.318 153.578 152.318 131.648C152.318 109.718 134.54 91.9407 112.611 91.9407C90.6811 91.9407 72.9036 109.718 72.9036 131.648C72.9036 153.578 90.6811 171.355 112.611 171.355Z"
              fill="#e9e4eb"
            />
            <path
              d="M192.83 88.7531C181.7 85.1454 169.672 91.247 166.049 102.423C162.442 113.553 168.543 125.581 179.719 129.203C190.895 132.825 202.892 126.664 206.5 115.533C210.108 104.403 203.96 92.3606 192.83 88.7531ZM189.471 99.1145C190.717 99.5183 191.815 100.283 192.626 101.312C193.436 102.34 193.923 103.587 194.024 104.892C194.126 106.198 193.837 107.504 193.195 108.646C192.552 109.787 191.586 110.712 190.417 111.303C189.249 111.894 187.931 112.125 186.631 111.966C185.331 111.807 184.107 111.266 183.115 110.411C182.124 109.556 181.408 108.425 181.06 107.163C180.711 105.9 180.746 104.563 181.158 103.32C182.273 99.8813 186.032 97.9999 189.471 99.1145ZM181.068 125.041C177.37 123.848 174.202 121.407 172.106 118.136C176.029 115.907 180.13 115.286 183.84 116.489C187.55 117.692 190.567 120.569 192.377 124.706C188.76 126.126 184.762 126.244 181.068 125.041Z"
              fill="#514e52"
            />
            <path
              d="M100.191 190.176C98.258 191.163 96.6608 192.701 95.6016 194.595C94.5424 196.49 94.0688 198.656 94.2406 200.82C94.4125 202.983 95.2221 205.047 96.5671 206.751C97.9121 208.455 99.7321 209.721 101.797 210.39C103.862 211.06 106.078 211.101 108.167 210.511C110.256 209.92 112.122 208.723 113.531 207.072C114.939 205.42 115.826 203.388 116.08 201.233C116.333 199.077 115.942 196.895 114.955 194.961C113.629 192.371 111.331 190.413 108.563 189.516C105.795 188.618 102.784 188.856 100.191 190.176ZM102.747 195.184C103.349 194.876 104.029 194.755 104.701 194.834C105.372 194.914 106.005 195.191 106.518 195.63C107.032 196.07 107.403 196.652 107.585 197.303C107.768 197.954 107.752 198.645 107.541 199.287C107.331 199.93 106.934 200.495 106.401 200.911C105.869 201.328 105.225 201.577 104.55 201.626C103.876 201.676 103.202 201.525 102.614 201.191C102.027 200.857 101.551 200.356 101.248 199.752C100.847 198.946 100.779 198.015 101.06 197.16C101.34 196.305 101.947 195.594 102.747 195.183V195.184ZM109.143 207.714C107.358 208.628 105.311 208.893 103.352 208.464C103.97 206.219 105.24 204.496 107.034 203.581C108.827 202.665 110.978 202.615 113.149 203.464C112.347 205.302 110.931 206.804 109.143 207.713V207.714Z"
              fill="#514e52"
            />
          </svg>

          <h1 className="text-3xl">
            Oops!!! <br />
            No Contact Found <br /> Please add contact from <br /> Create
            Contact Button <br /> on Above Right Corner
          </h1>
        </div>
      )}

      {/* CONTACT CARD */}
      <div
        id="contact_list"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {AllContacts.map((el) => {
          return (
            <div
              key={el.id}
              className="bg-gray-800 rounded-lg shadow-md m-4 p-4 text-white"
            >
              <div className="w-3/4 m-auto  ">
                <img
                  className="w-full rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSxIP6s6t2cfIpkbvjYEMmR3cjr1FlgLXsy0EY1ffSzSgNf17ylD9Uvwb5zKpxp5x-hw&usqp=CAU"
                  alt=""
                />
                <div className="p-4">
                  {isOpen && (
                    <Popup close={() => togglePopup(data)} el={singleContact} />
                  )}
                </div>{" "}
                <div className="text-center mb-4">
                  <p>First Name : {el.first_name}</p>
                  <p>Last Name : {el.last_name}</p>
                  <p>
                    Status : {el.status == "active" ? "Active" : "Inactive"}
                  </p>
                </div>
              </div>

              <div className="flex justify-between my-2">
                <Link to={`edit/${el.id}`}>
                  <button className="rounded p-2 bg-green-600 text-black">
                    Edit
                  </button>
                </Link>
                <button
                  className="rounded p-2 bg-white text-black"
                  onClick={() => togglePopup(el)}
                >
                  View Details
                </button>
                <button
                  onClick={() => dispatch(removeContact(el.id))}
                  className="rounded p-2 bg-red-600 text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contacts;

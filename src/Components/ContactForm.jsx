import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addContact } from '../Redux/action';
function ContactForm() {


    const dispatch = useDispatch()

    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        mob: "",
        status: "active"
    })

    const handleChange = (e) => {


        setForm({
            ...form,
            [e.target.name]: e.target.value
        })


    }




    function handleSave() {



        dispatch(addContact(form))

    }

    return (
        <div className="w-1/2 mx-auto my-4 pt-20">
            <h2 className="text-2xl font-bold mb-4">CREATE CONTACT FORM</h2>
            <div className="mb-4">
                <label className="font-bold mb-4 p-2" htmlFor="first-name">
                    First Name
                </label>
                <input
                    className="border border-gray-400 p-2 m-1 rounded-md"
                    id="first-name"
                    type="text"
                    name="first_name"
                    value={form.first_name}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="font-bold mb-4 p-2" htmlFor="last-name">
                    Last Name
                </label>
                <input
                    className="border border-gray-400 p-2 m-1 rounded-md"
                    id="last-name"
                    type="text"
                    name="last_name"
                    value={form.last_name}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-2">
                <label className="font-bold mb-4 p-2" htmlFor="last-name">
                    Mobile Number
                </label>
                <input
                    className="border border-gray-400 p-2 mr-8 rounded-md"
                    id="last-name"
                    type="number"
                    name="mob"
                    minLength='10'
                    value={form.mob}
                    onChange={handleChange}
                />
            </div>
            
 <div className="mb-2 p-4">
                <label className="font-bold mb-4 p-2 mr-2" htmlFor="status">
                    Status
                </label>
                <select
                    className="border border-gray-400 p-4 mr-14 rounded-md"
                    id="status"
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                >
                
                    <option value={'active'}>Active</option>
                    <option value={"inactive"}>Inactive</option>
                </select>
            </div>

            <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mt-5 rounded"
                onClick={handleSave}
            >
                Save Contact
            </button>
        </div>
    );
}


export default ContactForm
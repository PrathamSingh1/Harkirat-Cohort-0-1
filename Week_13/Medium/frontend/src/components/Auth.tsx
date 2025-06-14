import { useState, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom"
import type { SignupInput } from "@prathamsingh/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";


const Auth = ({ type }: {type: "signup" | "signin"}) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: ""
  });

  async function sendRequest() {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs)
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch(e) {
      // alert the user here that the request failed
      alert("Error while signing up")
    }
  }


  return (
    <div className="h-screen flex justify-center items-center font-[Chubbo-Regular]">
        <div className="mb-10">
          <div className="text-black text-4xl font-[900] flex justify-center font-[Chubbo-Bold]">
              Create an account
          </div>
          <div className="flex justify-center leading-15 text-[#666] font-[600]">
              {type === "signin" ? "Don't have an account?" : "Already have an account?"}
              <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
                {type === "signin" ?  "Sign Up" : "Sign In"}
              </Link> 
          </div>
          <div className="mb-5">
              {type === "signup" ? <LabelledInput label="Name" placeholder="Your Name" onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  name: e.target.value
                })
              }} /> : null }
          </div>
          
          <div className="mb-5">
          <LabelledInput label="Username" placeholder="Your@gmail.com" onChange={(e) => {
            setPostInputs(c =>({
              ...c,
              username: e.target.value
            }))
          }} />
          </div>

          <div className="mb-5">
          <LabelledInput label="Password" placeholder="Password" type={"password"} onChange={(e) => {
            setPostInputs(c =>({
              ...c,
              password: e.target.value
            }))
          }} />
          </div>
          <div className="mb-5">
            <button onClick={sendRequest} type="button" className="text-white w-[55vh] bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign Up" : "Sign In"}</button>

          </div>
        </div>
    </div>
  )
}

export default Auth

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string
}

function LabelledInput({ label, placeholder, onChange, type}: LabelledInputType ) {
  return <div>
    <div>
            <label className="block mb-2 text-sm font-bold text-gray-900">{label}</label>
            <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
        </div>
  </div>
}
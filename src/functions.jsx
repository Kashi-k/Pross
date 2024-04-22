import { useState } from "react";

function Userss() {
  //hooks
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");
  const [address, setaddress] = useState("");

  const handleClick = () => {
    console.log('state name', name); // 'state name' | 'Arsalan'
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <h1>User Form</h1>
      <div className="flex flex-col space-y-3">
        <input
          className="border rounded shadow-md p-2 "
          placeholder="name"
          value={name}
          onChange={(event) => 
            setname(event.target.value)
          }
        />
        <input className="border rounded shadow-md p-2 " placeholder="email" />
        <input className="border rounded shadow-md p-2 " placeholder="age" />
        <input
          className="border rounded shadow-md p-2 "
          placeholder="address"
        />
      </div>
      <button
        className="bg-slate-500 py-2 px-3 rounded shadow text-white"
        onClick={handleClick}
      >
        Save
      </button>
    </div>
  );
}
export default Userss;
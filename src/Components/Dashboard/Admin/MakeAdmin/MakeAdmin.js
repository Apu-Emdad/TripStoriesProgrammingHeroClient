import React, { useRef, useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const emailRef = useRef();
  const handleInput = (e) => {
    // console.log(emailRef.current.value);
    const adminEmail = emailRef.current.value;
    setEmail(adminEmail);
  };
  const handleAdminSubmit = (e) => {
    // console.log(email);
    const user = { email };
    const uri = "https://serene-retreat-28688.herokuapp.com/users/admin";
    fetch(uri, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          emailRef.current.value = "";
        }
      });
  };

  return (
    <div className="my-5">
      <h1>Make Admin </h1>

      <input
        className="w-25 p-2"
        placeholder="email"
        type="email"
        name=""
        id=""
        ref={emailRef}
        onBlur={handleInput}
      />
      <button
        className="btn btn-primary "
        type="submit"
        onClick={handleAdminSubmit}
      >
        Make Admin
      </button>
    </div>
  );
};

export default MakeAdmin;

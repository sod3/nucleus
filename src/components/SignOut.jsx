import React from "react";

function SignOut() {
  const handleSignOut = () => {
    alert("Signed Out Successfully!");
  };

  return (
    <div className="signout">
      <h2>Sign Out</h2>
      <p>Are you sure you want to sign out?</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default SignOut;

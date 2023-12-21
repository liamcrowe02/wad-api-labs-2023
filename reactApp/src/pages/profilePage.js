import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/authContext";

const ProfilePage = () => {
  const context = useContext(AuthContext);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [passwordChanged, setPasswordChanged] = useState(false);

  const handleChangePassword = () => {
    // Call the changePassword method from the context
    context.changePassword(currentPassword, newPassword);
    setPasswordChanged(true);
  };

  return (
    <div>
      <h2>My Profile</h2>
      <p>Welcome to your profile page!</p>
      <div>
        {/* Display the user's name if authenticated */}
        {context.isAuthenticated && <p>Username: {context.userName}</p>}
        {/* Password Change Form */}
        <h3>Change Password</h3>
        <label htmlFor="currentPassword">Current Password:</label>
        <input
          type="password"
          id="currentPassword"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />

        <label htmlFor="newPassword">New Password:</label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <label htmlFor="confirmNewPassword">Confirm New Password:</label>
        <input
          type="password"
          id="confirmNewPassword"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />

        <button onClick={handleChangePassword}>Change Password</button>

        {/* Display a message if the password has been changed */}
        {passwordChanged && <p>Password has been changed successfully!</p>}
      </div>
    </div>
  );
};

export default ProfilePage;

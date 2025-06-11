import React, { useEffect, useState } from "react";

export const Profilepage = () => {
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateMsg, setUpdateMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    fetch(import.meta.env.VITE_BACKEND_URL + "/profile", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        setFormData({
          name: data.name || data.title || "",
          email: data.email || "",
          address: data.address || "",
          price: data.price || "",
          calendly_url: data.calendly_url || "",
          picture: data.picture || "",
        });
      })
      .catch((err) => {
        console.error("Profile error:", err);
      });
  }, []);

  useEffect(() => {
  if (updateMsg) {
    const timer = setTimeout(() => setUpdateMsg(""), 4000);
    return () => clearTimeout(timer);
  }
  }, [updateMsg]);

  useEffect(() => {
  if (passwordMsg) {
    const timer = setTimeout(() => setPasswordMsg(""), 4000);
    return () => clearTimeout(timer);
  }
  }, [passwordMsg]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const saveChanges = async () => {
    const token = sessionStorage.getItem("token");

    const body =
      profile.role === "vendor"
        ? {
            title: formData.name,
            email: formData.email,
            address: formData.address,
            price: formData.price,
            calendly_url: formData.calendly_url,
            picture: formData.picture,
          }
        : {
            name: formData.name,
            email: formData.email,
          };

    const res = await fetch(import.meta.env.VITE_BACKEND_URL + "api/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    if (res.ok) {
      setUpdateMsg("Profile updated successfully.");
      setProfile({ ...profile, ...data });
    } else {
      setUpdateMsg(data.msg || "Failed to update profile.");
    }
  };

  const handlePasswordChange = async () => {
    const token = sessionStorage.getItem("token");

    const res = await fetch(
      import.meta.env.VITE_BACKEND_URL + "api/profile/password",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          current_password: currentPassword,
          new_password: newPassword,
        }),
      }
    );

    const data = await res.json();
    if (res.ok) {
      setPasswordMsg("Password updated successfully.");
      setCurrentPassword("");
      setNewPassword("");
    } else {
      setPasswordMsg(data.msg || "Failed to update password.");
    }
  };

  if (!profile) return <p>Loading profile...</p>;

  return (
    <div className="d-flex justify-content-center mt-5">
        <div className="profile-card">
            <h2>Profile Page</h2>
            {updateMsg && <div className="alert alert-info mt-2">{updateMsg}</div>}
            {!editMode ? (
                <div className="mb-4">
                {profile.role === "user" ? (
                    <>
                    <p><strong>Name:</strong> {formData.name}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    </>
                ) : (
                    <>
                    <p><strong>Title:</strong> {formData.name}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Address:</strong> {formData.address}</p>
                    <p><strong>Price:</strong> ${formData.price}</p>
                    <p><strong>Calendly:</strong> {formData.calendly_url}</p>
                    </>
                )}
                <button className="btn btn-danger" onClick={() => setEditMode(true)}>
                    Edit Profile
                </button>
                </div>
            ) : (
                <div className="mb-4">
                {profile.role === "user" ? (
                    <>
                    <label>Name</label>
                    <input
                        name="name"
                        className="form-control mb-2"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <label>Email</label>
                    <input
                        name="email"
                        className="form-control mb-2"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    </>
                ) : (
                    <>
                    <label>Title</label>
                    <input
                        name="name"
                        className="form-control mb-2"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <label>Email</label>
                    <input
                        name="email"
                        className="form-control mb-2"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <label>Address</label>
                    <input
                        name="address"
                        className="form-control mb-2"
                        value={formData.address}
                        onChange={handleChange}
                    />
                    <label>Price</label>
                    <input
                        name="price"
                        type="number"
                        className="form-control mb-2"
                        value={formData.price}
                        onChange={handleChange}
                    />
                    <label>Calendly URL</label>
                    <input
                        name="calendly_url"
                        className="form-control mb-2"
                        value={formData.calendly_url}
                        onChange={handleChange}
                    />
                    </>
                )}
                <button className="btn btn-danger me-2" onClick={saveChanges}>
                    Save Changes
                </button>
                <button className="btn btn-secondary" onClick={() => setEditMode(false)}>
                    Cancel
                </button>
                {updateMsg && <p className="mt-2">{updateMsg}</p>}
                <hr />
                <h5>Change Password</h5>
                <input
                    type="password"
                    placeholder="Current Password"
                    className="form-control mb-2"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="New Password"
                    className="form-control mb-2"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <button className="btn btn-danger" onClick={handlePasswordChange}>
                    Update Password
                </button>
                {passwordMsg && <p className="mt-2">{passwordMsg}</p>}
                </div>
            )}
        </div>
    </div>
  );
};

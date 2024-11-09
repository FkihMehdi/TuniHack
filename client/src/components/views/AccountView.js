import { Avatar, Button, Card, Stack, Tab, Tabs, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { getUser, updateUser } from "../../api/users";
import { isLoggedIn } from "../../helpers/authHelper";
import ErrorAlert from "../ErrorAlert";
import Loading from "../Loading";
import Navbar from "../Navbar";
import GridLayout from "../GridLayout";

const AccountView = () => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [tab, setTab] = useState("personal");
  const user = isLoggedIn();
  const [error, setError] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const fetchUser = async () => {
    setLoading(true);
    const data = await getUser(params);
    setLoading(false);
    if (data.error) {
      setError(data.error);
    } else {
      setUserData(data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      name: e.target.name.value,
      email: e.target.email.value,
      biography: e.target.biography.value,
    };

    const response = await updateUser(user, updatedData);
    if (response.error) {
      setError(response.error);
    } else {
      setUserData(response);
    }
  };

  const handlePasswordChange = (e) => {
    // Password change logic goes here
    // e.g., navigate to password change page or display password modal
  };

  useEffect(() => {
    fetchUser();
  }, [location]);

  const handleTabChange = (event, newTab) => {
    setTab(newTab);
  };

  return (
    <>
      <Navbar />
      <GridLayout
        left={
          <Card sx={{ padding: 2, width: "100%" }}>
            <Typography variant="h4">Account Settings</Typography>
            <Tabs value={tab} onChange={handleTabChange} sx={{ marginTop: 2 }}>
              <Tab label="Personal Info" value="personal" />
              <Tab label="Password" value="password" />
              <Tab label="Preferences" value="preferences" />
              <Tab label="Membership" value="membership" />
            </Tabs>

            {loading ? (
              <Loading />
            ) : (
              <>
                {tab === "personal" && (
                  <form onSubmit={handleSubmit}>
                    <Stack spacing={2}>
                      <Avatar
                        alt={userData?.name}
                        src={userData?.profilePicture}
                        sx={{ width: 100, height: 100, alignSelf: "center" }}
                      />
                      <TextField
                        label="Name"
                        name="name"
                        defaultValue={userData?.name}
                        fullWidth
                      />
                      <TextField
                        label="Email"
                        name="email"
                        type="email"
                        defaultValue={userData?.email}
                        fullWidth
                      />
                      <TextField
                        label="Biography"
                        name="biography"
                        multiline
                        rows={4}
                        defaultValue={userData?.biography}
                        fullWidth
                      />
                      <Button variant="contained" type="submit" sx={{ marginTop: 2 }}>
                        Save Changes
                      </Button>
                    </Stack>
                  </form>
                )}

                {tab === "password" && (
                  <Card sx={{ padding: 2, marginTop: 2 }}>
                    <Typography variant="h6">Change Password</Typography>
                    <Button
                      variant="contained"
                      sx={{ marginTop: 2 }}
                      onClick={handlePasswordChange}
                    >
                      Change Password
                    </Button>
                  </Card>
                )}

                {tab === "preferences" && (
                  <Card sx={{ padding: 2, marginTop: 2 }}>
                    <Typography variant="h6">Preferences</Typography>
                    <Typography variant="body2">
                      Here you can manage your account preferences.
                    </Typography>
                    
                    {                 <Stack spacing={2}>
                    <Typography variant="body2">Theme</Typography>
                    <TextField
                        select
                        label="Theme"
                        value={userData?.preferences?.theme || "light"}
                        onChange={(e) => setUserData({ ...userData, preferences: { ...userData.preferences, theme: e.target.value } })}
                        SelectProps={{
                            native: true,
                        }}
                        fullWidth
                    >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </TextField>

                    <Typography variant="body2">Language</Typography>
                    <TextField
                        select
                        label="Language"
                        value={userData?.preferences?.language || "en"}
                        onChange={(e) => setUserData({ ...userData, preferences: { ...userData.preferences, language: e.target.value } })}
                        SelectProps={{
                            native: true,
                        }}
                        fullWidth
                    >
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        {/* Add more language options as needed */}
                    </TextField>

                    <Button variant="contained" sx={{ marginTop: 2 }} onClick={handleSubmit}>
                        Save Preferences
                    </Button>
                </Stack>}

                  </Card>
                )}
                 {tab === "membership" && (
                  <Card sx={{ padding: 2, marginTop: 2 }}>
                    <Typography variant="h6">Memberships</Typography>
                    <Typography variant="body2">
                      Here you can manage your Memberships.
                    </Typography>
                    { <Stack spacing={2}>
                    {userData?.memberships?.map((membership, index) => (
                        <Card key={index} sx={{ padding: 2 }}>
                            <Typography variant="h6">{membership.name}</Typography>
                            <Typography variant="body2">{membership.description}</Typography>
                            <Button
                                variant="contained"
                                sx={{ marginTop: 2 }}
                                onClick={() => navigate(`/manage-membership/${membership.id}`)}
                            >
                                Manage Membership
                            </Button>
                        </Card>
                    ))}
                </Stack> }
               
                
                
                  </Card>
                )}
              </>
            )}
            {error && <ErrorAlert error={error} />}
          </Card>
        }
        right={
          <Card sx={{ padding: 2 }}>
            <Typography variant="h5">Notifications</Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              Manage your notification preferences.
            </Typography>
            {/* Add notification settings content here */}
          </Card>
        }
      />
    </>
  );
};

export default AccountView;

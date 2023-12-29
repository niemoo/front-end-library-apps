'use client';

import { useState } from 'react';
import axios from 'axios';
import { Button, Dialog, Card, CardBody, CardFooter, Typography } from '@material-tailwind/react';
import { FaUserEdit } from 'react-icons/fa';

const TableEdit = ({ oldEmail, oldUsername, oldName, oldPassword, userID, onUpdateTable }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const [newEmail, setNewEmail] = useState();
  const [newUsername, setNewUsername] = useState();
  const [newName, setNewName] = useState();
  const [newPassword, setNewPassword] = useState();

  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setNewUsername(e.target.value);
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleEditDataChange = async () => {
    try {
      const res = await axios.put('http://localhost:3300/users/update', { email: newEmail || oldEmail, username: newUsername || oldUsername, name: newName || oldName, password: newPassword || oldPassword, users_id: userID });

      window.location.reload();
      //   if (res.data.payload.status_code === 200) {
      //     // Update successful, trigger a re-fetch of user data by calling the callback
      //     onUpdateTable();
      //   }
    } catch (err) {
      console.error(`Error : ${err}`);
    }
  };

  return (
    <>
      <Button onClick={handleOpen} className="bg-red-500">
        <FaUserEdit />
      </Button>
      <Dialog size="xs" open={open} handler={handleOpen} className="bg-transparent shadow-none">
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Update User Data
            </Typography>
            {/* <Typography className="mb-3 font-normal" variant="paragraph" color="gray">
              Enter your email and password to Sign In.
            </Typography> */}
            <Typography className="-mb-2" variant="h6">
              Email
            </Typography>
            <input type="email" label="Email" placeholder={oldEmail} className="p-2 border border-black rounded-lg" onChange={handleEmailChange} />
            <Typography className="-mb-2" variant="h6">
              Username
            </Typography>
            <input label="Username" className="p-2 border border-black rounded-lg" placeholder={oldUsername} onChange={handleUsernameChange} />
            <Typography className="-mb-2" variant="h6">
              Full Name
            </Typography>
            <input label="Full Name" className="p-2 border border-black rounded-lg" placeholder={oldName} onChange={handleNameChange} />
            <Typography className="-mb-2" variant="h6">
              Password
            </Typography>
            <input type="password" label="Password" className="p-2 border border-black rounded-lg" placeholder={oldPassword} onChange={handlePasswordChange} />
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              onClick={() => {
                handleOpen();
                handleEditDataChange();
              }}
              fullWidth
            >
              Update
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
};

export default TableEdit;

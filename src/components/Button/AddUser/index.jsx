'use client';

import { useState } from 'react';
import axios from 'axios';
import { Button, Dialog, Card, CardBody, CardFooter, Typography, Input } from '@material-tailwind/react';
import { IoIosAddCircle } from 'react-icons/io';

const AddUser = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleAddDataUser = async () => {
    try {
      if (!email || !username || !name || !password) {
        alert('Please fill in all required fields.');
        return;
      }
      const res = await axios.post('http://localhost:3300/register', { email: email, username: username, name: name, password: password });

      window.location.reload();
    } catch (err) {
      console.error(`Error : ${err}`);
    }
  };

  return (
    <>
      <Button onClick={handleOpen} className="bg-green-600 hover:bg-green-400 flex gap-2">
        <IoIosAddCircle className="text-base" />
        <h1>Add New User</h1>
      </Button>
      <Dialog size="xs" open={open} handler={handleOpen} className="bg-transparent shadow-none">
        <form className="bg-white mx-auto w-full max-w-[24rem] flex flex-col gap-4 p-10 rounded-xl">
          <Typography variant="h4" color="blue-gray">
            Add New User
          </Typography>
          <Typography className="-mb-2" variant="h6">
            Email
          </Typography>
          <Input type="email" label="Email" className="p-2 border border-black rounded-lg" onChange={handleEmailChange} />
          <Typography className="-mb-2" variant="h6">
            Username
          </Typography>
          <Input label="Username" className="p-2 border border-black rounded-lg" onChange={handleUsernameChange} />
          <Typography className="-mb-2" variant="h6">
            Full Name
          </Typography>
          <Input label="Full Name" className="p-2 border border-black rounded-lg" onChange={handleNameChange} />
          <Typography className="-mb-2" variant="h6">
            Password
          </Typography>
          <Input type="password" label="Password" className="p-2 border border-black rounded-lg" onChange={handlePasswordChange} />
          <Button
            className="bg-green-700 hover:bg-green-500"
            onClick={() => {
              handleOpen();
              handleAddDataUser();
            }}
            fullWidth
          >
            Submit
          </Button>
        </form>
        {/* <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Input />
          </CardBody>
          <CardFooter className="pt-0"></CardFooter>
        </Card> */}
      </Dialog>
    </>
  );
};

export default AddUser;

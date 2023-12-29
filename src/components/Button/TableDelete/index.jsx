import React from 'react';
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react';
import axios from 'axios';

const TableDelete = ({ userID }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const handleDeleteData = async () => {
    try {
      const res = await axios.delete(`http://localhost:3300/users/delete/${userID}`);
      window.location.reload();
    } catch (err) {
      console.error(`Error : ${err}`);
    }
  };

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Delete User Data</DialogHeader>
        <DialogBody>Are you sure you want to delete this user?</DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => {
              handleOpen();
              handleDeleteData();
            }}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default TableDelete;

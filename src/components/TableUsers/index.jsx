'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Typography } from '@material-tailwind/react';
import TableDelete from '../Button/TableDelete';
import TableEdit from '../Button/TableEdit';

const TableUsers = () => {
  const [users, setUsers] = useState();

  const TABLE_HEAD = ['Email', 'Username', 'Full Name', ''];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const resUsers = await axios.get('http://localhost:3300');
        setUsers(resUsers.data.payload.datas);
      } catch (err) {
        console.error(`Error : ${err}`);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Card className="h-full w-full md:overflow-hidden overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => {
              const isLast = users.length - 1;
              const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

              return (
                <tr key={user.users_id}>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {user.email}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {user.username}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {user.name}
                    </Typography>
                  </td>
                  <td className={`${classes} flex gap-2`}>
                    <TableEdit oldEmail={user.email} oldUsername={user.username} oldName={user.name} oldPassword={user.password} userID={user.users_id} />
                    <TableDelete userID={user.users_id} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>

      {/* <table className="text-black table-auto border-collapse border-spacing-2 border border-black">
        <thead>
          <tr>
            <th className="w-56 p-3">Email</th>
            <th className="w-44 p-3">Username</th>
            <th className="w-44 p-3">Full Name</th>
            <th className="w-44 p-3"></th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.users_id}>
              <th className="w-56 text-left p-1">{user.email}</th>
              <th className="w-44 text-left p-1">{user.username}</th>
              <th className="w-44 text-left p-1">{user.name}</th>
              <th className="w-44 text-left p-1 flex items-center justify-center gap-3">
              </th>
            </tr>
          ))}
        </tbody>
      </table> */}
    </>
  );
};

export default TableUsers;

// import { Card, Typography } from "@material-tailwind/react";

// const TABLE_HEAD = ["Name", "Job", "Employed", ""];

// const TABLE_ROWS = [
//   {
//     name: "John Michael",
//     job: "Manager",
//     date: "23/04/18",
//   },
//   {
//     name: "Alexa Liras",
//     job: "Developer",
//     date: "23/04/18",
//   },
//   {
//     name: "Laurent Perrier",
//     job: "Executive",
//     date: "19/09/17",
//   },
//   {
//     name: "Michael Levi",
//     job: "Developer",
//     date: "24/12/08",
//   },
//   {
//     name: "Richard Gran",
//     job: "Manager",
//     date: "04/10/21",
//   },
// ];

// export function DefaultTable() {
//   return (

//   );
// }

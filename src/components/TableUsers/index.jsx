'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import TableDelete from '../Button/TableDelete';
import TableEdit from '../Button/TableEdit';

const TableUsers = () => {
  const [users, setUsers] = useState();

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

  const handleUpdateTable = () => {
    // Function to re-fetch user data and update the table
    fetchUsers();
  };

  return (
    <table className="text-white md:table-auto table-fixed border-collapse border-spacing-2 border border-white">
      <thead>
        <tr>
          <th className="w-56 border p-3">Email</th>
          <th className="w-44 border p-3">Username</th>
          <th className="w-44 border p-3">Full Name</th>
          <th className="w-44 border p-3"></th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => (
          <tr key={user.users_id}>
            <th className="w-56 text-left border p-1">{user.email}</th>
            <th className="w-44 text-left border p-1">{user.username}</th>
            <th className="w-44 text-left border p-1">{user.name}</th>
            <th className="w-44 text-left border p-1">
              <TableEdit oldEmail={user.email} oldUsername={user.username} oldName={user.name} oldPassword={user.password} userID={user.users_id} onUpdateTable={handleUpdateTable} />
              <TableDelete userID={user.users_id} />
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableUsers;

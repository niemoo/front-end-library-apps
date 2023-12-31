import AddUser from '@/components/Button/AddUser';
import TableUsers from '@/components/TableUsers';

const UsersLists = () => {
  return (
    <main className="max-w-screen-md h-full mx-auto md:mt-40 mb-20 p-2 md:p-0">
      <h1 className="text-4xl font-semibold text-black">List of Users</h1>
      <div className="flex justify-end my-4">
        <AddUser />
      </div>
      <div className="flex items-center justify-center">
        <TableUsers />
      </div>
    </main>
  );
};

export default UsersLists;

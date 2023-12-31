import AddUser from '@/components/Button/AddUser';
import TableUsers from '@/components/TableUsers';

const UsersLists = () => {
  return (
    <main className="max-w-screen-md h-full mx-auto md:mt-40">
      <div className="flex justify-end mb-4">
        <AddUser />
      </div>
      <div className="flex items-center justify-center">
        <TableUsers />
      </div>
    </main>
  );
};

export default UsersLists;

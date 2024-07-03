import React from 'react';
import UserTable from './UserTable';
import Link from 'next/link';

interface props {
  searchParams: { sortOrder: string };
}

const UsersPage = ({ searchParams: { sortOrder } }: props) => {
  return (
    <>
      <h1>users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;

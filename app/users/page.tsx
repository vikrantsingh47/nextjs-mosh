import React from 'react';
import UserTable from './UserTable';
import Link from 'next/link';
import { Metadata } from 'next';

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

export async function generateMetadata(): Promise<Metadata> {
  // fetch dynamic data from database or url

  return {
    title: 'dynamic title',
    description: 'dynamic description',
  };
}

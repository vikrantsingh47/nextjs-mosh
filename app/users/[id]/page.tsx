import { notFound } from 'next/navigation';
import React from 'react';

interface props {
  params: { id: number };
}

const UserDetailPage = ({ params: { id } }: props) => {
  if (id > 10) notFound();
  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;

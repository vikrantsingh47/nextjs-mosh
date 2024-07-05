import Image from 'next/image';
import Link from 'next/link';
import ProductCard from './components/ProductCard';
import { auth } from '@/auth';

export default async function Home() {
  const session = await auth();
  return (
    <main>
      <h1>Hello {session && <span>{session.user?.name}</span>}</h1>
      <Link href={'/users'}>user</Link>
      <ProductCard />
    </main>
  );
}

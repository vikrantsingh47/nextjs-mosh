import Image from 'next/image';
import Link from 'next/link';
import ProductCard from './components/ProductCard';
import { auth } from '@/auth';
import { Metadata } from 'next';

export default async function Home() {
  const session = await auth();
  return (
    <main>
      <h1>Hello {session && <span>{session.user?.name}</span>}</h1>
      <Image
        src="https://bit.ly/react-cover"
        alt="image"
        width={300}
        height={170}
        fill={false}
        className="border-y-2"
        quality={75}
      />
      <Link href={'/users'}>user</Link>
      <ProductCard />
    </main>
  );
}

export const metadata: Metadata = {
  title: 'This title will override root layout title',
  description: 'page description',
};

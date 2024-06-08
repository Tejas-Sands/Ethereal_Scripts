import { getServerSession } from 'next-auth';
import Form from './form';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  const sessionData = await getServerSession();
  if (sessionData) {
    console.log(sessionData)
    redirect('/');
  }
  return <>
  <Form />
  </>
}
"use client";
import { useSearchParams } from 'next/navigation';
import EditUserForm from './_components/EditUserForm';
export default function Page() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    return <EditUserForm id={id} />;
}

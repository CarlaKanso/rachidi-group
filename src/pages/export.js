import PublicLayout from '@/components/layout/PublicLayout';
import useAuth from '@/hooks/useAuth';
import { useAmp } from 'next/amp';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function Export() {
    const { user, loading } = useAuth()
    const router = useRouter()
    useEffect(() => {
        if (user == null && !loading) {
            router.replace("/")
        }
    }, [user, router, loading])

    return (
        <PublicLayout>
            <h1>Export</h1>
        </PublicLayout>
    )
};

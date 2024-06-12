import { useRouter } from 'next/router';
import { useEffect } from 'react';

const withAuth = (WrappedComponent: React.ComponentType, role: string) => {
  return (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const userRole = localStorage.getItem('role');
      if (!userRole || userRole !== role) {
        router.push('/login');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;

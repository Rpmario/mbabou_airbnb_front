import { useRouter } from 'next/router';
import { useEffect } from 'react';

function Deconnexion() {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem('token');
    router.push('/login');
    //window.location.href = window.location.href;
  }, []);

  return <div>Logout...</div>;
}

export default Deconnexion;

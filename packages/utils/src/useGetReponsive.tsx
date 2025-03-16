import { useEffect, useState } from 'react';

export default function useGetReponsive(): number {
  const [size, setSize] = useState<number>(window.innerWidth * 0.0208);

  useEffect(() => {
    const handleResize = () => setSize(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

import { useState } from 'react';

export default function useError() {
  const [error, setError] = useState<Error | null>(null);
  if (error) {
    throw error;
  }

  return { setError };
}

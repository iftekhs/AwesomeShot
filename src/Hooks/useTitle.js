import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - AwesomeShot`;
  }, [title]);
};

export default useTitle;

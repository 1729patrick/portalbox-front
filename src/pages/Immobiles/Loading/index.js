import React, { useEffect, useState } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

import { Container } from './styles';

export default function Loading() {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    const progress = () => {
      setCompleted(oldCompleted => {
        if (oldCompleted >= 100) {
          return 0;
        }
        return oldCompleted + 1;
      });
    };

    const interval = setInterval(progress, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <LinearProgress variant="determinate" value={completed} />
    </Container>
  );
}

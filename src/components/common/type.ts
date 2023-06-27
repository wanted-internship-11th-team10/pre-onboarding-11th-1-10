import { ReactElement } from 'react';

export interface AuthProps {
  component: () => ReactElement;
  redirectURL: string;
}

import { useContext } from 'react';
import { LaunchContext, LaunchContextValue } from '../contexts/launch-context';

export function useLaunchContext(): LaunchContextValue {
  const context = useContext(LaunchContext)
  return context;
}

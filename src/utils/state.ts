import { useRoute } from '@react-navigation/native';
import {useState} from 'react';

export const createState = <T>(values: T) => {
  const [state, setStateValue] = useState<T>(values);
  const setState = (value: Partial<T>) => {
    setStateValue({
      ...state,
      ...value,
    });
  };
  return {state, setState};
};

export const useParams = <T>(def: T) => {
  const { params } = useRoute();
  return params ? params as unknown as T : def;
}

export const useRouteName = () => {
  return useRoute().name;
}
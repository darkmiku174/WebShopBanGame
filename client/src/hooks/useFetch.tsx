import axios from "axios";
import { useEffect, useState } from "react";
import { promiseInterface } from "../types/promiseType";

export const useFetch = (url: string) => {
  const promiseValue: promiseInterface = {
    data: null,
    loading: true,
    error: null,
  };

  const [state, setState] = useState(promiseValue);

  useEffect(() => {
    setState((state) => ({ ...state, loading: true }));
    axios
      .get(url)
      .then((response) => setState({ data: response.data, loading: false }))
      .catch((error) => setState((state) => ({ ...state, error: error })));
  }, [url, setState]);

  return state;
};

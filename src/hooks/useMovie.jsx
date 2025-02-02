import { useEffect, useState } from "react";
import { movieAPIInstance } from "../api";

const useMoview = () => {
  const [result, setResult] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    movieAPIInstance
      .get(`discover/movie?page=${page}`)
      .then((response) =>
        setResult((prev) => [...prev, ...response.data.results])
      )
      .finally(() => setLoading(false));
  }, [page]);

  const nextPage = () => {
    setPage(page => page + 1)
  }

  return { result, loading, nextPage };
};

export default useMoview

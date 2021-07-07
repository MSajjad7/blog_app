import { cleanup } from "@testing-library/react";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      const abortCont = new AbortController() // to use the stop the fetch
    setTimeout(() => {
      fetch(url,{signal:abortCont.signal})
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for the resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
        if(err.name==="AbortError"){
            console.log('fetch Aborted')
        }
        else{
            setIsPending(false);
            setError(err.message);
        }
        });
    }, 1000);

    return () => abortCont.abort()
    // use effect fires / run the every render or if state changes useEffect function load
    //in use effect after curley braces "[]" this empty array is basically a dependency, useEffect fires the first render if we add depdendancy then it will act like that
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;

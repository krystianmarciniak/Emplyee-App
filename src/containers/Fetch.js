import React, { useState, useEffect } from "react";

function useFetch(uri) {
  const [employees, setEmployees] = useState([]);

  const [error, setError] = useState(); // Obiekt error, dla monitorowania błedów
  const [loading, setLoading] = useState(false);
  // Gdy żądanie ma status w toku w elemencie h1 wyświetlany jest jest komunikat wczytywanie

  useEffect(() => {
    if (!uri) return;
    fetch(uri)
      // .then(data => data.json())
      // .then(setData)

      .then(res => res.json())
    .then(res => {
      console.log(res.data);
      console.log(res.status);

      const employeeArray = res.data;
      console.log(employeeArray, "employeeArray")
      // W stałej employees zapisuje to co nam zwraca ta metoda
      setEmployees(employeeArray);
      // Teraz pracownicy z  początkowego stanu tablicy 'useState' employees -> zostają przypsiani do stałej employeeArray
    })

      .then(() => setLoading(false))
      .catch(setError)
      .catch(error => console.log(error));
  }, [uri]);

  return {
    loading,
    // data,
    error
  };
}

export default function Fetch({
  uri,
  // renderSuccess,
  loadingFallback = <p>loading...</p>,
  renderError = error => <pre>{JSON.stringify(error, null, 2)}</pre>
}) {
  const { loading, error } = useFetch(uri);
  if (loading) return loadingFallback;
  if (error) return renderError(error);
  // if (data) return renderSuccess({ data });
}
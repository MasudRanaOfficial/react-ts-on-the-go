import { Suspense } from 'react';
import './App.css'
import type { CountryType } from './types/type';

// step 01: create a promise to load data
const countriesPromise = async():Promise<CountryType[]> => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  const data = await res.json();
  return data.countries;
}

function App() {

  return (
    <>
      
    <h2>World on the Go..</h2>
    <Suspense fallback={<p>Nadir Loading...</p>}>

    </Suspense>
      
    </>
  )
}

export default App

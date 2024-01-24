import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

// const URL = "https://api.wheretheiss.at/v1/satellites/25544";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ISSTracker() {
const { data, error,mutate, isLoading } = useSWR(
"https://api.wheretheiss.at/v1/satellites/25544", fetcher
 );
  // const { data, error, mutate } = useSWR('https://api.wheretheiss.at/v1/satellites/25544', { refreshInterval: 5000 });

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const { latitude, longitude } = data;

  

  if(!data){
    return
  }
  function onRefresh(){
    mutate()
  }

  return (
    <main>
      {/* <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        // onRefresh={getISSCoords}
        onRefresh={Controls}
      /> */}
       
      <Map latitude={latitude} longitude={longitude} />
      <Controls onRefreshProp={onRefresh} latitude={latitude} longitude={longitude} />
    
    </main>
  );
}
import React from "react";
import ReactMapboxGl, {
  Layer,
  Feature
} from 'react-mapbox-gl';

const Home = (props) => {
  // Implement react map box here.
  const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1Ijoic2FpdGFtMTk5MCIsImEiOiJja2EyaWR1dDgwYXJwM21ta2czMWlnNTBwIn0.C9ZYdD2yjfSfdzd2hzqVsA'
    
  });
  return (
    <div>
      
      <Map
  style="mapbox://styles/mapbox/streets-v9"
  containerStyle={{
    height: '100vh',
    width: '100vw'
  }}
>
  <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
    <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
  </Layer>
</Map>;
    </div>
  );
};

export default Home;

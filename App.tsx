import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import axios from "./axios";

// Object {
//   "climate": "arid",
//   "created": "2014-12-09T13:50:49.641000Z",
//   "diameter": "10465",
//   "edited": "2014-12-20T20:58:18.411000Z",
//   "films": Array [
//     "http://swapi.dev/api/films/1/",
//     "http://swapi.dev/api/films/3/",
//     "http://swapi.dev/api/films/4/",
//     "http://swapi.dev/api/films/5/",
//     "http://swapi.dev/api/films/6/",
//   ],
//   "gravity": "1 standard",
//   "name": "Tatooine",
//   "orbital_period": "304",
//   "population": "200000",
//   "residents": Array [
//     "http://swapi.dev/api/people/1/",
//     "http://swapi.dev/api/people/2/",
//     "http://swapi.dev/api/people/4/",
//     "http://swapi.dev/api/people/6/",
//     "http://swapi.dev/api/people/7/",
//     "http://swapi.dev/api/people/8/",
//     "http://swapi.dev/api/people/9/",
//     "http://swapi.dev/api/people/11/",
//     "http://swapi.dev/api/people/43/",
//     "http://swapi.dev/api/people/62/",
//   ],
//   "rotation_period": "23",
//   "surface_water": "1",
//   "terrain": "desert",
//   "url": "http://swapi.dev/api/planets/1/",
// }

export default function App() {
  const [planet, setPlanet] = React.useState<any>(null);

  React.useEffect(() => {
    axios.get('planets/1/').then(resp => {
        setPlanet(resp.data)
      })
  }, [])

  return (
    <View style={styles.container}>
      <Text>Name: {planet?.name ?? "-"}</Text>
      <Text>Climate: {planet?.climate ?? "-"}</Text>
      <Text>Terrain: {planet?.terrain ?? "-"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

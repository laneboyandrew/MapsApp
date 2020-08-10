import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import MapView from "react-native-maps";
import {StyleSheet, View, FlatList, Dimensions} from 'react-native';
import {Marker} from 'react-native-maps';


const MapRoute = () =>
    <MapView style={styles.container}
             initialRegion={{
                 latitude: 53.309674,
                 longitude: 49.713403,
                 latitudeDelta: 0.0922,
                 longitudeDelta: 0.0421,
             }}>
        <MapView.Marker coordinate={{
            latitude: 39.78825,
            longitude: -122.4324,
            title :"ZAEBIS",
            description :"description"
        }}
        />
    </MapView>

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const MyComponent = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'map', title: 'Map', icon: 'map'},
        {key: 'albums', title: 'Albums', icon: 'album'},
        {key: 'recents', title: 'Recents', icon: 'history'},
    ]);

    const renderScene = BottomNavigation.SceneMap({
        map: MapRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
    });

    return (
        <BottomNavigation
            navigationState={{index, routes}}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};
const styles = StyleSheet.create({
    container: {
        height: '100%'
    }
})

export default MyComponent;



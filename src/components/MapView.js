import React, {useState} from 'react';
import {View, Text, Dimensions, TouchableOpacity, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {AntDesign} from '@expo/vector-icons';

export default ({latitude, longitude, name, location}) => {
    const windowWidth = Dimensions.get('window').width;
    const [showMap, setShowMap] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <TouchableOpacity onPress={() => setShowMap(!showMap)}>
                    <View style={styles.subButton}>
                    <Text style={{fontWeight: 'bold'}}>
                        {!showMap ? 'Show' : 'Hide'} map
                    </Text>
                    <AntDesign name={!showMap ? 'down' : 'up'} size={14} style={{marginTop: 4, marginLeft: 4}}/>
                    </View>
                </TouchableOpacity>
            </View>
            {showMap &&
            <MapView
                style={styles.mapView}
                initialRegion={{
                    latitude,
                    longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{
                        latitude,
                        longitude
                    }}
                    title={name}
                    description={location.address1}
                />
            </MapView>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    button: {
        marginBottom: 10,
        justifyContent: 'center'
    },
    subButton: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    mapView: {
        width: Dimensions.get('window').width,
        height: 350
    }
});

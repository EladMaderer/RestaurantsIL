import React, {useState} from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {AntDesign} from '@expo/vector-icons';

export default ({latitude, longitude, name, location}) => {
    const windowWidth = Dimensions.get('window').width;
    const [showMap, setShowMap] = useState(false);
    return (
        <View style={{alignItems: 'center'}}>
            <View style={{marginBottom: 10, justifyContent: 'center'}}>
                <TouchableOpacity onPress={() => setShowMap(!showMap)}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold'}}>
                        {!showMap ? 'Show' : 'Hide'} map
                    </Text>
                    <AntDesign name={!showMap ? 'down' : 'up'} size={14} style={{marginTop: 4, marginLeft: 4}}/>
                    </View>
                </TouchableOpacity>
            </View>
            {showMap &&
            <MapView
                style={{width: windowWidth, height: 350}}
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

import React, {useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, Image, ActivityIndicator, Dimensions} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {Entypo} from '@expo/vector-icons';
import {useGetRestaurant} from '../hooks/useResults';
import {globalStyles} from '../utilities/globalStyles';
import MapView from '../components/MapView';

const ResultsShow = ({route}) => {
    const {findRestaurantApi, results, isLoading} = useGetRestaurant();
    const {id} = route.params;
    const {photos, categories, coordinates, name, location} = results;
    useEffect(() => {
        findRestaurantApi(id);
    }, []);

    const renderCategories = () => categories.map((category, index) => {
        return (
            <View key={category.title} style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.textBig}>{category.title}</Text>
                {index !== categories.length-1 && <Entypo name="dot-single" size={32}/>}
            </View>
        )
    });

    return (
        <View style={styles.container}>
            {isLoading ? <View style={globalStyles.centerView}>
                    <ActivityIndicator color="#0000ff" size='large'/>
                </View> :
                <>
                    <SliderBox
                        images={photos}
                        autoplay
                        circleLoop
                        dotColor="#f3f3f3"
                        inactiveDotColor="#dddddd"
                        disableOnPress
                        dotStyle={{
                            width: 15,
                            height: 15,
                            borderRadius: 15,
                        }}
                    />
                    <View style={{alignItems: 'center', marginVertical: 15, paddingHorizontal: 8}}>
                        <Text style={{textAlign: 'center'}}>{renderCategories()}</Text>
                    </View>
                    <MapView
                        latitude={coordinates.latitude}
                        longitude={coordinates.longitude}
                        name={name}
                        location={location}
                    />
                </>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textBig: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default ResultsShow;

import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ActivityIndicator, ScrollView, Dimensions} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {Entypo} from '@expo/vector-icons';
import {useGetRestaurant} from '../hooks/useResults';
import {globalStyles} from '../utilities/globalStyles';
import MapView from '../components/MapView';
import Reviews from "../components/Reviews";

const ResultsShow = ({route}) => {
    const screenHeight = Dimensions.get('window').height;
    const {findRestaurantApi, results, reviews, isLoading} = useGetRestaurant();
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
        <View style={globalStyles.centerView}>
        <ScrollView showsVerticalScrollIndicator={false}>
            {isLoading ?
                <View style={{height: screenHeight, justifyContent: 'center'}}>
                    <ActivityIndicator color="#0000ff" size='large'/>
                </View>
                 :
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
                    <Reviews reviews={reviews} />
                </>
            }
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    textBig: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default ResultsShow;

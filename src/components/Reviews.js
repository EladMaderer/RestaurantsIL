import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default ({reviews}) => {
    console.log(reviews);
    return (
        <View style={styles.container}>
            <View style={{marginBottom: 12}}>
                <Text style={{fontWeight: 'bold', fontSize: 26}}>Reviews</Text>
            </View>
            {reviews.map(review => {
                return (
                    <View key={review.id} style={styles.review}>
                        <Text style={{fontWeight: 'bold'}}>{review.user.name}</Text>
                        <Text style={{marginVertical: 8}}>{review.text}</Text>
                        <Text style={styles.greyText}>{review.rating} Stars</Text>
                        <Text>{review.time_created}</Text>
                        <View style={styles.separatorStyle}/>
                    </View>
                )
            })}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginTop: 12,
        alignItems: 'center',
    },
    review: {
        alignItems: 'center',
    },
    separatorStyle: {
        borderBottomWidth: 1,
        marginVertical: 12,
        borderColor: '#cccccc'
    },
    greyText: {
        color: '#aaaaaa',
    }
});

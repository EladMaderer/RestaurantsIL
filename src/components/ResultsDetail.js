import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
            <Text style={styles.textStyle}>{result.name}</Text>
            <View style={styles.bottomLine}>
                <Text style={styles.bottomLineText}>{result.rating} Stars, </Text>
                <Text style={styles.bottomLineText}>{result.review_count} Reviews</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 20,
        marginTop: 6
    },
    textStyle: {
        fontWeight: 'bold',
        marginTop: 6,
        marginBottom: 2
    },
    imageStyle: {
        width: 250,
        height: 150,
    },
    bottomLine: {
        flexDirection: 'row'
    },
    bottomLineText: {
        color: '#bababa',
        fontWeight: 'bold'
    }
});

export default ResultsDetail;
import React from 'react'
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import BooksCategories from '../components/bookShelf/BooksCategories';
import { useNavigation } from '@react-navigation/native';

const BookShelf = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.wrapper}>
        <View style={styles.topCon}>
            <Pressable 
            onPress={() => navigation.goBack()}
            style={styles.backCon}>
                <Image style={{height: 15, width: 15}} source={require('../../assets/icons/back.png')} />
            </Pressable>
            <Text style={{fontSize: 20, fontWeight: 450, width: '62%'}}>Bookshelf</Text>
        </View>

        <View style={{marginTop: 25,}}>
            <Text style={{fontSize: 30, fontWeight: 400}}>Categories</Text>
        </View>

        <View style={styles.categoryWrapper}>
            <BooksCategories />
        </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#FFD672',
        padding: 18,
        paddingBottom: 0,
    },
    topCon: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 40,
    },
    backCon: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF6DE99',
        height: 25,
        width: 25,
        borderRadius: 5,
    },
    categoryWrapper: {
        flex: 1,
        width: '100%',
        marginTop: 20,
    },
});



export default BookShelf
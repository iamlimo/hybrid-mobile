import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import SearchInput from '../components/search/SearchInput';
import TopCategory from '../components/search/TopCategory';
import ResentSearch from '../components/search/ResentSearch';
import TopAuthors from '../components/search/TopAuthors';
import { SafeAreaView } from 'react-native';

const Search = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView 
    contentContainerStyle={styles.wrapper}
    >
        <View style={styles.topCon}>
            <Pressable
            onPress={() => navigation.goBack()} 
            style={styles.backCon}
            >
                <Image style={{height: 15, width: 15}} source={require('../../assets/icons/back.png')} />
            </Pressable>
        </View>
        <View style={styles.titleCon}>
            <Text style={{fontSize: 28}}>Search</Text>
        </View>

        {/* SEARCH INPUT */}
        <SearchInput />

        {/* TOP CATEGORIES */}
        <TopCategory />

        {/* RECENT SEARCH */}
        <ResentSearch />

        {/* TOP AUTHORS */}
        <TopAuthors />

    </ScrollView>
    </SafeAreaView>
      )
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFD672',
        paddingTop: StatusBar.currentHeight, 
      },
    wrapper: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: '#FFD672',
        paddingBottom: 40,
    },
    topCon: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 40,
        paddingHorizontal: 18,
        paddingTop: 0,
    },
    backCon: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF6DE99',
        height: 22,
        width: 20,
        borderRadius: 7,
        paddingHorizontal: 12,
    },
    titleCon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 18,
        marginTop: 50,
    },
    categoryCon: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: 18,
        marginTop: 20,
    }
})

export default Search
import React from 'react'
import { Button, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import booksCategory from '../../data/BooksCategory'
import { useNavigation } from '@react-navigation/native'

const BooksCategories= () => {

  const navigation = useNavigation();

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={styles.scrollCon}
   >
    {booksCategory.map((item) => {
      return(
      <View key={item.id}>
        <Pressable 
        style={styles.category}
        onPress={() => navigation.navigate("categoryList")}
        >
          <Image style={{height: 45, width: 45}} source={item.img} />
          <Text style={{fontSize: 12, fontWeight: 400, paddingTop: 5, textAlign: 'center'}}>{item.title}</Text>
        </Pressable>

      </View>
      )
    })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollCon: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 20,
},
  category: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 105,
    height: 120,
    backgroundColor: '#F2F2B5',
    borderColor: '#F06703',
    borderWidth: 1,
    borderRadius: 7,
    marginBottom: 30,
    paddingRight: 8,
    paddingLeft: 8,
},
})



export default BooksCategories
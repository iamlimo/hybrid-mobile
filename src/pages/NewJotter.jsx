import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Image, Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native'

const NewJotter = () => {
    const [title, setTitle] = useState('Untitled')
    const [content, setContent] = useState('content')

    const navigation = useNavigation();

      const handleEditAndSet = () => {
        const newEditedTitle = title;
        navigation.goBack()
         setTitle(newEditedTitle);
      };

  return (
    <ScrollView
    contentContainerStyle={styles.wrapper}>
        <View style={styles.topCon}>
            <Pressable
            onPress={() => navigation.goBack()} 
            style={styles.backCon}
            >
                <Image style={{height: 15, width: 15}} source={require('../../assets/icons/back.png')} />
            </Pressable>
            <View>
                <TextInput
                style={{fontSize: 20}}
                fontWeight="bold" 
                onChangeText={(text) => setTitle(text)}
                value={title}
                />
            </View>
            <Pressable
            onPress={handleEditAndSet} 
            style={styles.backCon}
            >
                <Image style={{height: 15, width: 15}} source={require('../../assets/icons/mark.png')} />
            </Pressable>
        </View>

        <View style={styles.inputPageCon}>
            <TextInput style={styles.inputPage}
            onChangeText={(text) => setContent(text)}
            placeholder="Enter multiple lines of text"
            multiline={true}
            numberOfLines={4}
            underlineColor="red"
            activeUnderlineColor="yellow"
            />
        </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 25
    },
    topCon: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 60,
    },
    backCon: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF6DE',
        height: 25,
        width: 25,
        borderRadius: 5,
    },
    inputPageCon: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        // backgroundColor: 'green',
        marginTop: 25,
    },
    inputPage: {
        fontSize: 17,
    },
})

export default NewJotter
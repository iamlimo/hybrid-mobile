import React from 'react'
import { Image, Pressable, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import CheckBox from 'react-native-check-box'


const ReviewModal = ({setReview}) => {
    const star = [ {id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5},]

    const navigation = useNavigation();

    const submitReview = () => {
      setReview(false);
      navigation.navigate('review');
    }

  return (
    <View style={styles.wrapper} blurRadius={90}>
        <View style={styles.reviewCard}>
        <Text style={{fontSize: 12, fontWeight: 500, color: '#14141499', paddingBottom: 10}}>By C.S Lewis</Text>
            <Image style={{width: 90, height: 100.44, borderRadius: 10}} source={require('../../../assets/images/bookFrame.png')} />
            <Text style={{fontSize: 12, fontWeight: 500, color: '#141414CC', paddingVertical: 8}}>Rate this Book</Text>

            <View style={styles.ratingsCon}>
              {star.map((item) => {
                return(
              <Pressable key={item.id}
              style={styles.starCon}
              >
                <Ionicons name="star-outline" size={28} color="#1338BE" strokeWidth={1} />
             </Pressable>
                )
              })}
            </View>

            <Text style={{fontSize: 14, fontWeight: 500, color: '#141414E5', textAlign: 'left', width: '100%', marginTop: 20}}>
               Write your review in the box below
            </Text>

            <TextInput 
            style={styles.inputBox}
            />

            <View style={styles.checkBoxCon}>
                <CheckBox style={{}} />
                <Text style={{fontSize: 12, fontWeight: 500, color: '#141414E5'}}>Click to make review anonymous</Text>
            </View>

            <TouchableOpacity onPress={submitReview}
            style={styles.button}>
                <Text style={{fontSize: 13.5, fontWeight: 600, color: '#1338BE'}}>Submit Reivew</Text>
            </TouchableOpacity>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems:'center',
        justifyContent: 'center',
        width: '100%',
        position: 'absolute',
        top: '15%',
        paddingHorizontal: 30,
    },
    reviewCard: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        width: '100%',
        paddingTop: 8,
        paddingBottom: 20,
        paddingHorizontal: 20,
    },
    ratingsCon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 13
    },
    starCon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFD672',
        borderRadius: 30,
        height: 50,
        width: 50
      },
      inputBox: {
        backgroundColor: '#B9B9B933',
        borderRadius: 8,
        height: 166,
        width: '100%',
        marginTop: 18,
      },
      checkBoxCon: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        marginVertical: 20
      },
      button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        backgroundColor: '#FFD672',
        height: 46,
        width: '100%'
      }
})

export default ReviewModal
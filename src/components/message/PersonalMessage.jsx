import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { personalChatsData } from '../../data/messageData/personalChatsData'
import { useNavigation } from '@react-navigation/native'

const PersonalMessage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      {personalChatsData.map((item) => {
        return(
      <TouchableOpacity 
      onPress={() => navigation.navigate('chatInbox')}
      key={item.id} 
      style={styles.sectionCon}
      >
        <View style={styles.leftCon}>
           <View style={styles.imageCon}>
             <Image style={{height: 52, width: 52, position: 'relative'}} source={item.img} />
             <View style={styles.dot}></View>
           </View>

           <View style={styles.contentCon}>
             <Text style={{fontSize: 14, fontWeight: 500, color: "#1338BE"}}>{item.name}</ Text>
             <Text style={{fontSize: 12, fontWeight: 400, color: "#7184CB", marginTop: 4, lineHeight: 17,}}>{item.message}</Text>
           </View>
        </View>

        <View style={styles.timeCon}>
          <Text style={{fontSize: 10, fontWeight: 400, color: "#7184CB"}}>{item.time}</Text>
        </View>

      </TouchableOpacity>
        )
      })}
      

    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  sectionCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 25
  },
  leftCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '55%'
  },
  imageCon: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  dot: {
    width: 9.75,
    height: 9.75,
    backgroundColor: '#39BA00',
    borderRadius: 5,
    borderWidth: 1.3,
    borderColor: 'white',
    position: 'absolute',
    bottom: 1,
    right: 3
  },
  contentCon: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 15
  },
  timeCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  }
})


export default PersonalMessage
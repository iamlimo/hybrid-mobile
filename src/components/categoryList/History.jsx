import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import history from '../../data/categoryList/history'

const History = ({selectedTab}) => {
  return (
    <View style={styles.wrapper}>
        <View style={styles.titleCon}>
          <Text style={{fontSize: 20, fontWeight: 400, marginBottom: 22}}>History</Text>
        </View>
        <View style={{flex: 1, width: '100%',}}>
            <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
             contentContainerStyle={styles.scrollCon}
            >
                {history.map((item) => {
                    return(
                <View key={item.id}>
                   <View style={styles.bookCon}>
                       <Image style={{height: 165, width: 124, marginLeft: -15,}} source={item.img} />
                       <View style={{width: 134, marginTop: 6}}>
                           <Text style={{fontSize: 14, color: '#141414'}}>{item.title}</Text>
                           <Text style={{fontSize: 12, color: '#141414', marginTop: 8}}>{item.author}</Text>
                       </View>
                   </View>
                   {
                    selectedTab === 'Tab2'
                    ?<View style={{position: 'absolute', top: '30%', left: '30%'}}>
                       <Image style={{height: 40, width: 40.5}} source={require('../../../assets/icons/play.png')} />
                     </View>
                    :''
                   }
                </View>
                    )
                })}
            </ScrollView>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginBottom: 40,
    },
    titleCon: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 18,
    },
    scrollCon: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingLeft: 18
    },
    bookCon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 6,
    }
})
export default History
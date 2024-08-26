import React from 'react'
import {View,StyleSheet,Image} from 'react-native'
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors'

function ListingDetailsScreen() {
  return (
    <View>
        <Image style={styles.image}  source={require('../assets/jacket.jpg')} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>Red Jacket for sale</AppText>
          <AppText style={styles.price}>$100</AppText>
            <View style={styles.userContainer} >
              <ListItem
                image={require('../assets/xusan.jpg')}
                title='Xusan Sayfuddinov'
                subTitle='5 Listings'
              />
            </View>
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
  detailsContainer:{
    padding:20,
  },
  userContainer:{
    marginVertical:40
  }
  ,
    image:{
        width: '100%',
        height: 300,
    },
  title:{
    fontSize:24,
    fontWeight:"500",
  },
  price:{
    color:colors.secondary,
    fontWeight:"bold",
    fontSize:20,
    marginVertical:10
}
})

export default ListingDetailsScreen
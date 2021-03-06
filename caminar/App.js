import React, { Component } from "react"
import {
  Image,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from "react-native"
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation"

class RoutesScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={routes}
          renderItem={({ item, index }) => (
            <TouchableHighlight
              onPress={() =>
                this.props.navigation.navigate("RouteDetailScreen", {
                  route: routes[index]
                })
              }
              underlayColor="white"
            >
              <View style={styles.item}>
                <Image
                  style={styles.heroImage}
                  source={{
                    uri: item.heroImageUrl
                  }}
                />
                <Text>{item.key}</Text>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    )
  }
}

class RouteDetailScreen extends Component {
  render() {
    const { navigation } = this.props
    const route = navigation.getParam("route", {})

    return (
      <View style={styles.container}>
        <FlatList
          data={route.route}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image
                style={styles.heroImage}
                source={{
                  uri: item.heroImageUrl
                }}
              />
              <Text>{item.key}</Text>
              <Text>{item.address.streetAddress}</Text>
              <Text>
                {item.address.city}, {item.address.zipCode}
              </Text>
              <Text> {item.address.zipCode} </Text>
            </View>
          )}
        />
      </View>
    )
  }
}

class SearchScreen extends Component {
  render() {
    return <Text>Hello Search</Text>
  }
}

const routes = [
  {
    key: "Williamsburg Sunday",
    heroImageUrl:
      "https://s3-media2.fl.yelpcdn.com/bphoto/ATNz9ETyN4ZZrdwvZXMb_Q/o.jpg",
    route: [
      {
        key: "Diner",
        heroImageUrl:
          "https://s3-media2.fl.yelpcdn.com/bphoto/ATNz9ETyN4ZZrdwvZXMb_Q/o.jpg",
        location: { latitude: 40.71069, longitude: -73.9656 },
        order: 1,
        address: {
          streetAddress: "85 Broadway",
          zipCode: "11249",
          city: "Brooklyn",
          state: "NY"
        }
      },
      {
        key: "Sunday in Brooklyn",
        heroImageUrl:
          "https://s3-media2.fl.yelpcdn.com/bphoto/k1-DV2FA2JyDiRKDrE15Cw/o.jpg",
        location: { latitude: 40.71413, longitude: -73.965363 },
        order: 2,
        address: {
          streetAddress: "348 Wythe Ave",
          zipCode: "11249",
          city: "Brooklyn",
          state: "NY"
        }
      },
      {
        key: "YO BK",
        heroImageUrl:
          "https://s3-media1.fl.yelpcdn.com/bphoto/cj07S6FC-7Z4OClgu2RKGA/o.jpg",
        location: { latitude: 40.71055, longitude: -73.96815 },
        order: 3,
        address: {
          streetAddress: "20 Broadway",
          zipCode: "11249",
          city: "Brooklyn",
          state: "NY"
        }
      },
      {
        key: "Domino Park",
        heroImageUrl:
          "https://www.cityguideny.com/columnpic2/xdomino-park.jpg,qModPagespeed=offa.pagespeed.ic.PLXqA1QQZ_.jpg",
        location: { latitude: 40.71726, longitude: -73.96577 },
        order: 4,
        address: {
          streetAddress: "15 River St",
          zipCode: "11249",
          city: "Brooklyn",
          state: "NY"
        }
      }
    ]
  },
  {
    key: "Williamsburg Saturday",
    heroImageUrl:
      "https://s3-media3.fl.yelpcdn.com/bphoto/lXyx0qXvwoRNpJE5f0ujWA/o.jpg",
    route: [
      {
        key: "Khao Sarn",
        heroImageUrl:
          "https://s3-media3.fl.yelpcdn.com/bphoto/lXyx0qXvwoRNpJE5f0ujWA/o.jpg",
        location: { latitude: 40.71287, longitude: -73.96261 },
        order: 1,
        address: {
          streetAddress: "338 Bedford Ave",
          zipCode: "11249",
          city: "Brooklyn",
          state: "NY"
        }
      },
      {
        key: "Whole Foods Market",
        heroImageUrl:
          "https://s3-media2.fl.yelpcdn.com/bphoto/OjreGYi1dwaGTxvboao-Jg/o.jpg",
        location: { latitude: 40.71611, longitude: -73.95974 },
        order: 2,
        address: {
          streetAddress: "238 Bedford Ave",
          zipCode: "11249",
          city: "Brooklyn",
          state: "NY"
        }
      },
      {
        key: "McNally Jackson",
        heroImageUrl:
          "https://s3-media3.fl.yelpcdn.com/bphoto/fLniQKYlzLZ7u8QwwHVvYA/o.jpg",
        location: { latitude: 40.71729, longitude: -73.96164 },
        order: 3,
        address: {
          streetAddress: "76 N 4th St",
          zipCode: "11249",
          city: "Brooklyn",
          state: "NY"
        }
      }
    ]
  }
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 200
  },
  heroImage: {
    flex: 1
  }
})

const RoutesStack = createStackNavigator({
  RoutesScreen: RoutesScreen,
  RouteDetailScreen: RouteDetailScreen
})

const SearchStack = createStackNavigator({
  SearchScreen: SearchScreen
})

export default createAppContainer(
  createBottomTabNavigator({
    Routes: RoutesStack,
    Search: SearchStack
  })
)

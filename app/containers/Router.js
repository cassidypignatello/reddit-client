import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import { Router, Scene, Modal, ActionConst } from 'react-native-router-flux'
import { connect } from 'react-redux'

import Login from './Login'
import Posts from './Posts'
import Random from './Random'

/**
 * !!! react-native-router-flux tips !!
 *  - A higher-level "tabs" scene should wrap the tab scenes
 *  - you can pass arbitrary props to a Scene by giving it the prop "passProps={true}"
 */

// This is for the "icon" prop on tabe Scenes
class TabIcon extends Component {
    render(){      
      // Render the title of the tab here
      return (
        <Text style={{color: this.props.selected ? 'red' : 'black'}}>
          {this.props.title}
        </Text>
      )
    }
}

class AppRouter extends Component {
  render() {
    // Return <Router> and <Scenes> here
   	return (
      <Router>
        <Scene key="root">
          <Scene key="tabs" hideNavBar={true} tabs={true} tabBarStyle={styles.tabBar}>
            <Scene key="posts" component={Posts} title="Posts" icon={TabIcon} style={{paddingTop: 64}} />
            <Scene key="random" component={Random} title="Random" icon={TabIcon} style={{paddingTop: 64}} />
            <Scene key="login" component={Login} title="Login" icon={TabIcon} style={{paddingTop: 64}} initial={true} />
          </Scene>          
        </Scene>
      </Router>
    )
  }
}

// Feel free to use this style, or create your own
let styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: 0.5,
    borderColor: '#b7b7b7',
    backgroundColor: '#fff',
    opacity: 1
  }
})

export default connect()(AppRouter)

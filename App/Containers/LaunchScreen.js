import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import HomeAction from '../Redux/HomeRedux'
export class LaunchScreen extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }
  componentDidMount() {
    this.props.click()
  }

  render() {
    console.log(this.props)
    return (
      <View>
        <Text> prop </Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  state: { home: state }
})

const mapDispatchToProps = dispatch => {
  return {
    click: () => dispatch(HomeAction.HomeRequest())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)

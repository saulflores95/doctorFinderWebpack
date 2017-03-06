import React, { Component } from 'react'

class AsyncRoute extends Component {
  getInitialState () {
    return {
      loading: false
    }
  }
  componentDidMount () {
    this.props.loading.then(module => {
      this.component = module.default
      this.setState({loading: true})
    })
  }
  render () {
    if (this.state.loading) {
      return <this.component {...this.props.props} />
    } else {
      return (<div>Loading</div>)
    }
  }
}

export default AsyncRoute

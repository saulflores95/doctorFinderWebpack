import React, { Component } from 'react'

export default class AsyncRoute extends Component {
  constructor () {
    super()
    this.state = {
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

import React, {Component} from 'react'
import Transition from 'react-motion-ui-pack'
import {spring} from 'react-motion'

export default class MobileSearch extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    let key = 0
    return (
      <div className='wrapper'>
        <Transition
          component={false}
          enter={{
            translateY: spring(0, {stiffness: 250, damping: 30}),
            opacity: 1
          }}
          leave={{
            translateY: -350,
            opacity: 0
          }}
          >
        <form key={key++}>
          <input type="text" className="search" placeholder="What are you looking for?" autoFocus onChange={this.props.search}/>
        </form>
      </Transition>
        <style jsx>
          {`
            .search {
              padding:8px 15px;
              background: white;
              border:3px solid #2d517b;
              width: 90%;
              -webkit-border-radius: 50px;
              -moz-border-radius: 50px;
              border-radius: 50px;
              outline: none;
            }
          `}
        </style>
      </div>
    )
  }
}

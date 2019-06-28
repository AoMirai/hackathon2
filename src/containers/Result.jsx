import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Result extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    const { count } = this.props
    return (
      <div className="Result">
        {`Ajourd'hui, en parcourant le web, vous avez produit un impact carbone de ${count}g`}
        {`Cela équivaut à`}
        {}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.counter.count
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Result)

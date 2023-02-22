import { Button } from 'antd'
import React from 'react'
import { connect } from 'react-redux'
import { MixPersonAndCount } from '../../redux/actions/mix'

export const Mix = (props: any) => {

  const mixHandle = () => {
    props.mixCP(props.count, props.person)
  }

  return (
    <div>
      <h2>Mix:{props.mix}</h2>
      <h3>当前总人数:{props.person}</h3>
      <h3>当前总数:{props.count}</h3>
      <Button onClick={mixHandle}>加</Button>
    </div>
  )
}


export default connect(
  (state: any) => ({
    count: state.Count,
    person: state.Person.length,
    mix: state.Mix,
  }),
  { mixCP: MixPersonAndCount }
)(Mix)
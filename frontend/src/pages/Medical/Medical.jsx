import React  from 'react'
import AuthChecker from '../AuthChecker';
import ListHopitaux from './ListHopitaux';
export default function Medical() {

  return (
    <div>
      <AuthChecker userType={'employe'}/>
      <ListHopitaux/>
    </div>
  )
}

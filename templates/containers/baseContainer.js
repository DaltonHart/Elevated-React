module.exports = `

import React, {Component} from 'react'
import BaseModel from '../models/Base'
import Base from '../components/Base'

class BaseContainer extends Component{
    constructor(){
        super()
        this.state = {
          base: [],
        }
      }

      componentDidMount(){
        this.fetchData()
      }
    
      fetchData(){
        BaseModel.all().then( (res) => {
          console.log('Here is the res:',res)
          this.setState ({
            bases: res.data,
            base: ''
          })
        })
      }
      
    render(){
      return (
        <div className='container'>
            <div className="BaseList">
            <Bases atkops={this.state.bases}/>
            </div>

        </div>
      )
    }
  }
  
  export default BaseContainer
  `
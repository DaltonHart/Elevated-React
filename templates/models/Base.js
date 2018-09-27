module.exports = `
import axios from 'axios'

class BaseModel {
  static all(){
    let request = axios.get('route goes here')
    return request
  }
}

export default BaseModel `
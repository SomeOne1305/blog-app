import axios from 'axios'
import cookie from 'js-cookie'

axios.create({
  baseURL:"http://localhost:8000/v1/api/",
  headers:{
    Authorization:"Bearer " + cookie.get("Auth")?cookie.get("Auth"):""
  }
})

export default axios
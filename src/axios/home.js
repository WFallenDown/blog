import axios from 'axios'
import url from './url'


export default{
    
    getdata: function() {
        console.log(url.getindexdata());
        axios.get(url.getindexdata()).then(response => {
        console.log("text:" + response.data);
      });
    }
}
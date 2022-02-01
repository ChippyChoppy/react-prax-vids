import axios from 'axios'

const KEY = 'AIzaSyB-nosK8OCWQSm9druDKG8SkSR2XugrFj0'
// uppercase because specifically saying it's constant val, should not be changed unless you really know what you're doing!

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
      part: 'snippet',
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});
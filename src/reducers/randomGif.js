const initialState = [
  'https://media3.giphy.com/media/fxsqOYnIMEefC/giphy.gif', 
  'https://media1.tenor.com/images/f676ac7683d9d3c545ddea12ec05b60b/tenor.gif?itemid=4115420', 
  'http://rs384.pbsrc.com/albums/oo281/CooperDaKat/animated%20gifs/WooHoo%20congrats.gif~c200', 
  'http://cute-resource.co.uk/wp-content/uploads/2016/03/congrats.gif', 
  'https://static1.fjcdn.com/thumbnails/comments/A+the+office+gif+i+dont+have+congratulations+_e01192a9b143b96a6ad0ff3c8881016a.gif', 
  'http://24.media.tumblr.com/5a2255187320461348baec5fdaaf41a6/tumblr_mgtiv59LIO1s2aw1no1_400.gif',
]

export default (state = initialState, { type } = {}) => {
  switch (type) {
    default:
      return initialState[Math.floor(Math.random() * initialState.length)]
  }
}

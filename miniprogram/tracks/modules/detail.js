const tracks = {
  path: 'pages/index/index',
  elementTracks: [
    {
      element: '.appointment',
      dataKeys: ['avatarUrl','userInfo','imgUrls[1]'],
      query:(logger)=>{
        console.log(logger,'logger123123')
      }
    },
    {
      element: '.flex-item',
      dataKeys: ['avatarUrl','userInfo','imgUrls[1]'],
      query:(logger)=>{
        console.log(logger,'logger444')
      }
    },
  ],
  methodTracks: [
    {
      method: 'onPullDownRefresh',
      dataKeys: ['film.filmId','userInfo'],
    },
  ],
  methods:{
    onLoad(){
      console.log('onLoadindex')
    },
  }
};

export default tracks;

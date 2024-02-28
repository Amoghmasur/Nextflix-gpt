export const tmdb_api_options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer' + process.env.REACT_APP_TMDB_KEY,
    }
  };



export const Image_CDN='https://image.tmdb.org/t/p/w780'


export const SUPPORTED_LANGUAGES=[
  {identifier:'en', name:'English'},
  {identifier:'hindi',name:'Hindi'},
  {identifier:'spanish',name:'Spanish'},
]

export const Open_api_key='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'


// export const Open_api_key=process.env.REACT_APP_OPEN_API



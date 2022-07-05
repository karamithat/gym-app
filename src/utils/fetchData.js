export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd36cce2ad0msh0963de7f4861e0ep12672ajsn232b525a016b',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd36cce2ad0msh0963de7f4861e0ep12672ajsn232b525a016b',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


  
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };
export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '768cc0856fmsh725c9183586ae58p103c2fjsn98321ec38d48',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
export const youtubeOptions = {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': '768cc0856fmsh725c9183586ae58p103c2fjsn98321ec38d48',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async(url, options) => {
    const response = await fetch (url, options);
    const data = await response.json();

    return data
}
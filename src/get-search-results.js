export default async query => {
	const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=di5rPsjADwLYxdM9AIYJRYXOYU2QTpI2&q=${query}`);
	const searchResults = await response.json();
	return searchResults.data.map(item => ({
		thumb: item.images.downsized_still.url,
		full: item.images.original.url
	}));
}
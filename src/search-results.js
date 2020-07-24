import getSearchResults from './get-search-results';

const makeSearchResult = searchResult => `
<a href="${searchResult.full}">
	<img src="${searchResult.thumb}" />
</a>
`;


export const handleSearch = async searchTerm => {
	const searchResults = document.getElementById('search-results');
	searchResults.innerHTML = '<img src="loader.gif" />';
	const urls = await getSearchResults(searchTerm);
	const html = urls.reduce((currentString, searchResult) => {
		return currentString + makeSearchResult(searchResult);
	}, '');
	searchResults.innerHTML = html;
}

export const resultClicked = handler => {
	document.getElementById('search-results').addEventListener('click', (e) => {
		e.preventDefault();
		const target = e.target;
		if (target.tagName === 'IMG') {
			handler(target.parentElement.href);
		}
	});
}

export function searchData(data, searchQuery) {
  if (searchQuery) {
    const searchQueryString = searchQuery.toLowerCase();
    return data.filter(
      (_el) =>
        _el.name.toLowerCase().includes(searchQueryString) ||
        _el.color.toLowerCase().includes(searchQueryString) ||
        _el.gender.toLowerCase().includes(searchQueryString)
    );
  } else {
    return data;
  }
}

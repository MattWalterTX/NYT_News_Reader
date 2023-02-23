const getData = (category) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=H5NHEecscyYbUVTAGjWaMeB2rMKDZCAA`)
    .then(response => response.json())
    .then(data = this.setState({ articles: data }))
}

export default getData
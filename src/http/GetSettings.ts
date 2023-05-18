const getSettings = (idInstance: string, apiTokenInstance: string) => {
  const url = `https://api.green-api.com/waInstance${idInstance}/GetSettings/${apiTokenInstance}`


  const request = fetch(url)
  return request
}

export default getSettings
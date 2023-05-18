const getStateInstance = (idInstance: string, apiTokenInstance: string) => {
  const url = `https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`

  const request = fetch(url)
  return request
}

export default getStateInstance
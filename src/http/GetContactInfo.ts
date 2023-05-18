const getContactInfo = (idInstance: string, apiTokenInstance: string, chatId: string) => {
  const url = `https://api.green-api.com/waInstance${idInstance}/getContactInfo/${apiTokenInstance}`


  const request = fetch(url, {
    method: 'POST',
    body: JSON.stringify({chatId: chatId})
  })
  return request
}

export default getContactInfo
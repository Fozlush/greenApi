const getChatHistory = (idInstance: string, apiTokenInstance: string, chatId: string) => {
  const url = `https://api.green-api.com/waInstance${idInstance}/GetChatHistory/${apiTokenInstance}`


  const request = fetch(url, {
    method: 'POST',
    body: JSON.stringify({chatId: chatId, count: 50})
  })
  return request
}

export default getChatHistory
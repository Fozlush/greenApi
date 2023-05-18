const SendMessage = (idInstance: string, apiTokenInstance: string, chatId: string, message: string) => {
  const url = `https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`


  const request = fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      chatId: chatId,
      message: message
    })
  })
  return request
}

export default SendMessage
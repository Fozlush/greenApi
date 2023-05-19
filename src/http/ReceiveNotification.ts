const ReceiveNotification = (idInstance: string, apiTokenInstance: string) => {
  const url = `https://api.green-api.com/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`

  const request = fetch(url)
  return request
}

export default ReceiveNotification
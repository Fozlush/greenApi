const ReceiveNotification = (idInstance: string, apiTokenInstance: string) => {
  const url = `https://api.green-api.com/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`

  const request = fetch(url)
  request.then(response => response.json()).then(commits => {
    console.log(commits)
  });
  return request
}

export default ReceiveNotification
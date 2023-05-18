const DeleteNotification = (idInstance: string, apiTokenInstance: string, receiptId: string) => {
  const url = `https://api.green-api.com/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${receiptId}`

  const request = fetch(url, {
    method: 'DELETE'
  })
  request.then(response => response.json()).then(commits => {
    
  });
  return request
}

export default DeleteNotification
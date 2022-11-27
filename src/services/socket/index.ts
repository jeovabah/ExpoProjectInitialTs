import SocketIOClient from 'socket.io-client'

export default class AppSocket {
  constructor(url = process.env.HOST_SOCKET, options = null) {
    this.socket = SocketIOClient(url, options)
  }

  onEvent(name, callback) {
    this.socket.on(name, callback)
  }

  close() {
    this.socket.close()
  }
}

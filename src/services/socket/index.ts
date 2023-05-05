import SocketIOClient from 'socket.io-client'
import { buildApp } from '~config/constantBuild'

export default class AppSocket {
  constructor(url = buildApp().HOST_SOCKET, options = null) {
    this.socket = SocketIOClient(url, options)
  }

  onEvent(name, callback) {
    this.socket.on(name, callback)
  }

  close() {
    this.socket.close()
  }
}

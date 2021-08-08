import { io, Socket } from 'socket.io-client';
import { Message } from './types';

export class Syncrosse {
  private socket: Socket;

  constructor(lobbyId: string, name: string) {
    this.socket = io({
      transports: ['websocket'],
      query: { lobbyId, name },
    });
  }

  sendMessage(message: string) {
    this.socket.emit('message', message);
  }

  onMessage(callback: (message: Message) => void) {
    this.socket.on('message', callback);
  }

  onEvent(event: string, callback: (data?: any) => void) {
    this.socket.on(event, callback);
  }

  performAction(action: string, data?: any) {
    this.socket.emit(action, data);
  }
}

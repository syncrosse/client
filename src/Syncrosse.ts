import { io, Socket } from 'socket.io-client';

export class Syncrosse {
  private socket: Socket;

  constructor(lobbyId: string) {
    this.socket = io({
      transports: ['websocket'],
      query: { lobbyId },
    });
  }

  onEvent(event: string, callback: (data?: any) => void) {
    this.socket.on(event, callback);
  }

  performAction(action: string, data: any) {
    this.socket.emit(action, data);
  }
}

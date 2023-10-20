import { WebSocketGateway, WebSocketServer,SubscribeMessage } from '@nestjs/websockets';
import { Server } from 'socket.io';
@WebSocketGateway()
export class ChatGateway {
  
  @WebSocketServer() server: Server;

  @SubscribeMessage('chatMessage')
  handleChatMessage(client: any, message: string) {
    // Broadcast the message to all connected clients
    this.server.emit('chatMessage', message);
  }
}

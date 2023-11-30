import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer()
  server;

  @SubscribeMessage('message')
  handlerMessage(@MessageBody() message: string): void {
    this.server.emit('message', message);
  }
}

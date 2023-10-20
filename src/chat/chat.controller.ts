import { Controller , Get } from '@nestjs/common';

@Controller('chat')
export class ChatController {

  @Get()
  getChat() {
    return '<script src="/socket.io/socket.io.js"></script>' +
           '<script>' +
           '  const socket = io.connect("http://localhost:3000/chat");' +
           '  socket.on("chatMessage", (message) => {' +
           '    console.log(message);' +
           '  });' +
           '</script>';
  }
}

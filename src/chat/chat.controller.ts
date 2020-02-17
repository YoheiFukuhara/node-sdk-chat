import { Controller, Get, Req, Post, Param } from '@nestjs/common';
import { Request } from 'express';

@Controller('chat')
export class ChatController {
  @Get()
  Reply(@Req() request: Request) {
    //console.log(request)
    console.log('Receive Get Request!!!!')
    console.log('-----body-----')
    console.log(request.body)

    const test = {
      "replies": [
        {
          "type": "quickReplies",
          "content": {
            "title": "Select Message Type",
            "buttons": [
              {
                "title": "Button",
                "value": "Show Buttonnest"
              },
              {
                "title": "Picture",
                "value": "Show Picture"
              }
            ]
          }
        }]
      }
    ;

    return test
    //return this.chatService.Reply();
  };
  @Post(':type')
  ReplyPost(@Req() request: Request, @Param('type') type: string) {
    console.log(type)
    console.log('Receive Post Request!!!!')
    console.log('-----body-----')
    console.log(request.body)
    var reply = { "replies": [] }
    switch (type) {
      case 'pict':
        reply.replies.push(
          {
            "type": "picture",
            "content": "https://www.sap.com/dam/application/shared/logos/sap-logo-svg.svg.adapt.svg/1493030643828.svg",
          }
        );
        break;
      case 'button':
        reply.replies.push(
            {
              "type": "buttons",
              "content": {
                "title": "BUTTON_TITLE",
                "buttons": [
                  {
                    "title": "BUTTON_TITLE",
                    "type": "BUTTON_TYPE",
                    "value": "BUTTON_VALUE"
                  }
                ]
              }
            });
        break;
    }
    return reply
  }
}


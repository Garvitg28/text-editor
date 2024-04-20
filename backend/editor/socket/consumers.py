import json
from channels.generic.websocket import WebsocketConsumer
from editor.models import Document

class EditorConsumer(WebsocketConsumer):
    def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'editor_%s' % self.room_name

        # Join room group
        self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        self.accept()

    def disconnect(self, close_code):
        # Leave room group
        self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        print('hehe: ', text_data_json)
        document_id = text_data_json['document_id']
        content = text_data_json['content']

        # Update document content
        document = Document.objects.get(pk=document_id)
        document.content = content
        document.save()

        # Send message to room group
        self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'editor_message',
                'content': content
            }
        )

    def editor_message(self, event):
        content = event['content']

        # Send message to WebSocket
        self.send(text_data=json.dumps({
            'content': content
        }))

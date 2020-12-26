import os
import telegram

class Telegram():
    LENGTH = 1000
    TELEGRAM_API_TOKEN = os.getenv('TELEGRAM_API_TOKEN')

    def __init__(self):
        self.bot = telegram.Bot(token=self.TELEGRAM_API_TOKEN)
        self.updates = self.bot.getUpdates()

    def updateBot(self):
        self.updates = self.bot.getUpdates()
    
    def getMessage(self):
        try:
            response = self.updates[-1]
            return {'first_name': response.message.chat.first_name,
                    'last_name': response.message.chat.last_name,
                    'message': response.message.text}
        except IndexError: # something goes wrong
            return None 
        
    def sendMessage(self, message):
        try:
            chat_id = self.updates[-1].message.chat.id
            print(len(message))
            for count, index in enumerate(range(0, len(message), self.LENGTH)):
                temp = message[count * index:(count + 1) * self.LENGTH+index]
                self.bot.sendMessage(chat_id=chat_id,
                                     text=temp)
            print('Message send... Done!')
        except IndexError:
            print('Not available ... please type something on your bot')

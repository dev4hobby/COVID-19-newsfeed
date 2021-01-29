import requests
from datetime import datetime
from bs4 import BeautifulSoup
import json
import os
import sys
from utils import UrlManager, HashManager, MessageFormatter
from alert import Telegram

FEED_MAX = 100
FILE_NAME = 'feed.json'
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
begin = datetime.now()
print('''
{}
Getting news feed...
'''.format(
  str(begin)
))

req = requests.get('https://www.yna.co.kr/safe/news')
req.encoding = None
html = req.content
soup = BeautifulSoup(html, 'html.parser')
elements = soup.find_all('article')

try:
  with open(
    os.path.join(BASE_DIR, FILE_NAME),
    'r'
  ) as json_file:
    feed_data = json.load(json_file)
except FileNotFoundError:
  feed_data = dict()
new_feed_data = dict()  # for ordering

url_manager = UrlManager()
hash_manager = HashManager()
telegram = Telegram()
formatter = MessageFormatter()

index = 0
for element in elements:
  upload_time = element.find('span', 'tt').text
  feed_content = element.find('div', 'news-con')
  feed_title = feed_content.a.text
  feed_link = feed_content.a.get('href')
  feed_hash = hash_manager.generate_hmac_hash(feed_title)
  if not feed_data.get(feed_hash) and len(new_feed_data) <= FEED_MAX:
    new_feed_data[feed_hash] = {
      'title': feed_title,
      # 'link': url_manager.remove_url_prefix(feed_link),
      'link': feed_link,
      'date': upload_time
    }

if len(new_feed_data) > 0:
  telegram.sendMessage(
    formatter.dict_as_message(
      new_feed_data
  ))

dist = FEED_MAX - len(new_feed_data)
old_feed_filter = list(feed_data)[:dist]
feed_data = { k: feed_data[k]
              for k
              in feed_data
              if k in old_feed_filter }
new_feed_data.update(feed_data)



with open(
  os.path.join(BASE_DIR, FILE_NAME),
  'w',
  encoding='utf-8') as json_file:
  json.dump(new_feed_data, json_file, ensure_ascii=False, indent='\t')

end = datetime.now()
print('''
Done >> {}
Progress >> {}
'''.format(
  str(end),
  str(end - begin)
))

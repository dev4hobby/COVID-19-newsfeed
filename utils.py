class UrlManager():
  '''
  for URL management
  '''
  prefix = [
      'https://',
      'http://',
      '//',
  ]
  def __init__(self):
    '''
    UrlManager init method
    '''
    pass

  def remove_url_prefix(self, _url: str) -> str:
    '''
    url prefix method
    '''
    for prefix in self.prefix:
      if _url.startswith(prefix):
        return _url[len(prefix):]

class HashManager():	
  '''	
  for Hash something	
  '''	
  import hmac	
  MASTER_KEY = '07fcc4eddc24f00a85cfd19502b611a4607b8b7e3e361c41170237bc1eaaf2e1'	
  def __init__(self):	
    '''	
    HashManger init method	
    '''
    pass

  def hash_hmac(self, algorithm, data, key):	
    res = self.hmac.new(key.encode(), data.encode(), algorithm).hexdigest()	
    return res	

  def generate_hmac_hash(self, source):	
    return self.hash_hmac("sha256", source, self.MASTER_KEY)

class MessageFormatter():
  '''
  for message formatting
  '''
  def __init__(self):
    '''
    MessageFormatter init method
    '''
  
  def dict_as_message(self, origin):
    message = str()
    for key in origin:
      message += '{}\n{}\n\n'.format(
        origin[key]['date'],
        origin[key]['title']
      )
    return message
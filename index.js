function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('.target');
}

function increaseRankBy(n){
  let list = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < list.length; i++) {
     (list[i].innerHTML) = (i + n).toString();
  }

}

function deepestChild(){
  let list = document.querySelectorAll('div#grand-node');
   return list[0].lastElementChild.children[0].children[0].children[0];

}

/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {

  let fragment = new DocumentFragment();
  let ul = document.createElement('ul');
  fragment.append(ul);
  
  for(let i in friends) {
    let friend = friends[i].firstName + " " + friends[i].lastName;
    let li = document.createElement('li');
    li.append(friend);
    ul.prepend(li);
   }
  
   return fragment;

}

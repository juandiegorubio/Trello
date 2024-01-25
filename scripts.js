


function findAncestor (el, cls) {
  while ((el = el.parentElement) && !el.classList.contains(cls));
  return el;
}

function delete_card(e) {
    let current_card = findAncestor(e, "card");
    current_card.remove();
}

let new_card = '<div class="top"><input type="text" class="card-title" /><button class="delete-card" onClick="delete_card(this)"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg></button></div>'

let lists = document.querySelectorAll(".list");
lists.forEach(list => { 
    let button = list.querySelector("#addNewCard");
    button.addEventListener("click", () => {
        let card = document.createElement('li')
        card.className = 'card';
        card.innerHTML = new_card
        let card_list = list.getElementsByClassName("cardList");
        card_list[0].append(card);
    });
});
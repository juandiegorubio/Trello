var cardID = 0;

function findAncestor (el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}

function createCardElement() {
    let card = document.createElement('li');
    card.className = 'card';
    card.id = 'card' + (++globalThis.cardID).toString();
  
    // Add inner html
    let card_content = `<div class="top">
        <input type="text" class="card-title" />
          <button class="has-icon delete-card" onClick="delete_card(this)">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
          </button>
      </div>`
    card.innerHTML = card_content;

    // Make card draggable
    card.draggable = true;
    card.addEventListener('dragstart', (event) => {
        dragCard(event);
    });

    return card;
}




function delete_card(e) {
    let current_card = findAncestor(e, "card");
    current_card.remove();
}

let lists = document.querySelectorAll(".list");
lists.forEach(list => { 
    let button = list.querySelector("#addNewCard");
    button.addEventListener("click", () => {
        let card = createCardElement();
        let card_list = list.getElementsByClassName("cardList")[0];
        card_list.append(card);
    });
});

function dragCard(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function dropCard(ev) {
    let card_to_add = document.getElementById(ev.dataTransfer.getData("text"));
    let card_list = findAncestor(ev.target, 'list');
    card_list = document.getElementById(card_list.id).getElementsByClassName("cardList")[0];
    card_list.appendChild(card_to_add);
}




let inputs = document.getElementsByTagName('input');
for (let input of inputs) {
  input.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
      event.target.blur();
    }
  });
}
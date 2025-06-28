/*<tr>
    <th scope="row">1</th>
    <td>Email</td>
    <td>ciao@gmail.com</td>
</tr>*/
const dropdownItems = document.querySelectorAll('.dropdown-item');
const label = document.querySelector('label');
const input = document.querySelector('input');
const tbody = document.querySelector('tbody')


dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
        const selectedText = item.textContent;
        // Mostra il valore selezionato nel bottone
        label.textContent = selectedText;
    });
});

document.querySelector("#search").addEventListener("click", search)

async function search() {

    const results = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await results.json()
    console.log(data)
    data.map(user => controlloUser(user))

}

function controlloUser(user) {
    const typeOfFilter = label.textContent.toLowerCase();
    const keywords = input.value.toLowerCase()
    if (user[typeOfFilter] == keywords) {
        fillTable(user);
    }
}

function fillTable(user) {
    let table = createTable(user)
    tbody.appendChild(...table)
}

function createTable(user) {
    const tr = document.createElement("tr")

}
window.addEventListener("load", function () {
  setTimeout(function open(event) {
    document.querySelector(".alert").style.display = "block"
  }, 4000)
})

document
  .querySelector(".fa-circle-xmark")
  .addEventListener("click", function () {
    document.querySelector(".alert").style.display = "none";
  })

function createGame(player1, hour, group, player2) {
  return `
    <li>
      <div class="player1" data-tooltip="${player1}">
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do\(a)\ ${player1}" />
      </div>
      <strong><span>${group}</span>${hour}</strong>
      <div class="player2" data-tooltip="${player2}">
        <img src="./assets/icon-${player2}.svg" alt="Bandeira do\(a)\ ${player2}" />
      </div>
    </li>
  `
}

function createCard(date, day, games) {
  return `
    <div class="card">
      <h2>${date}<span>${day}</span></h2>
      <ul>
      ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "20/11",
    "domingo",
    createGame("Catar", "13:00", "Grupo A", "Equador") 
  ) +
  createCard(
    "21/11",
    "segunda",
    createGame("Inglaterra", "10:00", "Grupo B", "Irã") +
    createGame("Senegal", "13:00", "Grupo A", "Holanda") +
    createGame("Estados Unidos", "16:00", "Grupo B", "Gales")
  ) +

   createCard(
    "22/11",
    "terça",
    createGame("Argentina", "07:00", "Grupo C", "Arábia Saudita") +
    createGame("Dinamarca", "10:00", "Grupo D", "Tunísia") +
    createGame("México", "13:00", "Grupo C", "Polônia") +
    createGame("França", "16:00", "Grupo D", "Austrália") 
  ) +

    createCard(
    "23/11",
    "quarta",
    createGame("Marrocos", "07:00", "Grupo F", "Croácia") +
    createGame("Alemanha", "10:00", "Grupo E", "Japão") +
    createGame("Espanha", "13:00", "Grupo E", "Costa Rica") +
    createGame("Bélgica", "16:00", "Grupo F", "Canadá") 
  ) +

    createCard(
    "24/11",
    "quinta",
    createGame("Suíça", "07:00", "Grupo G", "Camarões") +
    createGame("Uruguai", "10:00", "Grupo H", "Coreia do Sul") +
    createGame("Portugal", "13:00", "Grupo H", "Gana") +
    createGame("Brasil", "16:00", "Grupo G", "Sérvia") 
  ) +

    createCard(
    "25/11",
    "sexta",
    createGame("Gales", "07:00", "Grupo B", "Irã") +
    createGame("Catar", "10:00", "Grupo A", "Senegal") +
    createGame("Holanda", "13:00", "Grupo A", "Equador") +
    createGame("Inglaterra", "16:00", "Grupo B", "Estados Unidos") 
  ) +

    createCard(
    "26/11",
    "sábado",
    createGame("Tunísia", "07:00", "Grupo D", "Austrália") +
    createGame("Polônia", "10:00", "Grupo C", "Arábia Saudita") +
    createGame("França", "13:00", "Grupo D", "Dinamarca") +
    createGame("Argentina", "16:00", "Grupo C", "México") 
  ) +

    createCard(
    "27/11",
    "domingo",
    createGame("Japão", "07:00", "Grupo E", "Costa Rica") +
    createGame("Bélgica", "10:00", "Grupo F", "Marrocos") +
    createGame("Croácia", "13:00", "Grupo F", "Canadá") +
    createGame("Espanha", "16:00", "Grupo E", "Alemanha") 
  ) +

    createCard(
    "28/11",
    "segunda",
    createGame("Camarões", "07:00", "Grupo G", "Sérvia") +
    createGame("Coreia do Sul", "10:00", "Grupo H", "Gana") +
    createGame("Brasil", "13:00", "Grupo G", "Suíça") +
    createGame("Portugal", "16:00", "Grupo H", "Uruguai") 
  ) +

    createCard(
    "29/11",
    "terça",
    createGame("Equador", "12:00", "Grupo A", "Senegal") +
    createGame("Holanda", "12:00", "Grupo A", "Catar") +
    createGame("Irã", "16:00", "Grupo B", "Estados Unidos") +
    createGame("Gales", "16:00", "Grupo B", "Inglaterra") 
  ) +

    createCard(
    "30/11",
    "quarta",
    createGame("Tunísia", "12:00", "Grupo D", "França") +
    createGame("Austrália", "12:00", "Grupo D", "Dinamarca") +
    createGame("Polônia", "16:00", "Grupo C", "Argentina") +
    createGame("Arábia Saudita", "16:00", "Grupo C", "México") 
  ) +
  
    createCard(
    "01/12",
    "quinta",
    createGame("Croácia", "12:00", "Grupo F", "Bélgica") +
    createGame("Canadá", "12:00", "Grupo F", "Marrocos") +
    createGame("Japão", "16:00", "Grupo E", "Espanha") +
    createGame("Alemanha", "16:00", "Grupo E", "Costa Rica") 
  ) +

    createCard(
    "02/12",
    "sexta",
    createGame("Coreia do Sul", "12:00", "Grupo H", "Portugal") +
    createGame("Gana", "12:00", "Grupo H", "Uruguai") +
    createGame("Suíça", "16:00", "Grupo G", "Sérvia") +
    createGame("Camarões", "16:00", "Grupo G", "Brasil") 
  )





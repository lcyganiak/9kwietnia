const posts = [
  {
    autor: "Alicja Śpiewak",
    tytul: "Jak zasnąć, śpiąc"
  },
  {
    autor: "Radosław Krupa",
    tytul: "Jedzenie"
  },
  {
    autor: "Marzena Żuber",
    tytul: "Sk8"
  },
  {
    autor: "Alicja Śpiewak",
    tytul: "Jak trzymać kredens"
  },
  {
    autor: "Jacek Soplica",
    tytul: "Ksiądz Robak"
  },
  {
    autor: "Marta Żuber",
    tytul: "Rodzaje win"
  },
  {
    autor: "Robert Krupa",
    tytul: "Jak rąbać drewno"
  },
  {
    autor: "Zubair Waters",
    tytul: "Mewa kidnapper"
  },
  {
    autor: "Cloe Padilla",
    tytul: "Radosław Robert Krupa"
  },
  {
    autor: "Willie Branch",
    tytul: "Kotki"
  },
  {
    autor: "Samiha Wagner",
    tytul: "Żabki"
  },
  {
    autor: "Dominick Ventura",
    tytul: "Asterka boża"
  },
  {
    autor: "Adolf Hitler",
    tytul: "Mein Kampf"
  },
  {
    autor: "Artur Olejnik",
    tytul: "Xue huā piāo piāo yi jian mei"
  },
  {
    autor: "Kashif Mosley",
    tytul: "Gryźć ludzi"
  }
]

function addElement() {
  // pobieram div z index.html o id = "app"
  const app = document.getElementById('app')
  // czyścimy div o id =app, żeby po drugim kliknięciu nie dodawać ponownie tych samych postów 
  app.innerHTML = ''
  for (let i = 0; i < posts.length; i++) {
    let paragraf = document.createElement('p')
    paragraf.setAttribute('class', 'post')
    paragraf.innerText = posts[i].autor + " " + posts[i].tytul
    app.appendChild(paragraf)

  }
}
function search() {
  const valueInput = event.target.value
  valueInput.trim()
  const app = document.getElementById('app')
  app.innerHTML = ''
  const postsFilter = posts.filter(post => {
    return (post.tytul.search(valueInput) !== -1)
  })


  for (let i = 0; i < postsFilter.length; i++) {

    let paragraf = document.createElement('p')
    paragraf.setAttribute('class', 'post')
    paragraf.innerText = postsFilter[i].autor + " " + postsFilter[i].tytul
    app.appendChild(paragraf)

  }
}
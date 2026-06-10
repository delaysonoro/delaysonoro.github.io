fetch("./data/episodes.json")
  .then(response => response.json())
  .then(data => {

    const container =
      document.getElementById(
        "episodes_container"
      );

    data.episodes.forEach(ep => {

      container.innerHTML += `

        <article class="episode_card">

          <img
            src="${ep.cover}"
            alt="${ep.title}">

          <div class="episode_info">

            <span>${ep.section}</span>

            <h3>${ep.title}</h3>

            <p class="episode_description">${ep.description}</p>

          </div>

          <a
            href="${ep.url}"
            class="listen_btn">

            <img
            class="arrow_icon"
            src="./assets/arrow_icon.png"
            alt="arrow">


          </a>

        </article>

      `;

    });

  });
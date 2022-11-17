{/* <article>
        <h2>La emoción de Lisandro M.</h2>
        <img src="./img/futbol.webp" alt="" />
        <p>
          La increíble ovación de los hinchas de Manchester United al defensor
          argentino: "Quise llorar".
        </p>
      </article>

      <article>
        <h2>La renuncia de Liz Truss</h2>
        <img src="./img/boris.webp" alt="" />
        <p>
          Boris Johnson interrumpió sus vacaciones y vuelve a sonar fuerte entre
          los posibles sucesores.
        </p>
      </article>

      <article>
        <h2>Los motivos</h2>
        <img src="./img/escuela.webp" alt="" />
        <p>
          Una escuela argentina fue elegida entre las diez mejores del mundo.
        </p>
      </article> */}

      const main = document.querySelector("main");
      listadoNoticias.forEach((noticia) => {
        const article = document.createElement("article");
        const h2 = document.createElement("h2");
        const img = document.createElement("img");
        const p = document.createElement("p");

        h2.innerText = noticia.titulo;
        img.setAttribute("src", noticia.foto);
        p.innerText = noticia.epigrafe;

        article.appendChild(h2);
        article.appendChild(img);
        article.appendChild(p);

        main.appendChild(article);
      })
      
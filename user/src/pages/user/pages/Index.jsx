import { useNavigate } from "react-router-dom";
import { Image, Button } from "react-bootstrap";
import CardMedia from "../components/CardMedia";
import CardEvent from "../components/CardEvent";
import "../../../styles/pagesUser.scss";

const Index = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* nav button */}
      <nav className="bottom_nav">
        <Button onClick={() => navigate("/admin/selection_menu")}>
          <Image
            src="../assets/icones/stag.svg"
            alt="icone de retour vers le menu principal"
          />
          PAGE D'ACCUEIL
        </Button>
      </nav>

      <main id="main_index">
        {/* presentation castle */}
        <section id="presentation_section">
          <article>
            <h3>
              LE PLUS IMPORTANT EDIFICE DE LA RENAISSANCE EN HAUTE
              NORMANDIE.
            </h3>
            <div className="div_presentation">
              <div className="div_img_1"></div>
              <div className="div_content">
                <p>
                  <span>L</span>orem ipsum dolor sit amet consectetur
                  adipisicing elit. Placeat, nemo delectus ducimus aliquid omnis
                  iusto consequuntur, excepturi laudantium tenetur nihil dicta
                  magnam voluptatibus eum libero autem molestias odio explicabo.
                  Amet. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Asperiores, similique. Ratione animi consequatur vel
                  voluptatibus. Ut magnam commodi tenetur expedita, id,
                  laboriosam natus a laudantium quia, omnis rem sunt impedit?
                  consectetur adipisicing elit. Asperiores, similique.
                </p>
              </div>
            </div>
          </article>

          <article>
            <h3>LE CHATEAU C’EST AUSSI UNE ECOLE.</h3>
            <div className="div_presentation">
              <div className="div_img_2"></div>
              <div className="div_content">
                <p>
                  <span>L</span>orem ipsum dolor sit amet consectetur
                  adipisicing elit. Placeat, nemo delectus ducimus aliquid omnis
                  iusto consequuntur, excepturi laudantium tenetur nihil dicta
                  magnam voluptatibus eum libero autem molestias odio explicabo.
                  Amet. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Asperiores, similique. Ratione animi consequatur vel
                  voluptatibus. Ut magnam commodi tenetur expedita, id,
                  laboriosam natus a laudantium quia, omnis rem sunt impedit?
                </p>
                <Button
                  href="https://lycee-saintjoseph-mesnieres.fr/"
                  variant="primary"
                >
                  EN SAVOIR PLUS
                </Button>
              </div>
            </div>
          </article>
        </section>

{/* section news */}
        <section id="articles_section">
          <header>
            <h2>
              AGENDA
            </h2>
          </header>
          <article id="article_feed_articles">
            {/* MAX 3 cards */}
            <CardEvent
              urlEvent="#"
              title="PLANTER UN ARBRE"
              eventType="Evenement"
              image="../assets/photos/garden1.jpg"
              description="Ut magnam commodi tenetur expedita, id,laboriosa adipisicing elit."
              date="01-01-2022"
              author="Amélie"
            />

            <CardEvent
              urlEvent="#"
              title="JOURNEE PATRIMOINE"
              eventType="Culture"
              image="../assets/photos/patrimony.jpg"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit quaerat a laudantium dolorem ipsam. Sit beatae tempora quasi inventore et error molestiae quam voluptatem? Odio eum quod accusamus libero!
              adipisicing elit. Placeat, nemo delectus ducimus aliquid omnis
              iusto consequuntur, excepturi laudantium tenetur nihil dicta
              magnam voluptatibus eum libero autem molestias odio explicabo.
              Amet. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Asperiores, similique. Ratione animi consequatur vel
              voluptatibus. Ut magnam commodi tenetur expedita, id,
              laboriosa adipisicing elit."
              date="01-01-2022"
              author="Amélie"
            />

            <CardEvent
              urlEvent="#"
              title="FETE DE LA NATURE"
              eventType="Evenement"
              image="../assets/photos/feteNature.jpg"
              description="Asperiores, similique. Ratione animi consequatur velvoluptatibus. Ut magnam commodi tenetur expedita, id,laboriosa adipisicing elit."
              date="01-01-2022"
              author="Amélie"
            />
          </article>
          <aside>
<CardMedia
name = "CARNET DE RANDO"
content ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit quaerat a laudantium dolorem ipsam. Sit beatae tempora quasi inventore et error molestiae quam voluptatem? Odio eum quod accusamus libero!
adipisicing elit. Placeat, nemo delectus ducimus aliquid omnis
iusto consequuntur, excepturi laudantium tenetur nihil dicta
magnam voluptatibus eum libero autem molestias odio explicabo.
Amet. Lorem ipsum dolor sit amet, consectetur adipisicing
elit. Asperiores, similique. Ratione animi consequatur vel
voluptatibus. Ut magnam commodi tenetur expedita, id,
laboriosa adipisicing elit. Placeat, nemo delectus ducimus aliquid omnis
iusto consequuntur, excepturi laudantium tenetur nihil dicta
magnam voluptatibus eum libero autem molestias odio explicabo.
Amet. Lorem ipsum dolor sit amet, consectetur adipisicing
elit. Asperiores, similique. Ratione animi consequatur vel
voluptatibus. Ut magnam commodi tenetur expedita, id,
laboriosa "
videoYoutube="https://www.youtube.com/embed/_sFGKa43kB0"
/>
          </aside>
        </section>

{/* section caroussel what to do */}

      </main>

    </>
  );
};

export default Index;

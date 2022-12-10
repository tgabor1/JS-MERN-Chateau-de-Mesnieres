import { Image, Button, Container } from "react-bootstrap";
import BottomNav from '../../../components/common_components/BottomNav';
import "../../../styles/pagesUser.scss";

const ParcEtDomaine = () => {
  return (
    <>
    <BottomNav name="PARC ET DOMAINE DU CHATEAU"
    urlNav="/" />

      <main id="main_parkAndDomain">
        <Container fluid>
          <Image
            src="/assets/images/flower_branch.avif"
            alt="branche de pommier en fleurs"
            width={"1150"}
            height={"767"}
          ></Image>

          <section>
            {/* ARTICLE 1 */}
            <h2>LOREM IPSUM</h2>

            <article className="article1">
              <Image
                className="img1"
                src="/assets/photos/castle_garden_gooses.svg"
                alt="Jardin château"
                style={{ width: "36vw" }}
              ></Image>

              <p>
                <span className="span_firstLetter">L</span>orem ipsum dolor sit
                amet, consectetur adipisicing elit. Dolorem aliquam, labore
                dolorum aut incidunt, omnis quidem doloribus suscipit molestias,
                dolores molestiae quod pariatur est? Assumenda molestiae odit
                repellat? Necessitatibus, quisquam.
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem aliquam, labore dolorum aut incidunt, omnis quidem
                doloribus suscipit molestias, dolores molestiae quod pariatur
                est? Assumenda molestiae odit repellat? Necessitatibus,
                quisquam.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem aliquam, labore dolorum aut incidunt, omnis quidem
                doloribus suscipit molestias, dolores molestiae quod pariatur
                est? Assumenda molestiae odit repellat? Necessitatibus,
                quisquam. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Dolorem aliquam, labore dolorum aut incidunt, omnis quidem
                doloribus suscipit molestias, dolores molestiae quod pariatur
                est? Assumenda molestiae odit repellat? Necessitatibus,
                quisquam.
              </p>
            </article>

            {/* ARTICLE 2 */}
            <h2>LOREM IPSUM</h2>

            <article id="article2">
              <Image
                id="img2"
                src="/assets/photos/castle_garden_gooses.svg"
                alt="Jardin du château avec des oies"
                style={{ width: "36vw" }}
              ></Image>

              <p>
                <span className="span_firstLetter">L</span>orem ipsum dolor sit
                amet, consectetur adipisicing elit. Dolorem aliquam, labore
                dolorum aut incidunt, omnis quidem doloribus suscipit molestias,
                dolores molestiae quod pariatur est? Assumenda molestiae odit
                repellat? Necessitatibus, quisquam.
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem aliquam, labore dolorum aut incidunt, omnis quidem
                doloribus suscipit molestias, dolores molestiae quod pariatur
                est? Assumenda molestiae odit repellat? Necessitatibus,
                quisquam.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem aliquam, labore dolorum aut incidunt, omnis quidem
                doloribus suscipit molestias, dolores molestiae quod pariatur
                est? Assumenda molestiae odit repellat? Necessitatibus,
                quisquam. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Dolorem aliquam, labore dolorum aut incidunt, omnis quidem
                doloribus suscipit molestias, dolores molestiae quod pariatur
                est? Assumenda molestiae odit repellat? Necessitatibus,
                quisquam.
              </p>
            </article>

            {/* ARTICLE 3 */}
            <h2>LOREM IPSUM</h2>
            <article className="article1">
              <Image
                className="img1"
                src="/assets/photos/iron_fish.svg"
                alt="Jardin château"
                style={{ width: "36vw" }}
              ></Image>

              <p>
                <span className="span_firstLetter">L</span>orem ipsum dolor sit
                amet, consectetur adipisicing elit. Dolorem aliquam, labore
                dolorum aut incidunt, omnis quidem doloribus suscipit molestias,
                dolores molestiae quod pariatur est? Assumenda molestiae odit
                repellat? Necessitatibus, quisquam.
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem aliquam, labore dolorum aut incidunt, omnis quidem
                doloribus suscipit molestias, dolores molestiae quod pariatur
                est? Assumenda molestiae odit repellat? Necessitatibus,
                quisquam.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem aliquam, labore dolorum aut incidunt, omnis quidem
                doloribus suscipit molestias, dolores molestiae quod pariatur
                est? Assumenda molestiae odit repellat?

                {/* button redirection towards artist with embed svg */}
                <Button href="http://j-damville-j.fr/" id="btn_artisan"><Image src="/assets/icones/tiles.svg"
                  alt="ceramic icone" id="Icon_ceramist"></Image>
                  ATELIER JULIETTE & JACQUES DAMVILLE
                </Button>
              </p>
            </article>
          </section>
        </Container>
      </main>
    </>
  );
};

export default ParcEtDomaine;

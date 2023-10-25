import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { CompanyNav } from '../../components/MiddleNav';

export default function About() {
  return (
    <div>
      <Head>
        <title>Our Journey | Marion Zoological</title>
      </Head>

      <Layout>
        <div className="lg:mb-16">
          <Image
            src="/images/banner-giraffe.jpg"
            width={730}
            height={211}
            layout="responsive"
          ></Image>
        </div>

        <article>
          <div className="container">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-16">
              <div className="lg:col-span-3">
                <CompanyNav active="Our Journey"></CompanyNav>
              </div>

              <div className="lg:col-span-9">
                <h1>Our Journey</h1>
                <h3>1984 </h3>
                <ul>
                  <li>
                    Scenic Bird Food first original complete manufactured foods
                    for birds.
                  </li>
                  <li>Creators of interesting shapes, colors, and texture.</li>
                  <li>
                    Tested in zoological institutions for 3 years (1984 - 1987)
                    and fed ~ 200 bird species.
                  </li>
                  <li>
                    Creators of Scenic Bird Food in human grade manufacturing
                    processes that create palatable food.
                  </li>
                </ul>

                <h3>1988</h3>
                <ul>
                  <li>
                    Leaf Eater Food first original complete manufactured food
                    for primates.{' '}
                  </li>
                  <li>
                    Developer of the first high fiber low carbohydrate foods for
                    primates.
                  </li>
                  <li>
                    Creators of high fiber foods for primates with interesting
                    shapes and color that alleviate feeding boredom.
                  </li>
                  <li>
                    Creators of food standards of high fiber animal foods that
                    include plant proteins and all natural human grade
                    ingredients.
                  </li>
                  <li>
                    Creators of human grade manufacturing processes that create
                    palatable food.
                  </li>
                </ul>

                <h3>1989</h3>
                <ul>
                  <li>
                    First to add iron, copper, and iodine from safe all natural
                    sources
                  </li>
                  <li>First to add calcium from low iron sources.</li>
                  <li>First add heat resistant vitamins.</li>
                  <li>
                    First to calculate, predict and confirm vitamin degradation
                    curves.
                  </li>
                </ul>

                <h3>1990</h3>

                <ul>
                  <li>Creator of Leaf Eater Brand for Panda</li>
                  <li>
                    Creators of preservative-free foods with Vitamin C and mixed
                    tocopherols
                  </li>
                  <li>
                    First to study the requirements for total life cycle foods
                    for primates and panda.
                  </li>
                  <li>
                    Marion Leaf Eater was selected for inclusion in the “Species
                    Survival Guide” for Red Panda.
                  </li>
                </ul>

                <h3>1991</h3>
                <ul>
                  <li>
                    Contributors to peer review scientific literature based upon
                    long-term studies of leaf eating primates.
                  </li>
                  <li>
                    First scientific research and long-term studies published.
                  </li>
                  <li>
                    First presentation to the American Association of Zoological
                    Parks and Aquaria.
                  </li>
                  <li>
                    First to use stabilized vitamin C for long shelf life.
                  </li>
                </ul>

                <h3>1996</h3>
                <ul>
                  <li>Creators of Mozaic Food for reptiles.</li>
                  <li>
                    Presented on-going nutritional studies to five international
                    nutrition conferences.
                  </li>
                </ul>

                <h3>1998</h3>
                <ul>
                  <li>
                    Creators of the Giant Panda Food which has raised Giant
                    Pandas in captivity worldwide.
                  </li>
                  <li>
                    Presented on-going nutritional studies to five international
                    nutrition conferences.
                  </li>
                </ul>

                <h3>2003</h3>
                <ul>
                  <li>
                    First to include OMEGA fatty acids for improved immune
                    response in exotic animals.
                  </li>
                </ul>

                <h3>2004</h3>
                <ul>
                  <li>
                    Created foraging foods, treats and enrichment programs for
                    giraffes, elephant, ant eaters, groundhogs, kangaroos and
                    bears.
                  </li>
                </ul>

                <h3>2022-2023​</h3>
                <ul>
                  <li>
                    Implementation Human Kosher quality meets more stringent
                    quality standards and certifications than animal and human
                    foods.
                  </li>
                  <li>
                    Direct human and kosher ingredient sourcing and human grade
                    manufacturing process.
                  </li>
                  <li>Marion Foods are free of 8 major food allergens.</li>
                  <li>Kosher certification</li>
                  <li>
                    Improved manufacturing process in which morsels are
                    water-tight and do not fall apart in water.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </div>
  );
}

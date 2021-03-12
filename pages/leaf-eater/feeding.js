import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { LeafEaterNav } from '../../components/MiddleNav';

export default function LeafEaterNutrition() {
  return (
    <div>
      <Head>
        <title>Feeding Directions - Leaf Eater Foods | Marion Zoological</title>
      </Head>

      <Layout>
        <div className="lg:mb-16">
          <Image
            src="/images/banner-gorilla.jpg"
            width={730}
            height={211}
            layout="responsive"
            alt="gorilla"
          ></Image>
        </div>

        <article>
          <div className="container">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-16">
              <div className="lg:col-span-3">
                <LeafEaterNav active="Feeding Directions"></LeafEaterNav>
              </div>

              <div className="lg:col-span-9">
                <h1>Leaf Eater Foods</h1>

                <h3>Feeding Directions</h3>

                <p>
                  Marion Leaf Eater food sets the standard for dietary
                  versatility. It can be fed as an integral part of an overall
                  feeding program, as a supplement, or for enrichment. Depending
                  on other available foodstuffs, good nutritional feeding
                  protocols can be developed for many species as long as dietary
                  best practices are maintained. It is important to match the
                  metabolic energy intake of the menu and items offered to each
                  species depending on its needs. Always provide plenty of fresh
                  water. Marion Leaf Eater Food can be fed with fruits and
                  vegetables to give your primates variety and natural sources
                  of moisture and fiber.
                </p>

                <p>
                  If mixed with fruits and vegetables, follow this general
                  outline:
                </p>

                <table>
                  <tbody className="text-center">
                    <tr>
                      <td>Mature Primates</td>
                      <td>50&#37; Leaf Eater &amp; 50&#37; fruits, veggies</td>
                    </tr>
                    <tr>
                      <td>Immature Primates</td>
                      <td>75&#37; Leaf Eater &amp; 25&#37; fruits, veggies</td>
                    </tr>
                    <tr>
                      <td>Breeding Primates</td>
                      <td>90&#37; Leaf Eater &amp; 10&#37; fruits, veggies</td>
                    </tr>
                  </tbody>
                </table>

                <p>
                  Always follow standards and best practices for feeding animals
                  as you would in developing dietary protocols for humans:
                </p>

                <figure className="pl-4">
                  <blockquote>
                    <q>
                      Any feeding program should consider natural dietary habits
                      and provide assurance of a nutritionally complete diet,
                      while matching metabolizable energy intake with need.
                    </q>
                  </blockquote>
                  <figcaption>
                    D.E. Ullrey, PhD, Professor Emeritus, Michigan State
                    University, Department of Comparative Nutrition
                  </figcaption>
                </figure>

                <figure className="pl-4">
                  <blockquote>
                    <q>
                      It would seem obvious that if these principles are not
                      followed, negative effects can be caused by the best of
                      circumstances. Unfortunately, not everyone understands
                      this fact.
                    </q>
                  </blockquote>
                  <figcaption>
                    Jim Goetz, President, Marion Zoological
                  </figcaption>
                </figure>

                <p className="mb-8">
                  Leaf Eater will not lose its shape when softened with water.
                  When Leaf Eater is fed dry, it can be an effective dentifrice.
                </p>

                <h3>General Feeding Instructions</h3>
                <ul className="list-square">
                  <li>
                    This product may be fed alone or offered with fruits and
                    vegetables.
                  </li>
                  <li>
                    Marion Leaf Eater Food is the only source of a balanced diet
                    offered and if mixed with other foods, should not constitute
                    less than one-half of the total food consumed by weight.
                  </li>
                  <li>Always provide plenty of fresh water.</li>
                  <li>
                    Do not use food that is old, or has signs of insect or
                    rodent contamination.
                  </li>
                  <li>
                    Never use food that has been improperly stored and shows
                    signs of moldy growth.
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

import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { ReptileNav } from '../../components/MiddleNav';

export default function ReptileFeeding() {
  return (
    <div>
      <Head>
        <title>
          Feeding Directions - Mozaic Reptile Foods | Marion Zoological
        </title>
      </Head>

      <Layout>
        <div className="lg:mb-16">
          <Image
            src="/images/banner-iguana.jpg"
            width={730}
            height={211}
            layout="responsive"
            alt="iguana"
          ></Image>
        </div>

        <article>
          <div className="container">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-16">
              <div className="lg:col-span-3">
                <ReptileNav active="Feeding Directions"></ReptileNav>
              </div>

              <div className="lg:col-span-9">
                <h1>Mozaic Reptile Foods</h1>

                <h3>Feeding Directions</h3>

                <p>
                  Mozaic Reptile Food is a complete formulated diet and does not
                  require additional vitamins or other supplements when feeding.
                  Adding additional vitamins and minerals may prove harmful.
                  Prior to choosing additional vitamins for your reptile, please
                  consult with a veterinarian or animal nutritionist.
                </p>

                <p>
                  Mozaic Reptile Foods are safe to mix with a few fruits and
                  vegetables for added variety and natural sources of moisture
                  and fiber. Additionally, this food can be moistened with
                  water, fruit, or vegetable juice without losing its form and
                  shape. Moistened foods are sometimes easier to feed to
                  juvenile or smaller reptiles and amphibians.
                </p>

                <table>
                  <tbody className="text-center">
                    <tr>
                      <td>Mature Reptiles</td>
                      <td>50&#37; Leaf Eater &amp; 50&#37; fruits, veggies</td>
                    </tr>
                    <tr>
                      <td>Immature Reptiles</td>
                      <td>75&#37; Leaf Eater &amp; 25&#37; fruits, veggies</td>
                    </tr>
                    <tr>
                      <td>Breeding Reptiles</td>
                      <td>90&#37; Leaf Eater &amp; 10&#37; fruits, veggies</td>
                    </tr>
                  </tbody>
                </table>

                <h3>General Feeding Instructions</h3>
                <ul className="list-square">
                  <li>
                    This product may be fed alone or offered with fruits and
                    vegetables.
                  </li>
                  <li>
                    If mixed with other foods, Mozaic Reptile Food should not
                    constitute less than one-half of the total food consumed by
                    weight.
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

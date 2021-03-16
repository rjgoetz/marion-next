import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { InsectNav } from '../../components/MiddleNav';

export default function InsectNutrition() {
  return (
    <div>
      <Head>
        <title>
          Nutrition Facts - Orthocal Insect Supplement | Marion Zoological
        </title>
      </Head>

      <Layout>
        <div className="lg:mb-16">
          <Image
            src="/images/banner-cricket.jpg"
            width={730}
            height={211}
            layout="responsive"
            alt="cricket"
          ></Image>
        </div>

        <article>
          <div className="container">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-16">
              <div className="lg:col-span-3">
                <InsectNav active="Nutrition Facts"></InsectNav>
              </div>

              <div className="lg:col-span-9">
                <h1>Orthocal Insect Supplement</h1>

                <h2>Ingredients</h2>

                <p className="mb-8">
                  Ground yellow corn, ground wheat, soybean meal, dehydrated
                  alfalfa meal, soybean oil (stabilized), calcium carbonate,
                  dehydrated alfalfa meal, dicalcium phosphate, calcium
                  carbonate, sodium chloride, sodium selenite, L-lysine, choline
                  chloride, zinc oxide, ferrous sulfate, riboflavin, thiamin
                  mononitrate, potassium iodate, ascorbic acid (Vitamin C),
                  biotin, cyanocobalamin (Vitamin B-12), stabilized retinly
                  palmitate (Vitamin A), D-activated animal sterol (Vitamin
                  D-3), di-alpha tocopherly acetate (Vitamin E), menadione
                  dimethyl pyrimidinyl bisulfate (Vitamin K).
                </p>

                <div className="md:flex md:gap-8 lg:flex-wrap xl:flex-nowrap">
                  <div className="md:w-1/2 lg:w-2/3 xl:w-1/2">
                    <h2>Guaranteed Analysis</h2>
                    <table>
                      <tbody>
                        <tr>
                          <td>Crude Protein</td>
                          <td>18&#37; Min.</td>
                        </tr>
                        <tr>
                          <td>Calcium</td>
                          <td>8&#37; Min.</td>
                        </tr>
                        <tr>
                          <td>Calcium</td>
                          <td>10&#37; Max.</td>
                        </tr>
                        <tr>
                          <td>Lysine</td>
                          <td>1&#37; Min.</td>
                        </tr>
                        <tr>
                          <td>Phosphorous</td>
                          <td>0.7&#37; Min.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </div>
  );
}

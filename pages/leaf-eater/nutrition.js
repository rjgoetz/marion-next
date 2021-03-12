import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { LeafEaterNav } from '../../components/MiddleNav';

export default function LeafEaterNutrition() {
  return (
    <div>
      <Head>
        <title>Nutrition Facts - Leaf Eater Foods | Marion Zoological</title>
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
                <LeafEaterNav active="Nutrition Facts"></LeafEaterNav>
              </div>

              <div className="lg:col-span-9">
                <h1>Leaf Eater Foods</h1>

                <h2>Ingredients</h2>

                <p className="mb-8">
                  Soybean meal, corn gluten meal, soybean hulls, sugar beet
                  pulp, corn hominy feed, yellow corn, sucrose, dehydrated
                  alfalfa meal, zinc sulfate, soybean oil (stabilized),
                  dicalcium phosphate, flaxseed oil, niacin supplement, apple
                  fiber, manganese sulfate, ferrous sulfate, calcium carbonate,
                  d-calcium pantothenate, sodium chloride, copper sulfate,
                  L-lysine, riboflavin supplement, thiamin mononitrate, cobalt
                  oxide, folic acid, menadione nicotinamide bisulfite (vitamin
                  K), pyridoxine HCL (vitamin B-6), l-ascorbyl-2-polyphosphate
                  (source of vitamin C), choline chloride, ethylenediamine
                  dihydriodide, FDC # 40, biotin, sodium selenite, vitamin B-12
                  supplement, vitamin A supplement, vitamin D-3 supplement,
                  vitamin E supplement.
                </p>

                <div className="md:flex md:gap-8 lg:flex-wrap xl:flex-nowrap">
                  <div className="md:w-1/2 lg:w-2/3 xl:w-1/2">
                    <h2>Guaranteed Analysis</h2>
                    <table>
                      <tbody>
                        <tr>
                          <td>Crude Protein</td>
                          <td>23&#37; Min.</td>
                        </tr>
                        <tr>
                          <td>Crude Fat</td>
                          <td>6.5&#37; Min.</td>
                        </tr>
                        <tr>
                          <td>Crude Fiber</td>
                          <td>11&#37; Min.</td>
                        </tr>
                        <tr>
                          <td>Moisture</td>
                          <td>10&#37; Max.</td>
                        </tr>
                        <tr>
                          <td>Ash</td>
                          <td>7&#37; Max.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="md:w-1/2 lg:w-2/3 xl:w-1/2">
                    <h2>Selected Nutrients</h2>
                    <table>
                      <tbody></tbody>
                      <tr>
                        <td>Acid Detergent Fiber</td>
                        <td>13&#37; Min.</td>
                      </tr>
                      <tr>
                        <td>Acid Detergent Fiber</td>
                        <td>16&#37; Max.</td>
                      </tr>
                      <tr>
                        <td>Available Iron</td>
                        <td>100 ppm Min.</td>
                      </tr>
                      <tr>
                        <td>Neutral Detergent Fiber</td>
                        <td>21&#37; Min.</td>
                      </tr>
                      <tr>
                        <td>Calcium</td>
                        <td>1.0&#37; Min.</td>
                      </tr>
                      <tr>
                        <td>Phosphorus</td>
                        <td>0.7&#37; Min.</td>
                      </tr>
                      <tr>
                        <td>Vitamin D-3</td>
                        <td>3500 IU/Kg Min.</td>
                      </tr>
                      <tr>
                        <td>Copper</td>
                        <td>20 ppm Min.</td>
                      </tr>
                      <tr>
                        <td>Iodine</td>
                        <td>1.0 ppm Min.</td>
                      </tr>
                      <tr>
                        <td>Selenium</td>
                        <td>0.3 ppm Min.</td>
                      </tr>
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

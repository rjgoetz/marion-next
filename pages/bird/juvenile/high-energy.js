import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../../components/Layout';
import PDFLink from '../../../components/PDFLink';
import { BirdNav, JuvenileBirdNav } from '../../../components/MiddleNav';

export default function HighEnergy() {
  return (
    <div>
      <Head>
        <title>
          High Energy Hand Feeding for Juvenile Parrots - Scenic Bird Food |
          Marion Zoological
        </title>
      </Head>

      <Layout>
        <div className="lg:mb-16">
          <Image
            src="/images/banner-baby-macaws.jpg"
            width={730}
            height={211}
            layout="responsive"
            alt="baby macaws"
          ></Image>
        </div>

        <article>
          <div className="container">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-16">
              <div className="lg:col-span-3">
                <BirdNav active="Juvenile Birds">
                  <JuvenileBirdNav active="Hand Feeding">
                    <h4>Literature</h4>
                    <ul className="pl-0 list-none leading-loose">
                      <li className="mb-0 text-sm leading-loose">
                        <PDFLink
                          href="/docs/HighEnergy_04-10.pdf"
                          title="Brochure"
                        ></PDFLink>
                      </li>
                      <li className="mb-0 text-sm leading-loose">
                        <PDFLink
                          href="/docs/Catalog_Scenic_03-12.pdf"
                          title="Catalog"
                        ></PDFLink>
                      </li>
                    </ul>
                  </JuvenileBirdNav>
                </BirdNav>
              </div>

              <div className="lg:col-span-9">
                <h1>Scenic High Energy Hand Feeding</h1>

                <h2>Food Details</h2>
                <div className="flex flex-col items-center mb-8 gap-8 sm:flex-row lg:gap-16">
                  <div>
                    <p className="mb-0">
                      Scenic&trade; High Energy Hand Feeding Food is a dry
                      powder that is pre-cooked with essential ingredients for
                      the improved health and development of baby chicks.
                    </p>
                  </div>
                </div>

                <h2>Creating a Diet</h2>
                <p>
                  Feed to young birds over two weeks of age. Made from
                  pre-cooked ingredients for maximum sterility and ease of
                  digestion. Ready to be mixed with sterile water and fed with a
                  syringe or spoon.
                </p>

                <h2>General Feeding Instructions</h2>
                <ul className="mb-8">
                  <li>
                    Store High Energy Hand Feeding in a cool, dry location while
                    keeping it covered when not in use.
                  </li>
                  <li>No refrigeration is required.</li>
                  <li>
                    Do not use food that is old or shows signs of insect or
                    rodent contamination. Never serve moldy food.
                  </li>
                  <li>Provide fresh water to your bird daily.</li>
                  <li>
                    Caution: Do not add vitamin and mineral supplements to this
                    formula. This will upset the balance of nutrients already
                    present in the food, causing potential contamination.
                  </li>
                </ul>

                <h2>Ordering Information</h2>
                <div className="mb-4 flex flex-col items-center gap-8 sm:flex-row xl:gap-16">
                  <div className="w-2/3 sm:w-1/4">
                    <figure>
                      <Image
                        src="/images/hand-feeding-food.jpg"
                        alt="High Energy Hand Feeding Food"
                        width={400}
                        height={406}
                      ></Image>
                      <figcaption>SKU#: HEHF B20 / B50</figcaption>
                    </figure>
                  </div>
                </div>

                <h2>Ingredients</h2>
                <p className="mb-8">
                  Whole grain white corn, soy protein isolate, corn gluten meal,
                  rice flour, sucrose, soybean oil, sugar beet pulp, zinc
                  sulfate, flaxseed oil, dicalcium phosphate, niacin supplement,
                  manganese sulfate, ferrous sulfate, potassium chloride,
                  calcium carbonate, calcium pantothenate, copper sulfate,
                  riboflavin supplement, thiamin mononitrate, dl-methionine,
                  choline chloride, sodium chloride, l-lysine, folic acid,
                  menadione nicotinamide bisulfite, l-ascorbyl-2-polyphosphate
                  (source of vitamin C), pyridoxine hydrochloride, magnesium
                  oxide, ethylenediamine dihydriodide, d-biotin, sodium
                  selenite, vitamin B-12 supplement, vitamin A supplement,
                  vitamin D-3 supplement, vitamin E supplement.
                </p>

                <h2>Nutrition Information</h2>

                <div className="md:flex md:gap-8 lg:flex-wrap xl:flex-nowrap">
                  <div className="md:w-1/2 lg:w-2/3 xl:w-1/2">
                    <h3>Guaranteed Analysis</h3>
                    <table>
                      <tbody>
                        <tr>
                          <td>Crude Protein</td>
                          <td>24&#37; Min.</td>
                        </tr>
                        <tr>
                          <td>Crude Fat</td>
                          <td>9&#37; Min.</td>
                        </tr>
                        <tr>
                          <td>Crude Fiber</td>
                          <td>7&#37; Max.</td>
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
                    <h3>Selected Nutrients</h3>
                    <table>
                      <tbody>
                        <tr>
                          <td>Available Iron</td>
                          <td>80 ppm Min.</td>
                        </tr>
                        <tr>
                          <td>Calcium</td>
                          <td>1.2&#37; Min.</td>
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
                          <td>Lysine</td>
                          <td>1.2&#37; Min.</td>
                        </tr>
                        <tr>
                          <td>Methionine &amp; Cystine</td>
                          <td>0.9&#37; Min.</td>
                        </tr>
                        <tr>
                          <td>Copper</td>
                          <td>20 ppm Min.</td>
                        </tr>
                        <tr>
                          <td>Iodine</td>
                          <td>2.5 ppm Min.</td>
                        </tr>
                        <tr>
                          <td>Selenium</td>
                          <td>0.3 ppm Min.</td>
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

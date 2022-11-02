import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../../components/Layout';
import PDFLink from '../../../components/PDFLink';
import { BirdNav, JuvenileBirdNav } from '../../../components/MiddleNav';
import { useState } from 'react';

export default function HighEnergy() {
  const [tab, setTab] = useState('scenic');

  function switchTab(tab) {
    setTab(tab);
  }

  return (
    <div>
      <Head>
        <title>Hand Weaning - Scenic Bird Food | Marion Zoological</title>
      </Head>

      <Layout>
        <div className="lg:mb-16">
          <Image
            src="/images/banner-macaws.jpg"
            width={730}
            height={211}
            layout="responsive"
            alt="scarlet macaws"
          ></Image>
        </div>

        <article>
          <div className="container">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-16">
              <div className="lg:col-span-3">
                <BirdNav active="Juvenile Birds">
                  <JuvenileBirdNav active="Hand Weaning">
                    <h4>Literature</h4>
                    <ul className="pl-0 list-none leading-loose">
                      <li className="mb-0 text-sm leading-loose">
                        <PDFLink
                          href="/docs/HandWeaning_10-09.pdf"
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
                <figure className="mb-8">
                  <Image
                    src="/images/hand-weaning-banner.jpg"
                    alt="Hand Weaning Food Banner"
                    width={567}
                    height={297}
                    layout="responsive"
                  ></Image>
                </figure>

                <h2>Food Details</h2>
                <div className="flex flex-col items-center mb-8 gap-8 sm:flex-row lg:gap-16">
                  <div className="sm:w-2/3 xl:w-3/4">
                    <p className="mb-0">
                      Growing up in captivity is made a lot easier when there is
                      a comfort food just like mom used to make. Use
                      Scenic&trade; Hand Weaning Food to teach juvenile birds to
                      eat and adult birds to cope. Available in original and
                      high energy formulas.
                    </p>
                  </div>
                  <div className="w-1/2 sm:w-1/3 xl:w-1/4">
                    <Image
                      src="/images/hand-weaning-product.jpg"
                      alt="Hand weaning pieces"
                      width={400}
                      height={326}
                    ></Image>
                  </div>
                </div>

                <h2>Creating a Diet</h2>
                <p>
                  Scenic Hand Weaning is beneficial to medium to large-sized
                  birds that are weaning. Amazon Hand Weaning and Macaw Hand
                  Weaning are perfect for medium to large-sized birds that will
                  benefit from a higher fat basis during stressful transition.
                </p>
                <p>
                  Scenic Hand Weaning Food is served warm and wet. Simply heat
                  up the water and soak the food. In 2-3 minutes, your bird will
                  be eating out of your hand.
                </p>

                <h2>General Feeding Instructions</h2>
                <ul className="mb-8">
                  <li>
                    Store Scenic Hand Weaning in a cool, dry location while
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
                      <h4 className="text-center mb-2">Scenic</h4>
                      <Image
                        src="/images/scenic-hand-weaning.jpg"
                        alt="Scenic Hand Weaning Food"
                        width={400}
                        height={406}
                      ></Image>
                      <figcaption>
                        SKU#: SHWL B25<br></br>Size: 1"x.25" (2.5 x .6 cm)
                      </figcaption>
                    </figure>
                  </div>
                  <div className="w-2/3 sm:w-1/4">
                    <figure>
                      <h4 className="text-center mb-2">Amazon (9% fat)</h4>
                      <Image
                        src="/images/amazon-hand-weaning.jpg"
                        alt="Amazon Hand Weaning Food"
                        width={400}
                        height={406}
                      ></Image>
                      <figcaption>
                        SKU#: AMHW B25<br></br>Size: 1"x.25" (2.5 x .6 cm)
                      </figcaption>
                    </figure>
                  </div>
                </div>

                <div className="border border-beige">
                  <ul className="flex justify-between list-none pl-0">
                    <li
                      className={`text-center w-1/2 p-3 ${
                        tab === 'amazon' ? 'bg-beige' : 'bg-white'
                      }`}
                    >
                      <button onClick={() => setTab('scenic')}>
                        Scenic Hand Weaning
                      </button>
                    </li>
                    <li
                      className={`text-center w-1/2 p-3 ${
                        tab === 'scenic' ? 'bg-beige' : 'bg-white'
                      }`}
                    >
                      <button onClick={() => setTab('amazon')}>
                        Amazon Hand Weaning
                      </button>
                    </li>
                  </ul>
                  <div className="p-4">
                    {tab === 'scenic' ? (
                      <>
                        <h2>Ingredients</h2>
                        <p className="mb-8">
                          Whole grain yellow corn, soybean meal, corn gluten
                          meal, corn hominy feed, sucrose, sugar beet pulp,
                          dehydrated alfalfa meal, soybean oil, zinc sulfate,
                          flaxseed oil, dicalcium phosphate, niacin supplement,
                          apple fiber, manganese sulfate, ferrous sulfate,
                          calcium carbonate, calcium pantothenate, sodium
                          chloride, L-lysine, copper sulfate, riboflavin
                          supplement, thiamin mononitrate, cobalt oxide, folic
                          acid, l-ascorbyl-2-polyphosphate (source of vitamin
                          C), pyridoxine hydrochloride, choline chloride,
                          ethylenediamine dihydriodide, d-biotin, sodium
                          selenite, vitamin B-12 supplement, vitamin A
                          supplement, vitamin D-3 supplement, vitamin E
                          supplement.
                        </p>

                        <h2>Nutrition Information</h2>

                        <div className="md:flex md:gap-8 lg:flex-wrap xl:flex-nowrap">
                          <div className="md:w-1/2 lg:w-2/3 xl:w-1/2">
                            <h3>Guaranteed Analysis</h3>
                            <table>
                              <tbody>
                                <tr>
                                  <td>Crude Protein</td>
                                  <td>20&#37; Min.</td>
                                </tr>
                                <tr>
                                  <td>Crude Fat</td>
                                  <td>7&#37; Min.</td>
                                </tr>
                                <tr>
                                  <td>Crude Fiber</td>
                                  <td>5&#37; Max.</td>
                                </tr>
                                <tr>
                                  <td>Moisture</td>
                                  <td>10&#37; Max.</td>
                                </tr>
                                <tr>
                                  <td>Ash</td>
                                  <td>6&#37; Max.</td>
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
                      </>
                    ) : (
                      <>
                        <h2>Ingredients</h2>
                        <p className="mb-8">
                          Whole grain white corn, soy protein isolate, corn
                          gluten meal, rice flour, sucrose, soybean oil, sugar
                          beet pulp, zinc sulfate, flaxseed oil, dicalcium
                          phosphate, niacin supplement, manganese sulfate,
                          ferrous sulfate, potassium chloride, calcium
                          carbonate, calcium pantothenate, copper sulfate,
                          riboflavin supplement, thiamin mononitrate,
                          dl-methionine, choline chloride, sodium chloride,
                          L-lysine, folic acid, menadione nicotinamide
                          bisulfite, l-ascorbyl-2-polyphosphate (source of
                          vitamin C), pyridoxine hydrochloride, magnesium oxide,
                          ethylenediamine dihydriodide, d-biotin, sodium
                          selenite, vitamin B-12 supplement, vitamin A
                          supplement, vitamin D-3 supplement, vitamin E
                          supplement.
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
                      </>
                    )}
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

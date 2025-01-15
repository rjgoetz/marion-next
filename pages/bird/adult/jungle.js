import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import PDFLink from '../../../components/PDFLink';
import { BirdNav, AdultBirdNav } from '../../../components/MiddleNav';

export default function Jungle() {
  return (
    <div>
      <Head>
        <title>
          Jungle Food for Macaw, Cockatoo, Amazon, and other Large Parrots -
          Scenic Bird Food | Marion Zoological
        </title>
      </Head>

      <Layout>
        <div className="lg:mb-16">
          <Image
            src="/images/macaws-banner-new.jpg"
            width={730}
            height={211}
            layout="responsive"
            alt="two macaw birds"
          ></Image>
        </div>

        <article>
          <div className="container">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-16">
              <div className="lg:col-span-3">
                <BirdNav active="Adult Birds">
                  <AdultBirdNav active="Jungle">
                    <h4>Literature</h4>
                    <ul className="pl-0 list-none leading-loose">
                      <li className="mb-0 text-sm leading-loose">
                        <PDFLink
                          href="/docs/JungleParadise_10-09.pdf"
                          title="Brochure"
                        ></PDFLink>
                      </li>
                    </ul>
                  </AdultBirdNav>
                </BirdNav>
              </div>

              <div className="lg:col-span-9">
                <h1>Scenic Jungle Food</h1>

                <h2>Food Details</h2>
                <div className="flex flex-col items-center mb-8 gap-8 sm:flex-row lg:gap-16">
                  <div className="sm:w-2/3 xl:w-3/4">
                    <p className="mb-0">
                      Scenic&trade; Jungle Food is an elongated, pencil-shaped
                      morsel about 1" (2.5 cm) long with a light and crunchy
                      texture for large- and medium-sized parrots like African
                      Greys, Macaws, and Cockatoos that like to pick up food
                      with their feet.
                    </p>
                  </div>
                  <div className="w-1/2 sm:w-1/3 xl:w-1/4">
                    <Image
                      src="/images/jungle-product.jpg"
                      alt="Jungle Food pieces"
                      width={400}
                      height={326}
                    ></Image>
                  </div>
                </div>

                <h2>Creating a Diet</h2>
                <p>
                  Jungle Food can be fed as single diet or mixed with fruits and
                  vegetables. Follow this protocol when feeding with fruits and
                  vegetables:
                </p>

                <table>
                  <tbody>
                    <tr>
                      <td>Mature Pet Birds</td>
                      <td>50% Scenic &amp; 50% fruits, veggies</td>
                    </tr>
                    <tr>
                      <td>Immature or Sick Birds</td>
                      <td>75% Scenic &amp; 25% fruits, veggies</td>
                    </tr>
                    <tr>
                      <td>Breeding or Show Birds</td>
                      <td>90% Scenic &amp; 10% fruits, veggies</td>
                    </tr>
                  </tbody>
                </table>

                <h2>General Feeding Instructions</h2>
                <ul className="mb-8">
                  <li>
                    Store Jungle Food in a cool, dry location while keeping it
                    covered when not in use.
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
                    <h4 className="text-center mb-2">Mix</h4>
                    <figure>
                      <Image
                        src="/images/mix-jungle.jpg"
                        alt="Mix Jungle Food"
                        width={400}
                        height={406}
                      ></Image>
                      <figcaption>SKU#: MXJ B25</figcaption>
                    </figure>
                  </div>

                  <div className="w-2/3 sm:w-1/4">
                    <h4 className="text-center mb-2">Corn</h4>
                    <figure>
                      <Image
                        src="/images/corn-jungle.jpg"
                        alt="Corn Jungle Food"
                        width={400}
                        height={406}
                      ></Image>
                      <figcaption>SKU# CJ B25</figcaption>
                    </figure>
                  </div>

                  <div className="w-2/3 sm:w-1/4">
                    <h4 className="text-center mb-2">Apple</h4>
                    <figure>
                      <Image
                        src="/images/apple-jungle.jpg"
                        alt="Apple Jungle Food"
                        width={400}
                        height={406}
                      ></Image>
                      <figcaption>SKU# AJ B25</figcaption>
                    </figure>
                  </div>
                </div>

                <h2>Ingredients</h2>
                <p className="mb-8">
                  Whole grain yellow corn, soybean meal, corn gluten meal, corn
                  hominy feed, sucrose, sugar beet pulp, dehydrated alfalfa
                  meal, soybean oil, zinc sulfate, flaxseed oil, dicalcium
                  phosphate, niacin supplement, apple fiber, manganese sulfate,
                  ferrous sulfate, calcium carbonate, calcium pantothenate,
                  sodium chloride, L-lysine, copper sulfate, riboflavin
                  supplement, thiamin mononitrate, cobalt oxide, folic acid,
                  l-ascorbyl-2-polyphosphate (source of vitamin C), natural and
                  artificial color (mix and apple products), pyridoxine
                  hydrochloride, choline chloride, ethylenediamine dihydriodide,
                  d-biotin, sodium selenite, vitamin B-12 supplement, vitamin A
                  supplement, vitamin D-3 supplement, vitamin E supplement.
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

                <h2>Where to Buy</h2>
                <p className="mb-8">
                  You can find Scenic Jungle Food at our online store:{' '}
                  <Link href="https://www.scenicbirdfood.com/collections/jungle">
                    <a target="_blank">www.ScenicBirdFood.com</a>
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </div>
  );
}

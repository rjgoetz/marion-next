import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { FoodsNav } from '../../components/MiddleNav';

export default function LeafEaterSpecies() {
  return (
    <div>
      <Head>
        <title>Species Groups - Leaf Eater Foods | Marion Zoological</title>
      </Head>

      <Layout>
        <div className="lg:mb-16">
          <Image
            src="/images/banner-gorilla.jpg"
            width={730}
            height={211}
            layout="responsive"
          ></Image>
        </div>

        <article>
          <div className="container">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-16">
              <div className="lg:col-span-3">
                <FoodsNav active="Species Groups"></FoodsNav>
              </div>

              <div className="lg:col-span-9">
                <h1>Leaf Eater Foods</h1>

                <h3>Species Groups</h3>

                <p>
                  Marion Leaf Eater Food is recommended by wildlife and zoo
                  veterinarians as a primary diet for primate species groups
                  listed below. It has also been successfully used for
                  supplemental diets in various feeding protocols for elephants,
                  giraffes, anteaters, brown bears, sloths, and slow loris.
                </p>

                <p>
                  Marion Leaf Eater Food has also been successfully fed to
                  endangered species on the Species Survival Plan such as the
                  Golden-bellied and the Black Mangabey at the San Diego Zoo,
                  and the Douc Langurs at the Philadephia Zoo.
                </p>

                <p>
                  For suggested feeding protocols, please see{' '}
                  <Link href="/leaf-eater/feeding">
                    <a>feeding directions</a>
                  </Link>
                  .
                </p>

                <table>
                  <thead>
                    <tr>
                      <th>A List*</th>
                      <th>B List**</th>
                      <th>C List</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>Colobos</td>
                      <td>Howler</td>
                      <td>Lemur</td>
                    </tr>
                    <tr>
                      <td>Langur</td>
                      <td>Gorilla</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Chimpanzee</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Gibbon</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Orangutan</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>

                <table>
                  <thead>
                    <tr>
                      <th colSpan="3">
                        ME Values (metabollised energy values)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>3.0-3.3 kcal/g</td>
                      <td>2.8-3.0 kcal/g</td>
                      <td>2.0-2.2 kcal/g</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-sm">
                  All estimates based upon actual feeding trials.{' '}
                  <span className="block">* Forgut fermenters</span>
                  <span className="block">** Hindgut fermenters</span>
                </p>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </div>
  );
}

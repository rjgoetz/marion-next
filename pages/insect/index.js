import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';
import PDFLink from '../../components/PDFLink';
import { InsectNav } from '../../components/MiddleNav';

export default function Insect() {
  return (
    <div>
      <Head>
        <title>Orthocal Insect Supplement | Marion Zoological</title>
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
                <InsectNav active="Overview"></InsectNav>
              </div>

              <div className="lg:col-span-9">
                <h1>Orthocal Insect Supplement</h1>

                <p>
                  Orthocal Insect Supplement is a calcium-rich supplement used
                  to prepare crickets, mealworms, pinworms, and roaches for
                  feeding to insectivore animals. Birds, reptiles, and mammals
                  that consume insects as a part of normal daily feeding will
                  benefit from the increased calcium levels achieved through
                  preparatory insect gut-loading. Insect Supplement raises
                  calcium levels in host insects to over 1% and establishes
                  proper phosphorous ratios.
                </p>

                <ul className="mb-8">
                  <li>Thoroughly researched, tested, and frequently updated</li>
                  <li>Widely used by zoological institutions and pet owners</li>
                  <li>Long shelf life and economical dry formula</li>
                  <li>
                    Carrier formula is fully formulated and balanced with
                    vitamins and minerals
                  </li>
                  <li>
                    Easy-to-feed protocol maximizes calcium consumption and
                    absorption
                  </li>
                </ul>

                <h2>Ordering Information</h2>
                <p>Insect Supplement is available as a dry powder.</p>

                <div className="mb-4 flex flex-col items-center gap-8 sm:flex-row xl:gap-16">
                  <div className="w-2/3 sm:w-1/3">
                    <h4 className="text-center mb-2">Orthocal</h4>
                    <figure>
                      <Image
                        src="/images/orthocal.jpg"
                        alt="Orthocal Insect Supplement Powder"
                        width={400}
                        height={225}
                      ></Image>
                      <figcaption>
                        SKU# INSEC SUP B50{' '}
                        <span className="block">Size: Powder</span>
                      </figcaption>
                    </figure>
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

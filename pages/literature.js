import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import PDFLink from '../components/PDFLink';
import { ResourcesNav } from '../components/MiddleNav';

export default function Literature() {
  return (
    <div>
      <Head>
        <title>Literature | Marion Zoological</title>
      </Head>

      <Layout>
        <div className="lg:mb-16">
          <Image
            src="/images/banner-red-panda.jpg"
            width={730}
            height={211}
            layout="responsive"
            alt="red panda"
          ></Image>
        </div>

        <article>
          <div className="container">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-16">
              <div className="lg:col-span-3">
                <ResourcesNav active="Literature"></ResourcesNav>
              </div>

              <div className="lg:col-span-9">
                <h1>Literature &amp; Documents</h1>
                <h2>Marion Zoological, Inc.</h2>
                <ul className="pl-0 list-none mb-8">
                  <li>
                    <PDFLink
                      title="Marion Zoological Timeline"
                      href="/docs/MZ-Innovator.pdf"
                    ></PDFLink>
                  </li>
                </ul>

                <h2>Product Brochures</h2>
                <ul className="list-none pl-0 mb-8">
                  <li>
                    <PDFLink
                      title="MZ Leaf Eater Brochure"
                      href="/docs/MZ-LeafEater-Broch_0915.pdf"
                    ></PDFLink>
                  </li>
                  <li>
                    <PDFLink
                      title="Mozaic Reptile Brochure"
                      href="/docs/MozaicReptile_03-12.pdf"
                    ></PDFLink>
                  </li>
                  <li>
                    <PDFLink
                      title="Orthocal Insect Brochure"
                      href="/docs/Orthocal_03-12.pdf"
                    ></PDFLink>
                  </li>
                  <li>
                    <PDFLink
                      title="Scenic Catalog"
                      href="/docs/Catalog_Scenic_03-12.pdf"
                    ></PDFLink>
                  </li>
                  <li>
                    <PDFLink
                      title="Jungle / Paradise Brochure"
                      href="/docs/JungleParadise_10-09.pdf"
                    ></PDFLink>
                  </li>
                  <li>
                    <PDFLink
                      title="Hot & Healthy Brochure"
                      href="/docs/HotHealthy_10-09.pdf"
                    ></PDFLink>
                  </li>
                  <li>
                    <PDFLink
                      title="Scenic Lory Brochure"
                      href="/docs/Lory_04-10.pdf"
                    ></PDFLink>
                  </li>
                  <li>
                    <PDFLink
                      title="Scenic Lory Fact Sheet"
                      href="/docs/FS_AppDryDietLory-0310.pdf"
                    ></PDFLink>
                  </li>
                  <li>
                    <PDFLink
                      title="Hand Weaning Brochure"
                      href="/docs/HandWeaning_10-09.pdf"
                    ></PDFLink>
                  </li>
                  <li>
                    <PDFLink
                      title="Hand Feeding Brochure"
                      href="/docs/HighEnergy_04-10.pdf"
                    ></PDFLink>
                  </li>
                </ul>

                <h2>Technical Tips</h2>
                <ul className="list-none pl-0">
                  <li>
                    <PDFLink
                      title="Feeding Conversion"
                      href="/docs/FeedingConversion-1009.pdf"
                    ></PDFLink>
                  </li>
                  <li>
                    <PDFLink
                      title="Formulated Diets Versus Seed Mixtures for Psittacines"
                      href="/docs/FormulatedDiets-1009.pdf"
                    ></PDFLink>
                  </li>
                  <li>
                    <PDFLink
                      title="Nutrition of Psittacines"
                      href="/docs/NutritionPsittacines-1009.pdf"
                    ></PDFLink>
                  </li>
                  <li>
                    <PDFLink
                      title="Scenic Dry Lory Food"
                      href="/docs/ScenicDryLoryFood-1009.pdf"
                    ></PDFLink>
                  </li>
                  <li>
                    <PDFLink
                      title="The Truth About Labeling"
                      href="/docs/TheTruthAboutLabelling-1009.pdf"
                    ></PDFLink>
                  </li>
                  <li>
                    <PDFLink
                      title="The Truth About Seeds"
                      href="/docs/TheTruthAboutSeeds-1009.pdf"
                    ></PDFLink>
                  </li>
                  <li>
                    <PDFLink
                      title="Understanding the Feed Label"
                      href="/docs/MZ-Understand-Labels.pdf"
                    ></PDFLink>
                  </li>
                  <li>
                    <PDFLink
                      title="What are the Advantages of Feeding your Bird a High Quality Diet?"
                      href="/docs/FeedingAdvantage-1009.pdf"
                    ></PDFLink>
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

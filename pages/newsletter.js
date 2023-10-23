import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';

export default function Newsletter() {
  return (
    <div>
      <Head>
        <title>Sign Up to Our Newsletter | Marion Zoological</title>
      </Head>

      <Layout>
        <div className="mb-8 sm:mb-16">
          <Image
            src="/images/banner-lemurs.jpg"
            width={730}
            height={211}
            layout="responsive"
            priority={true}
          ></Image>
        </div>

        <article>
          <div className="container">
            <div className="lg:flex lg:gap-8">
              <div className="lg:w-2/3 lg:pt-12">
                {/*<!-- Begin Constant Contact Inline Form Code --> */}
                <div
                  className="ctct-inline-form"
                  data-form-id="5b50e73a-4891-4924-808e-724b4f2af991"
                ></div>
                {/* <!-- End Constant Contact Inline Form Code --> */}
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </div>
  );
}

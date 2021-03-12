import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { CompanyNav } from '../../components/MiddleNav';

export default function News() {
  return (
    <div>
      <Head>
        <title>News | Marion Zoological</title>
      </Head>

      <Layout>
        <div className="lg:mb-16">
          <Image
            src="/images/banner-giraffe.jpg"
            width={730}
            height={211}
            layout="responsive"
          ></Image>
        </div>

        <article>
          <div className="container">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-16">
              <div className="lg:col-span-3">
                <CompanyNav active="News"></CompanyNav>
              </div>

              <div className="lg:col-span-9">
                <h1>News</h1>

                <div className="sm:flex sm:gap-8 sm:items-center lg:flex-wrap xl:flex-nowrap">
                  <div className="sm:w-2/3 lg:w-full xl:w-2/3">
                    <h3 className="mb-0">AAZV 49th Annual Conference</h3>
                    <p>September 23-29, 2017 in Dallas, TX</p>
                    <p>
                      Marion Zoological will be attending the AAZV conference
                      this year in Dallas, TX from September 23 - 29, 2017. We
                      look forward to seeing you there!
                    </p>
                  </div>
                  <figure className="sm:w-1/3 lg:w-full xl:w-1/3">
                    <Image
                      src="/images/logo-aazv.png"
                      alt="AAZV logo"
                      width={310}
                      height={98}
                    ></Image>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </div>
  );
}

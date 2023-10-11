import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { CompanyNav } from '../../components/MiddleNav';

export default function About() {
  return (
    <div>
      <Head>
        <title>About Us | Marion Zoological</title>
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
                <CompanyNav active="About Us"></CompanyNav>
              </div>

              <div className="lg:col-span-9">
                <h1>About Us</h1>
                <p>
                  Marion Zoological is a world-class provider of foods for rare
                  and endangered animals and specialty pets. From the smallest
                  birds, tortoise, primate, and even the Giant Panda, our foods
                  have improved life spans, disease resitance, and increased
                  birthrates. Since 2003, our foods were used to increase the
                  birthrate of the Giant Panda from 0 live births to over 700 in
                  2022.
                </p>
                <p className="mb-8">
                  By addressing these areas, Marion Zoological has become a
                  world class provider of foods for approximately two hundred
                  rare and endangered species of animals. Marion Zoological
                  delivers its life-enriching foods worldwide to leading
                  zoological institutions, private and wild animal collections,
                  and the exotic pet industry. This success is based upon the
                  exceptional cooperation of its partners, customers, and
                  suppliers.
                </p>

                <div className="h-1 border-b border-brown mb-8"></div>

                <h3 className="mb-2">Contact Information</h3>
                <div className="sm:flex">
                  <div className="mb-4 sm:w-1/2">
                    <p className="font-normal mb-0">Marion Zoological</p>
                    <address className="not-italic">
                      14149 21st Ave N{' '}
                      <span className="block">Plymouth, MN 55447</span>U.S.A.
                    </address>
                  </div>
                  <div className="sm:w-1/2">
                    <p className="font-normal mb-0">Phone</p>
                    <p>
                      T:(763) 559-3305
                      <span className="block">F:(763) 559-0789</span>
                      <span className="block">U.S.A., Canada, Caribbean</span>
                      T:(800) 327-7974
                    </p>

                    <p className="font-normal mb-0">Email</p>
                    <a href="mailto:sales@marionzoological.com">
                      sales@marionzoological.com
                    </a>
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

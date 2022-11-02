import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { LegalNav } from '../../components/MiddleNav';

export default function Legal() {
  return (
    <div>
      <Head>
        <title>Terms of Use | Marion Zoological</title>
      </Head>

      <Layout>
        <div className="mb-8 sm:mb-16">
          <Image
            src="/images/banner-lemurs.jpg"
            width={730}
            height={211}
            layout="responsive"
          ></Image>
        </div>

        <article>
          <div className="container">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-16">
              <div className="lg:col-span-3">
                <LegalNav active="Terms of Use"></LegalNav>
              </div>

              <div className="lg:col-span-9">
                <h1>Terms of Use</h1>
                <p>
                  Marionzoological.com websites are owned and operated by Marion
                  Zoological, Inc.
                </p>
                <p>
                  <span className="font-semibold">Marion Zoological</span>
                  <br></br>
                  14149 21st Ave N<br></br>
                  Plymouth, MN 55447<br></br>
                  U.S.A.
                </p>

                <h2>
                  Your Use of This Website is Governed by These Terms and
                  Conditions
                </h2>
                <p>
                  Please carefully review the following Terms and Conditions
                  below. Your use of this website constitutes your agreement to
                  follow these rules and to be bound by them. If you do not
                  agree with any of these Terms and Conditions, do not use
                  marionzoological.com.
                </p>

                <h2>These Terms and Conditions May Change</h2>
                <p>
                  Marionzoological.com reserves the right to update or modify
                  these Terms and Conditions at any time without prior notice.
                  Your use of this website following any such change constitutes
                  your agreement to follow and be bound by the Terms and
                  Conditions as changed. For this reason, we encourage you to
                  review these Terms and Conditions whenever you use this
                  website.
                </p>

                <h2>Copyright and Trademark Notice</h2>
                <p>
                  Unless otherwise specified, all Content you see and hear on
                  marionzoological.com, including the text, site design, logos,
                  graphics, icons, and images, as well as the selection,
                  assembly and arrangement thereof, are the sole property of
                  Marion Zoological, Inc. and subject to trademark, copyright,
                  trade dress and/or other intellectual property rights
                  Copyright © 2017 Marion Zoological, Inc. All Rights Reserved.
                  No materials from these sites may be copied, reproduced,
                  modified, republished, uploaded, posted, transmitted, or
                  distributed in any form or by any means without our prior
                  written permission. All rights not expressly granted herein
                  are reserved. Any unauthorized use of the materials appearing
                  on this site may violate copyright, trademark and other
                  applicable laws and could result in criminal or civil
                  penalties.
                </p>

                <h2>Marion Zoological Trademarks</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Trademark</th>
                      <th>Generic Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Marion Zoological&trade;</td>
                      <td>
                        Food and food supplements for captive exotic and
                        endangered animals
                      </td>
                    </tr>
                    <tr>
                      <td>Mozaic Reptile Food&trade;</td>
                      <td>Food and food supplements for reptiles</td>
                    </tr>
                    <tr>
                      <td>Orthocal&trade; Insect Supplement</td>
                      <td>Food supplement for insect gut loading</td>
                    </tr>
                    <tr>
                      <td>Scenic Bird Food&trade;</td>
                      <td>Foods for exotic birds</td>
                    </tr>
                    <tr>
                      <td>Jungle&trade;</td>
                      <td>Foods for medium / large exotic hookbill birds</td>
                    </tr>
                    <tr>
                      <td>Paradise&trade;</td>
                      <td>Foods for medium / large exotic hookbill birds</td>
                    </tr>
                    <tr>
                      <td>Tropical Bits&trade;</td>
                      <td>Foods for softbill exotic birds</td>
                    </tr>
                    <tr>
                      <td>Hot &amp; Healthy Cockatiel&trade;</td>
                      <td>Foods for cockatiels</td>
                    </tr>
                    <tr>
                      <td>ALLPREM Parakeet&trade;</td>
                      <td>Foods for parakeets and love birds</td>
                    </tr>
                    <tr>
                      <td>Scenic Lory&trade;</td>
                      <td>Foods for exotic lories and lorikeets</td>
                    </tr>
                    <tr>
                      <td>Scenic Hand Weaning&trade;</td>
                      <td>Foods for juvenile / baby exotic birds</td>
                    </tr>
                    <tr>
                      <td>Scenic High-Energy Hand Feeding&trade;</td>
                      <td>Foods for juvenile / baby exotic birds</td>
                    </tr>
                  </tbody>
                </table>
                <h2>Colors</h2>
                <p>
                  We have done our best to display as accurately as possible the
                  colors of the products shown on this website. However, because
                  the colors you see will depend on your monitor, we cannot
                  guarantee that your monitor’s display of any color will be
                  accurate.
                </p>
                <h2>Terms of Sale</h2>
                <p>
                  Your receipt of an electronic or other form of order
                  confirmation does not signify our acceptance of your order,
                  nor does it constitute confirmation of our offer to sell.
                  Marion Zoological, Inc. reserves the right at any time after
                  receipt of your order to accept or decline your order for any
                  reason or to supply less than the quantity you ordered of any
                  item.
                </p>
                <p>
                  We accept the following credits cards: Visa, MasterCard,
                  American Express and Discover. There is no surcharge for using
                  your credit card to make purchases. Please be sure to provide
                  your exact billing address and telephone number (i.e. the
                  address and phone number your credit card bank has on file for
                  you). Incorrect information will cause a delay in processing
                  your order. Credit cards are typically charged the day of or
                  before shipment occurs.
                </p>
                <h2>Shipping Policy</h2>
                <p>
                  Time is of the essence. Delivery of goods shall be made
                  pursuant to the schedule, via the carrier and to the place
                  specified on the face of the applicable purchase order. Marion
                  Zoological, Inc. reserves the right to return, shipping
                  charges collect, all goods received in advance of the delivery
                  schedule. If no delivery schedule is specified, the order
                  shall be filled promptly and delivery will be made by the most
                  expeditious form of land transportation. Marion Zoological,
                  Inc. will communicate to the buyer the shipment method and
                  tracking information, if available, during processing of a
                  purchase order.
                </p>
                <p>
                  For a multiple product order, we will make every attempt to
                  ship all products contained in the order at the same time.
                  Products that are unavailable at the time of shipping will be
                  shipped as they become available, unless you inform us
                  otherwise. You will only be charged for products contained in
                  a given shipment, plus any applicable shipping charges. You
                  will only be charged for shipping at the rate quoted to you on
                  your purchase receipt. The entirety of this shipping charge
                  may be applied to the first products(s) shipped on a multiple
                  shipment order.
                </p>
                <h2>Limitation of Liability</h2>
                <p>
                  Under no circumstances, shall Marion Zoological, Inc. or any
                  of their employees, directors, officers, agents, vendors or
                  suppliers be liable for any direct or indirect losses or
                  damages arising out of or in connection with the use of or
                  inability to use this website.
                </p>

                <p>
                  This is a comprehensive limitation of liability that applies
                  to all losses and damages of any kind (whether general,
                  special, consequential, incidental, exemplary or otherwise,
                  including, without limitation, loss of data, income or
                  profits), whether in contract, negligence or other tortuous
                  action, even if an authorized representative of Marion
                  Zoological, Inc. has been advised of or should have known of
                  the possibility of such damage.
                </p>

                <p>
                  If you are dissatisfied with this website or any content on
                  the site, or with these terms and conditions, your sole and
                  exclusive remedy is to discontinue using this website. You
                  acknowledge, by your use of this website, that your use of the
                  site is at your sole risk.
                </p>

                <p>
                  Applicable law may not allow the limitation of liability set
                  forth above, so this limitation of liability may not apply to
                  you. If any part of this limitation on liability is found to
                  be invalid or unenforceable for any reason, then the aggregate
                  liability of Marion Zoological, Inc. under such circumstance
                  for liabilities that otherwise would have been limited shall
                  not exceed one hundred dollars ($100).
                </p>

                <h2>Enforcement of Terms and Conditions</h2>
                <p>
                  By accessing and using the marionzoological.com websites, you
                  agree that your access to and use of this website is subject
                  to these terms and conditions, as well as all applicable laws,
                  as governed and interpreted pursuant to the laws of the state
                  of Minnesota, United States of America.
                </p>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </div>
  );
}

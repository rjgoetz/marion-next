import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import PDFLink from '../components/PDFLink';
import { ResourcesNav } from '../components/MiddleNav';

export default function Research() {
  return (
    <div>
      <Head>
        <title>Research Documents | Marion Zoological</title>
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
                <ResourcesNav active="Research"></ResourcesNav>
              </div>

              <div className="lg:col-span-9">
                <h1>Research Documents</h1>
                <ul className="list-none pl-0 mb-8">
                  <li>
                    <PDFLink
                      title="Neonatal Handling of Amazon Parrots Alters the Stress Response
                and Immune Function"
                      href="/"
                    ></PDFLink>
                  </li>
                  <li>
                    <PDFLink
                      title="Evolutionary Biology. Dirty Eating for
                Healthy Living."
                    ></PDFLink>
                  </li>
                  <li>
                    <PDFLink title="Acute Pancreatitis in Parrots"></PDFLink>
                  </li>
                  <li>
                    <PDFLink
                      title="The Nutrition of
                the Budgerigar (Melopsittacus undulatus)"
                    ></PDFLink>
                  </li>
                  <li>
                    <PDFLink
                      title="Influence of Plant Age
                and Size on Simazine Toxicity and Uptake"
                    ></PDFLink>
                  </li>
                  <li>
                    <PDFLink
                      title="Adult Cockatiels
                (Nymphicus hollandicus) at Maintenance Are More Sensitive to
                Diets Containing Excess Vitamin A Than to Vitamin A-Deficient
                Diets"
                    ></PDFLink>
                  </li>
                  <li>
                    <PDFLink
                      title="Adult Cockatiels (Nymphicus hollandicus) Metabolically
                Adapt to High Protein Diets"
                    ></PDFLink>
                  </li>
                  <li>
                    <PDFLink
                      title="Nutrition of Birds in the Order
                Psittaciformes: A Review"
                    ></PDFLink>
                  </li>
                  <li>
                    <PDFLink
                      title="Thresholds for Sweet, Salt, and Sour
                Taste Stimuli on Cockatiels (Nymphicus hollandicus)"
                    ></PDFLink>
                  </li>
                  <li>
                    <PDFLink
                      title="Taste
                Threshold Determination and Side-Preference in Captive
                Cockatiels (Nymphicus hollandicus)"
                    ></PDFLink>
                  </li>
                  <li>
                    <PDFLink
                      title="Carotenoid Pigments and the
                Selectivity of Psittacofulvin-based Coloration Systems in
                Parrots."
                    ></PDFLink>
                  </li>
                  <li>
                    <PDFLink title="Formulated Diets Versus Seed Mixtures for Psittacines"></PDFLink>
                  </li>
                </ul>

                <h2>Other Research</h2>
                <p>
                  Bavelaar FJ, Beynen AC.{' '}
                  <span className="font-normal italic">
                    Assessment of commercial feeds for parrots.
                  </span>{' '}
                  Tijdschr Diergeneeskd. 2003 Dec 1;128(23): 726-34.
                </p>
                <p>
                  Dorrestein GM.{' '}
                  <span className="font-normal italic">
                    Feeding of parrots.
                  </span>{' '}
                  Tijdschr Diergeneeskd. 1991 Apr 15;116(8):424-5. Dutch.
                </p>
                <p>
                  Dorrestein GM, Buitelaar MN, van der Hage MH, Zwart P.
                  <span className="font-normal italic">
                    Evaluation of a bacteriological and mycological examination
                    of psittacine.
                  </span>{' '}
                  Avain Dis. 1985 Oct-Dec;29(4):951-62.
                </p>
                <p>
                  Fidler AE, Zwart S, Pharis RP, Weston RJ, Lawrence SB, Jansen
                  P, Elliott G, Merton DV.{' '}
                  <span className="font-normal italic">
                    Screening the food of an endangered parrot, the kakapo
                    (Strigops habroptilus), for oestrogenic activity using a
                    recombinant yeast bioassay.
                  </span>{' '}
                  Reprod Fertil Dev. 2000;12(3-4):191-9.
                </p>
                <p>
                  Harcourt-Brown N.{' '}
                  <span className="font-normal italic">
                    Incidence of juvenile osteodystrophy in hand reared grey
                    parrots (Psittacus eerithacus).
                  </span>{' '}
                  Vet Rec. 2003 Apr 5;152(14):438-9.
                </p>
                <p>
                  Hollman P.{' '}
                  <span className="font-normal italic">
                    Sublingual salivary gland granuloma as a husbandry-induced
                    disease in a Timor gray parrot.
                  </span>{' '}
                  Tierarzti Prax. 1990 Jun;18(3):267-72. German.
                </p>
                <p>
                  Howard LL, Kass PH, Lamberski N, Wack RF.{' '}
                  <span className="font-normal italic">
                    Serum concentrations of ionized calcium, vitamin D#, and
                    parathyroid hormone in captive thick-billed parrots
                    (Rhynchopsitta pachyrhyncha).
                  </span>{' '}
                  J Zoo Wildl Med. 2004 Jun;35(2):157-53.
                </p>
                <p>
                  Karasov WH.{' '}
                  <span className="font-normal italic">
                    Cork SJ. glucose absorption by a nectarivorous bird: the
                    passive pathway is paramount.
                  </span>{' '}
                  Am J Physiol. 1994 Jul;267(1 pt 1):G18-26.
                </p>
                <p>
                  Karesh WB, del Campo A. Braselton WE, Puche H, Cook RA.{' '}
                  <span className="font-normal italic">
                    Health evaluation of free-ranging and hand reared macaws
                    (Ara spp.) in Peru.
                  </span>{' '}
                  J Zoo Wildl Med. 1997 Dec;28(4):368-77.
                </p>
                <p>
                  Schoemaker NJ, Lumeji JT, Dorrestein GM, Beynen AC.
                  <span className="font-normal italic">
                    Nutrition-related problems in pet birds.
                  </span>{' '}
                  Tjidschr Diereneeskd. 1999 Jan 15;124(2):39-43. Review. Dutch.
                </p>
                <p>
                  Skadhauge E, Dawson TJ.{' '}
                  <span className="font-normal italic">
                    In vitro studies of sodium transport across the lower
                    intestine of a desert parrot.
                  </span>{' '}
                  AM J Phisiol. 1980 Sep;239(3):R285-90.
                </p>
                <p>
                  Stanford M.{' '}
                  <span className="font-normal italic">
                    Measurement of 25-hydroxycholecalciferol in captive grey
                    parrots (Psittacus eerithacus).
                  </span>{' '}
                  Vet Rec.2003 July 12;153(2):58-9.
                </p>
                <p>
                  van der Hage MH.{' '}
                  <span className="font-normal italic">Feed for parrots.</span>{' '}
                  Tijdschr Diergeneeskd. 1993 Aug 15;118(16):526-7. Dutch.
                </p>
                <p>
                  Vendramin-Gallo M, Pessutti C, Pezzato AC, Vincentini-Paulino
                  ML.{' '}
                  <span className="font-normal italic">
                    Effect of age on seed digestion in Parrots (Amazona
                    aestiva).
                  </span>{' '}
                  Physiol Biochem Zool. 2001 May-Jun; 74(3):398-403.
                </p>
                <p>
                  Wallach JD, Flieg GM.{' '}
                  <span className="font-normal italic">
                    Nutritional secondary hyperparathyroidism in captive
                    psittacine birds.
                  </span>{' '}
                  J Am Vet MedAssoc. 1967 Oct 1;151(7):880-3.No abstract
                  available.
                </p>
                <p>
                  Werquin GJ, De Cock KJ, Ghysels PG.{' '}
                  <span className="font-normal italic">
                    Comparison of the nutrient analysis and caloric density of
                    30 commercial seed mixtures (in toto and dehulled) with 27
                    commercial diets for parrots.
                  </span>{' '}
                  J Anim Physiol Anim Nutr (Berl). 2005 Apr-Jun;89(3-6):215-21.
                </p>
                <p>
                  Wolf P. Rabehl N. Kamphues J.{' '}
                  <span className="font-normal italic">
                    Investigations on feathering, feather growth and potential
                    influences of nutrient supply on feathers' regrowth in small
                    pet birds (canaries, budgerigars and lovebirds).
                  </span>{' '}
                  J Anim Physiol Anim Nutr (Berl). 2003 Apr;87(3-4):134-41.
                </p>
                <p>
                  Wolf P, Kamphues J.{' '}
                  <span className="font-normal italic">
                    Hand rearing of pet birds-feeds, techniques and
                    recommendations.
                  </span>{' '}
                  J Anim Physiol Anim Nutr (Berl). 2003 Apr;87(3-4):122-8.
                </p>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </div>
  );
}

import styles from '@/styles/Home.module.scss';
import Image from 'next/image';
import NodeOverlay from '@/components/NodeOverlay';
import UseCase from '@/components/UseCase';
import FaqItem from '@/components/FaqItem';
import Hero from '@/components/Hero';
import AppLinks from '@/components/AppLinks';
import Link from 'next/link';
import Review from '@/components/Review';

export default function Home() {
  return (
    <>
      <main className={styles.main}>        
        <NodeOverlay />
        < Hero 
          title="Naši Oglasi"
        />
 
        <div id={styles.section_features}>
          <h2 className="h2-lg my-lg text-center">Kako funkcioniše?</h2>

          <div className="container">

          <div className="row justify-content-md-center">
              <div className={`${styles.backsplash_container} col-md-6 col-lg-4 text-center`} >
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image 
                  src="/images/phones/device_post_new_ad_listing.png" 
                  alt="Screenshot of posting new ad listing."
                  height={355.5}
                  width={200}
                  className={`${styles.backsplash_image} phone_shadow`}
                />
              </div>

              <div className='col-md-6 col-lg-4 offset-lg-1 my-auto text-center text-md-start'>
                <h3>Besplatno postavljanje oglasa</h3>
                  <p>
                     Jednostavno i brzo postavi svoj oglas da ga svi vide!
                  </p>
              </div>
            </div>
            
            <div className="row my-5 justify-content-md-center">
              <div className={`${styles.backsplash_container} col-md-6 col-lg-4 offset-lg-1 text-center`} >
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image 
                  src="/images/phones/device_home_page_scrolled_down.png" 
                  alt="Screenshot of Home page."
                  height={355.5}
                  width={200}
                  className={`${styles.backsplash_image} phone_shadow`}
                />
              </div>
               <div className='col-md-6 col-lg-4 my-auto order-md-first text-center text-md-start'>
               <h3>Najnoviji oglasi</h3>
                  <p>
                      Početna stranica na kojoj se nalaze najnoviji oglasi gde lako možeš da pronađeš sve što te zanima.
                  </p>
              </div>
            </div>

            <div className="row justify-content-md-center">
              <div className={`${styles.backsplash_container} col-md-6 col-lg-4 text-center`} >
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image 
                  src="/images/phones/device_cars_category_preview.png" 
                  alt="Screenshot of Cars category"
                  height={355.5}
                  width={200}
                  className={`${styles.backsplash_image} phone_shadow`}
                />
              </div>

              <div className='col-md-6 col-lg-4 offset-lg-1 my-auto text-center text-md-start'>
              <h3>Pretraga oglasa po kategoriji</h3>
                <p>Izaberi kategoriju koja te zanima i pristupi najnovijim oglasima iz te kategorije.</p>
              </div>
            </div>
            
            <div className="row my-5 justify-content-md-center">
              <div className={`${styles.backsplash_container} col-md-6 col-lg-4 offset-lg-1 text-center`} >
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image 
                  src="/images/phones/device_ad_preview.png" 
                  alt="Screenshot of Ad Preview"
                  height={355.5}
                  width={200}
                  className={`${styles.backsplash_image} phone_shadow`}
                />
              </div>
               <div className='col-md-6 col-lg-4 my-auto order-md-first text-center text-md-start'>
               <h3>Pregled oglasa</h3>
                <p>Pregledaj oglas koji te zanima jednim dodirom na njega.</p>
              </div>
            </div>
            
          </div>
        </div>

        <div id={styles.section_faq}>
          <h2 className="h2-lg my-lg text-center">Najčešća Pitanja</h2>
          <div className="row justify-content-center">
            <div className="col-10 col-md-8 col-lg-6">
              
              <div className="accordion" id="faq_accordion">
                <FaqItem 
                  itemNum="one"
                  question="Da li je postavljanje oglasa besplatno?"
                  answer="Aplikacija je potpuno besplatna za korišćenje, što znači da možete slobodno pretraživati i postavljati oglase bez ikakvih troškova."
                />
                <FaqItem 
                  itemNum="two"
                  question="Kada je moj oglas objavljen?"
                  answer="Tvoj oglas će biti ubrzo objavljen čim bude pregledan."
                />
                <FaqItem 
                  itemNum="three"
                  question="Koliko mogu oglasa dnevno mogu da postavim?"
                  answer="Možeš postaviti najviše 3 oglasa dnevno."
                />
                <FaqItem 
                  itemNum="four"
                  question="Da li mogu da izmenim ili izbrišem oglas?"
                  answer="Naravno da možeš. Odeš na pregled svog oglasa a zatim na gornjem desnom uglu ćeš naći opciju za izmenu ili brisanje."
                />
                <FaqItem 
                  itemNum="five"
                  question="Zašto moram da čekam pregled oglasa?"
                  answer="Svi oglasi se pregledavaju kako bi tvoje i iskustvo drugih korisnika bilo bolje i sigurnije."
                />
                <FaqItem 
                  itemNum="seven"
                  question="Kako mogu izbrisati svoj nalog?"
                  answer={
                    <span>
                      Opciju za <strong>Brisanje Naloga</strong> možeš naći na ekranu za podešavanje ili to možeš učiniti <Link href="https://forms.gle/hRPE29pk5fTa7boh9">ovde</Link>
                    </span>
                  }
                />
              </div>
            </div>
          </div>
          
        </div>

        <div id={styles.section_wait_list}>
          <h2 className='h2-lg my-lg text-center text-primary'>Preuzmi Aplikaciju</h2>
          < AppLinks />
        </div>
      </main>
    </>
  );
}

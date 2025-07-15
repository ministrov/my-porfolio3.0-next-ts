import Image from 'next/image';
import styles from './Promo.module.css';

export const Promo = () => {
  return (
    <section className={styles.promo}>
      <h2 className="visually-hidden">A promo section for introduction of the author</h2>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.textBlock}>
            {/* <strong className={styles.greeting}>Привет,{<br />} Я Антон Жилин.</strong> */}
            <strong className={styles.greeting}>Hi, I&apos;m{<br />} Anton Zhilin.</strong>

            <p className={styles.slogan}>
              A Sydney based front-end developer passionate about building accessible and user friendly websites.
            </p>

            <div className={styles.btns}>
              {/* <Button
                className={'promo__btn'}
                href={cvPdf}
                download={cvPdf}
                icon={<BsBoxArrowInUpRight width={20} height={20} />}
              >
                {t('promo.promoBtn')}
              </Button> */}

              {/* <SocialList variant="blue" /> */}
            </div>
          </div>

          <div className={styles.imageBlock}>
            <Image src={'/potrait.png'} width={600} height={663} alt={'Portrait of author'} priority quality={85} />
          </div>
        </div>
      </div>
      {/* <MouseScroll /> */}
    </section>
  );
};

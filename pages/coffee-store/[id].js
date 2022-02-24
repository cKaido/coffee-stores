import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import coffeeStoresData from "../../data/coffee-stores.json";
import cls from "classnames";

import styles from "../../styles/coffee-store.module.css";

export const getStaticProps = (staticProps) => {
  const params = staticProps.params;
  return {
    props: {
      coffeeStore: coffeeStoresData.find((coffeeStore) => {
        return coffeeStore.id.toString() === params.id;
      }),
    },
  };
};

export const getStaticPaths = () => {
  const paths = coffeeStoresData.map((coffeeStore) => {
    return {
      params: {
        id: coffeeStore.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

const CoffeeStore = (props) => {
  const router = useRouter();

  const handleUpvoteButton = () => {
    console.log("clicked");
  };

  const { address, name, neighbourhood, imgUrl } = props.coffeeStore;
  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          <Image
            src={imgUrl}
            width={600}
            height={360}
            className={styles.storeImg}
            alt={name}
          ></Image>
        </div>
        <div className={cls("glass", styles.col2)}>
          <div className={styles.iconWrapper}>
            {/* <Image src="" width={24} height={24} /> */}
            <p className={styles.text}>{address}</p>
          </div>
          <div className={styles.iconWrapper}>
            {/* <Image src="" width={24} height={24} /> */}
            <p className={styles.text}>{neighbourhood}</p>
          </div>
          <div className={styles.iconWrapper}>
            {/* <Image src="" width={24} height={24} /> */}
            <p className={styles.text}>1</p>
          </div>

          <button className={styles.upvoteButton} onClick={handleUpvoteButton}>
            Up vote!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeStore;

import Image from "next/image";
import styles from "../styles/Testimonials.module.css";
// Images
import Leaf from "../../public/assets/leaf_aylae4.png";

const Testimonials = () => {
  const testimonialsData = [
    {
      image: "/assets/client-2_sjfy2z.jpg",
      name: "Takar Bowa",
      text: "Lorem Ipsum is simply dummy text at the print book. It has survuved not only five centuries, but also the leap",
    },
    {
      image: "/assets/client-3_utvld0.jpg",
      name: "Takar Bowa",
      text: "Lorem Ipsum is simply dummy text at the print book. It has survuved not only five centuries, but also the leap",
    },
    {
      image: "/assets/client-4_yqf75b.jpg",
      name: "Takar Bowa",
      text: "Lorem Ipsum is simply dummy text at the print book. It has survuved not only five centuries, but also the leap"
    },
    {
      image: "/assets/client-2_sjfy2z.jpg",
      name: "Takar Bowa",
      text: "Lorem Ipsum is simply dummy text at the print book. It has survuved not only five centuries, but also the leap",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.headingWrapper}>
        <Image src={Leaf} width={100} quality={100} alt="pizza" />

        <div className={styles.heading}>
          <p>customer feedback</p>
          <h2>client testimonials</h2>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.testmonialsContainer}>
          {testimonialsData.map(({ image, name, text }, index) => (
            <div className={styles.testimonial} key={index}>
              <div className={styles.imgContainer}>
                <Image
                  src={image}
                  width={100}
                  height={100}
                  quality={100}
                  alt="clients"
                  className={styles.roundImage}
                />
             
              <div className={styles.textContainer}>
                <p className={styles.name}>{name}</p>
                <p className={styles.text}>{text}</p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

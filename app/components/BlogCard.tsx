import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/BlogCard.module.css";

interface BlogCardProps {
  title: string;
  slug: string;
  date: string;
  content: string;
  image: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  slug,
  title,
  content,
  date,
}) => {
  return (
    <div className={`${styles.card__container}`}>
      <Link href={`/blog/${slug}`} className={`${styles.card}`}>
        <div className={`${styles.card__thumb}`}>
          <Image
            src={image}
            alt={title} // Alternatif metin
            width={500} // Genişlik
            height={300} // Yükseklik
            className={`${styles.card__image}`}
          />
          <div className={`${styles.card__caption}`}>
            <h2 className={`${styles.card__title}`}>{title}</h2>
            <p className={`${styles.card__snippet}`}>{content}</p>
            <p className="text-gray-600">{date}</p>
            <button className={`${styles.card__button}`}>Devamını Oku</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;

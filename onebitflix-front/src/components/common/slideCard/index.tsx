import styles from "./styles.module.scss";
import { CourseType } from "../../../services/courseService";
import Link from "next/link";

interface props {
  course: CourseType;
}

const SlideCard = function ({ course }: props) {
  return (
        <div className={styles.slide}>
      <Link href={`/course/${course.id}`}>
          <img
            src={`${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl}`}
            alt={course.name}
            className={styles.slideImg}
          />
          </Link>
          <p className={styles.slideTitle}>{course.name}</p>
          <p className={styles.slideDescription}>{course.synopsis}</p>
        </div>
  );
};

export default SlideCard;
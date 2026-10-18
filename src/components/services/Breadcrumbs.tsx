import Link from "next/link";
import styles from "./Breadcrumbs.module.css";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={styles.nav}>
      <div className="container">
        <ol className={styles.list}>
          <li className={styles.item}>
            <Link href="/" className={styles.link}>
              Home
            </Link>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.href} className={styles.item}>
                <span className={styles.separator} aria-hidden="true">
                  /
                </span>
                {isLast ? (
                  <span className={styles.current} aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

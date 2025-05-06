import Link from "next/link";
import classes from "@/app/page.module.css"
export default function SideBar() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link href="/">Главное меню</Link>
          </li>
          <li>
            <Link href="/">test</Link>
          </li>
          <li>
            <Link href="/">test2</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

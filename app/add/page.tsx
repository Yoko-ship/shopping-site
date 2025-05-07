import { Form } from "@/components/Form";
import classes from "./page.module.css";

export default function AddPage() {
  return (
    <main className="main">
      <div className={classes.form}>
        <Form>
          <label>Названия</label>
          <input type="text" name="title" required />
          <label>Описания</label>
          <input type="text" name="description" required />
          <label>Категория</label>
          <input type="text" name="category" required />
          <label>Цена</label>
          <input type="number" name="price" required />
          <label>Изображение</label>
          <input type="url" placeholder="ссылка" name="image" required />
          <button>Отправить</button>
        </Form>
      </div>
    </main>
  );
}

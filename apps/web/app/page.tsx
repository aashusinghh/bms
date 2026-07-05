import "dotenv/config";


import styles from "./page.module.css";
import { client } from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst();

  return (
    <div className={styles.page}>
      <h1>Changed my website for testing in prod</h1>
      {user?.username}
      {user?.password}
    </div>
  );
}

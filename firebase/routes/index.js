import { getDatabase } from "firebase/database";
import { setDoc, getFirestore, getDoc } from "firebase/firestore";
import { app } from "../config";

const sendEssay = async () => {
  const db = getFirestore(app);
  const essayRef = doc(db, "news/", "teste");
  await getDoc(essayRef).then((res) => {
    console.log(res);
  });
  console.log("teste");
};

export { sendEssay };

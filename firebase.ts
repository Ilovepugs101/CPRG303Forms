import { initializeApp, getApps } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, where, orderBy } from "firebase/firestore";

import { firebaseConfig } from "./firebaseConfig";

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export const db = getFirestore();

// Save a form submission to a Firestore collection
export async function saveForm(collectionName: string, data: Record<string, any>) {
  const colRef = collection(db, collectionName);
  const docRef = await addDoc(colRef, {
    ...data,
    createdAt: new Date().toISOString(),
  });
  return docRef.id;
}

// Get all documents in a collection (simple read)
export async function getForms(collectionName: string) {
  const colRef = collection(db, collectionName);
  const snap = await getDocs(colRef);
  const result: any[] = [];
  snap.forEach((d) => result.push({ id: d.id, ...d.data() }));
  return result;
}

// Fetch docs where field === value (optional)
export async function getFormsByField(collectionName: string, field: string, value: any) {
  const q = query(collection(db, collectionName), where(field, "==", value));
  const snap = await getDocs(q);
  const result: any[] = [];
  snap.forEach((d) => result.push({ id: d.id, ...d.data() }));
  return result;
}

import { sql } from "@vercel/postgres";

export async function addMaterial(materialType:string,semester:string,subjectCode:string,subjectName:string,title:string,description:string,url:string) {
  const res = await sql`INSERT INTO ${materialType} (semester,subjectCode,subjectName,title,description,url) VALUES (${semester},${subjectCode},${subjectName},${title},${description},${url})`;
  return res;
}
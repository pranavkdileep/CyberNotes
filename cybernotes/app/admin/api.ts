"use server";
import { sql } from '@vercel/postgres'

export async function addMaterials(materialType:string, semester:string, subjectCode:string, subjectName:string, title:string, description:string, url:string) {
  const query = `
    INSERT INTO ${materialType} (semester, subjectcode, subjectname, url, title, description) 
    VALUES ($1, $2, $3, $4, $5, $6)
  `;
  const result = await sql.query(query, [semester, subjectCode, subjectName, url, title, description]);
  return result.rowCount;
}

export async function addSubject(subjectName:string, subjectCode:string, semester:string, description:string) {
  const query = `
    INSERT INTO subjects (title, url, semester, description) 
    VALUES ($1, $2, $3, $4)
  `;
  const result = await sql.query(query, [subjectName, subjectCode, semester, description]);
  return result.rowCount;
}
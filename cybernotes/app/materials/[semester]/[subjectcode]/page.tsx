import React from 'react'
import { sql } from '@vercel/postgres'
import { GlobalComp } from '@/components/global-comp'
export interface Datas {
    title: string
    description: string
    url: string
  }



// const datas: Datas[] = [
//   {
//     title: 'MATHEMATICAL FOUNDATIONS FOR SECURITY SYSTEMS',
//     description: 'Download the Materials of MATHEMATICAL FOUNDATIONS FOR SECURITY SYSTEMS 2019 scheme',
//     url: '/materials/s4/mfss'
//   },
// ]

export default async function Cart({
    params
  } : {
    params: { semester: string, subjectcode: string}
  }): Promise<JSX.Element> {
    let semnumber = params.semester.replace('s','')
    const { rows } = await sql`SELECT title,description,url from materials where semester=${semnumber} and subjectcode=${params.subjectcode.toUpperCase()}`;
    console.log(rows)
    const datas: Datas[] = rows.map((row) => ({
        title: row.title,
        description: row.description,
        url: `${row.url}`
      }));
  return (
    <GlobalComp Datas = {datas} >
    </GlobalComp>
  )
}

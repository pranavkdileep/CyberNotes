import React from 'react'
import { GlobalComp } from '@/components/global-comp'
export interface Datas {
    title: string
    description: string
    url: string
  }

const datas: Datas[] = [
  {
    title: 'MATHEMATICAL FOUNDATIONS FOR SECURITY SYSTEMS',
    description: 'Download the syllabus of MATHEMATICAL FOUNDATIONS FOR SECURITY SYSTEMS 2019 scheme',
    url: 'https://drive.google.com/file/d/1UOK4ePyO6hbaupALn6RFJpbJt8GqOXZE/view?usp=sharing'
  },
]

export default function page() {
  return (
    <GlobalComp Datas = {datas} >
    </GlobalComp>
  )
}

import React from 'react'
import { GlobalComp } from '@/components/global-comp'

export interface Datas {
  title: string
  description: string
  url: string
}

const datas: Datas[] = [
  {
    title: 'S1',
    description: 'Download the syllabus for Semester 1',
    url: '/syllabus/s1'
  },
  {
    title: 'S2',
    description: 'Download the syllabus for Semester 2',
    url: '/syllabus/s2'
  },
  {
    title: 'S3',
    description: 'Download the syllabus for Semester 3',
    url: '/syllabus/s3'
  },
  {
    title: 'S4',
    description: 'Download the syllabus for Semester 4',
    url: '/syllabus/s4'
  },
  {
    title: 'S5',
    description: 'Download the syllabus for Semester 5',
    url: '/syllabus/s5'
  },
  {
    title: 'S6',
    description: 'Download the syllabus for Semester 6',
    url: '/s6'
  },
  {
    title: 'S7',
    description: 'Download the syllabus for Semester 7',
    url: '/s7'
  },
  {
    title: 'S8',
    description: 'Download the syllabus for Semester 8',
    url: '/s8'
  }
]

function page() {
  return (
    <GlobalComp Datas = {datas} >
      </GlobalComp>
  )
}

export default page
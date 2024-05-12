import React from 'react'
import { GlobalComp } from '@/components/global-comp'

export interface Datas {
  title: string
  description: string
  url: string
}

const datas: Datas[] = [
  {
    title: 'Semester 1',
    description: 'Download the Study Materials for Semester 1',
    url: '/materials/s1'
  },
    {
        title: 'Semester 2',
        description: 'Download the Study Materials for Semester 2',
        url: '/materials/s2'
    },
    {
        title: 'Semester 3',
        description: 'Download the Study Materials for Semester 3',
        url: '/materials/s3'
    },
    {
        title: 'Semester 4',
        description: 'Download the Study Materials for Semester 4',
        url: '/materials/s4'
    },
    {
        title: 'Semester 5',
        description: 'Download the Study Materials for Semester 5',
        url: '/materials/s5'
    },
    {
        title: 'Semester 6',
        description: 'Download the Study Materials for Semester 6',
        url: '/materials/s6'
    },
    {
        title: 'Semester 7',
        description: 'Download the Study Materials for Semester 7',
        url: '/materials/s7'
    },
    {
        title: 'Semester 8',
        description: 'Download the Study Materials for Semester 8',
        url: '/materials/s8'
    }
]

function page() {
  return (
    <GlobalComp Datas = {datas} >
      </GlobalComp>
  )
}

export default page
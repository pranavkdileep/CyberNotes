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
    description: 'Download the Materials of MATHEMATICAL FOUNDATIONS FOR SECURITY SYSTEMS 2019 scheme',
    url: '/materials/s3/mfss'
  },
]

export default function page() {
  return (
    <GlobalComp Datas = {datas} >
    </GlobalComp>
  )
}

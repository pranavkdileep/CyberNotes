import React from 'react'
import { GlobalComp } from '@/components/global-comp'
import exp from 'constants'

export interface Datas {
  title: string
  description: string
  url: string
}

const datas: Datas[] = [
  {
    title: 'Mathematical Foundation of Secure Systems',
    description: 'Download The Previous Year Question Papers of Mathematical Foundation of Secure Systems',
    url: '/qp/s4/mfss'
  }]
function page() {
    return (
        <GlobalComp Datas = {datas} >
        </GlobalComp>
    )
    }
export default page
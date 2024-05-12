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
    title: 'June 2023 (2019 Scheme)',
    description: 'Download The Previous Year Question Papers of Mathematical Foundation of Secure Systems (2019 Scheme)',
    url: 'https://drive.google.com/file/d/1vOvHHrtB8r8bGRsmt4QX-3O_lUi-QrHl/view?usp=sharing'
  }]
function page() {
    return (
        <GlobalComp Datas = {datas} >
        </GlobalComp>
    )
    }
export default page
import React from 'react'
import { GlobalComp } from '@/components/global-comp'

export interface Datas {
  title: string
  description: string
  url: string
}

const datas: Datas[] = [
  {
    title: 'Module 1',
    description: 'Download the Notes of Module 1',
    url: 'https://drive.google.com/drive/folders/14Dp-7HGC1UeusGPuuT_QRl0Cz8rICOf9?usp=sharing'
  },
    {
        title: 'Module 2',
        description: 'Download the Notes of Module 2',
        url: 'https://drive.google.com/drive/folders/1hYD_OFrS_aiK6L721u1I7FtXbZcvtthr?usp=sharing'
    },
    {
        title: 'Module 3',
        description: 'Download the Notes of Module 3',
        url: 'https://drive.google.com/drive/folders/1Um5C9qQNuORuMWJhkfEeziIrd_FRQWV-?usp=sharing'
    },
    {
        title: 'Module 4',
        description: 'Download the Notes of Module 4',
        url: 'https://drive.google.com/drive/folders/1cX_ZZNA98KMhZu1PHHP3XeC2yDaGh_Tk?usp=sharing'
    },
    {
        title: 'Module 5',
        description: 'Download the Notes of Module 5',
        url: 'https://drive.google.com/drive/folders/1AjKbA2_IxR6MYKHk-jX9iJzFC22vCBwo?usp=sharing'
    }
]

function page() {
  return (
    <GlobalComp Datas = {datas} >
      </GlobalComp>
  )
}

export default page
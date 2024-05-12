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
    title: 'Semester 1',
    description: 'Download The Previous Year Question Papers of Semester 1',
    url: '/qp/s1'
  },
    {
        title: 'Semester 2',
        description: 'Download The Previous Year Question Papers of Semester 2',
        url: '/qp/s2'
    },
    {
        title: 'Semester 3',
        description: 'Download The Previous Year Question Papers of Semester 3',
        url: '/qp/s3'
    },
    {
        title: 'Semester 4',
        description: 'Download The Previous Year Question Papers of Semester 4',
        url: '/qp/s4'
    },
    {
        title: 'Semester 5',
        description: 'Download The Previous Year Question Papers of Semester 5',
        url: '/qp/s5'
    },
    {
        title: 'Semester 6',
        description: 'Download The Previous Year Question Papers of Semester 6',
        url: '/qp/s6'
    },
    {
        title: 'Semester 7',
        description: 'Download The Previous Year Question Papers of Semester 7',
        url: '/qp/s7'
    },
    {
        title: 'Semester 8',
        description: 'Download The Previous Year Question Papers of Semester 8',
        url: '/qp/s8'
    }]
function page() {
    return (
        <GlobalComp Datas = {datas} >
        </GlobalComp>
    )
    }
export default page
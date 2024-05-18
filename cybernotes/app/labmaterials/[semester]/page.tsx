import React from 'react'

function page({params}: {params: {
    semester: string
    
};
}) {
  return (
    <div>Contents Of Semester {params.semester}</div>
  )
}

export default page
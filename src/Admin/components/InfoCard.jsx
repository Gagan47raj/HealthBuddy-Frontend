import React from 'react'
import {Card} from '@mui/material'

function InfoCard({ title, value, children: icon }) {
  return (
    <Card>
      <div className="flex items-center p-4">
        {icon}
        <div>
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">{value}</p>
        </div>
      </div>
    </Card>
  )
}

export default InfoCard
import React, { useEffect } from 'react'
import InfoCard from './InfoCard'
import { Card } from '@mui/material'
import { UsersIcon } from '@heroicons/react/16/solid'
import { useDispatch, useSelector } from 'react-redux'
import { findUser } from '../../States/User/Action'


const TotalUsers = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.userState);

  return (
    <Card className='' >
        <InfoCard title="Total Customers" value={users?.length}>
          <UsersIcon className="mr-4 text-purple-800 h-12 w-12"></UsersIcon>
        </InfoCard>
    </Card>
  )
}

export default TotalUsers

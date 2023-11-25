import React from 'react'
import Activity from './styles.component'
import ActivityItem from 'components/user-activity-item/ActivityItem.component'
import moment from 'moment';
const UserActivityContainer = ({orderCreatedTime,userCreatedTime}) => {
  console.log(orderCreatedTime,userCreatedTime);
  return (
    <Activity>
      <h1>User Activity</h1>
        <table>
          <thead>
            <tr>
              <td>name</td>
              <td>status</td>
              <td>time</td>
            </tr>
          </thead>
          <tbody>
           <ActivityItem />
          </tbody>
        </table>
    </Activity>
   
  )
}

export default UserActivityContainer
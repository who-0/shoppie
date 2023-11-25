import React from 'react'
import Activity from './styles.component'
import ActivityItem from 'components/user-activity-item/ActivityItem.component'
import moment from 'moment';
const UserActivityContainer = ({orderCreatedTime,userCreatedTime}) => {
  console.log(userCreatedTime);
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
           {orderCreatedTime.map(order => (
      
            <ActivityItem name={order.name} order={true} time={moment(order.createdAt).format('L h:mm a')} />
           ))}

           {
            userCreatedTime.map(user => (
              <ActivityItem name={user._id.name} user={true} time={moment(user._id.time).format('L h:mm a')} />
            ))
           }
          </tbody>
        </table>
    </Activity>
   
  )
}

export default UserActivityContainer
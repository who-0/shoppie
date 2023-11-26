import React from 'react'
import Activity from './styles.component'
import ActivityItem from 'components/user-activity-item/ActivityItem.component'
import moment from 'moment';
const UserActivityContainer = ({orderCreatedTime,userCreatedTime}) => {
  const activityArray = [...orderCreatedTime,...userCreatedTime]
  const newArray = activityArray.sort((a,b)=>{
    let c = new Date(a.createdAt);
    let d = new Date(b.createdAt);
    return d - c;
  })

  console.log('newArray',newArray);
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
            {
              newArray.map(activity =>(
                <ActivityItem name={activity.name} action={activity.action} time={moment(activity.createdAt).format('L h:mm a')} />
              ))
            }
          </tbody>
        </table>
    </Activity>
   
  )
}

export default UserActivityContainer
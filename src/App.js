import {
  AppRoot,
  View,
  Panel,
  PanelHeader,
  SimpleCell,
  Avatar,
} from '@vkontakte/vkui'
import { useEffect, useState } from 'react'

export default function App() {
  const [users, setUsers] = useState([])
  const [dataModel, setDataModel] = useState({users: []})

  useEffect(() => {
    fetch('https://api.melodious.team/users.get')
       .then((res) => res.json())
       .then((data) => {
          console.log(data);
          setUsers(
            data.map((x) => {
            let eachx = {firstName: x.firstName, lastName: x.lastName, imageURL: x.avatarURL}
            dataModel.users.concat(eachx)
          })
        )
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);

  return (
    <AppRoot>
      <View activePanel="main">
        <Panel id="main">
          <PanelHeader>api.melodious.team</PanelHeader>

          <Panel id="add_friend">
          <PanelHeader>
              Список пользователей
            </PanelHeader>

            {dataModel.users.map((user) => (
                <SimpleCell before={<Avatar />}>
                user.firstName
              </SimpleCell>
              ))}
          </Panel>
        </Panel>
      </View>
    </AppRoot>
  )
};
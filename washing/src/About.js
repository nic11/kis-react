import { useEffect, useState } from 'react';
import {
  Typography,
  Image,
  Form,
  Input,
  Button,
  Card,
  notification,
} from 'antd';
import {
  UserOutlined,
} from '@ant-design/icons';
import { Octokit } from '@octokit/rest';

// Токена не понадобилось :)
const octokit = new Octokit();

function useGithubData(username) {
  const [data, setData] = useState();
  useEffect(() => {
    octokit.rest.users.getByUsername({username})
      .then((res) => {
        console.log(res.data);
        setData({
          profileLink: res.data.html_url,
          username: res.data.login,
          name: res.data.name,
          avatarUrl: res.data.avatar_url,
          bio: res.data.bio,
        });
      })
      .catch((err) => {
        notification.open({
          message: 'Ошибка',
          description: 'Не получилось запросить данные GitHub профиля',
        });
        console.error(err);
      });
  }, [username]);
  return data;
}

function About() {
  const [username, setUsername] = useState('nic11');
  const ghData = useGithubData(username);
  return (
    <div>
      <Typography.Title>Про меня</Typography.Title>
      <Typography.Paragraph>
        Вы наверняка уже заметили, но я:
        <ul>
          <li>Люблю мемы</li>
          <li>Не люблю укладываться в дедлайны</li>
          <li>Имею фетиш на темные темы</li>
        </ul>
      </Typography.Paragraph>
      <Typography.Paragraph>
        Мой гитхаб: {
          ghData?
            (
              <Typography.Link href={ghData.profileLink} target="_blank">
                {ghData.profileLink}
              </Typography.Link>
            )
          :
            'загрузка...'
        }
      </Typography.Paragraph>
      {ghData &&
        (
          <Card
              style={{width: 250}}
              cover={<Image src={ghData.avatarUrl} />}
          >
            <Card.Meta
                title={ghData.username}
                description={<>Bio: {ghData.bio || 'его нет'}</>}
              />
          </Card>
        )
      }
      <Form
          layout="inline"
          initialValues={{username: 'nic11'}}
          onFinish={(data) => setUsername(data.username)}>
        <Form.Item name="username">
          <Input placeholder="Юзернейм" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Запросить</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

const aboutRoute = {
  title: 'О сайте',
  menuKey: 'about',
  route: '/about',
  Icon: UserOutlined,
  Content: About,
};

export default aboutRoute;

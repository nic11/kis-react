import { React } from 'react';
import { Typography, Image } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

function Home() {
  const recipeCredit = 'https://www.russianfood.com/recipes/recipe.php?rid=138699';
  return (
    <>
      <Typography.Title>Welcome!</Typography.Title>
      <Typography.Paragraph>
        Вы находитесь на сайте, который я должен был сдать в виде домашки,
        но, т.к. я <Typography.Text mark>продолбал дедлайн</Typography.Text>,
        то домашку я не сдам. Но сайт все же сделаю, just for lulz.
      </Typography.Paragraph>
      <Typography.Title level={5}>Грустно, но факт</Typography.Title>
      <Typography.Paragraph>
        А чтобы главная не выглядела так уныло, я сначала хотел написать
        сюда дефолтный Lorem ipsum, но здесь меня встретила идея покруче!
        Итак,
      </Typography.Paragraph>
      <Typography.Title level={5}>как приготовить блины на молоке:</Typography.Title>
      <Typography.Paragraph>
        <Image width={200} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftheawesomer.com%2Fphotos%2F2017%2F09%2Fpancake_cat_1.jpg&f=1&nofb=1' />
      </Typography.Paragraph>
      <Typography.Paragraph>
        Смешайте яйца, соль, сахар и размешайте миксером. Введите муку и
        влейте молоко. Взбейте блинное тесто, чтобы добиться однородной
        консистенции.
      </Typography.Paragraph>
      <Typography.Paragraph>
        Следом отправьте в тесто растительное масло, чтобы блины в момент
        жарки легко переворачивались и не пригорали.
      </Typography.Paragraph>
      <Typography.Paragraph>
        Разогрейте сковородку и смажьте маслом.
      </Typography.Paragraph>
      <Typography.Paragraph>
        Налейте в центр сковородки небольшую порцию теста. Сразу же вращайте
        сковородку по кругу, чтобы тесто равномерно распределилось по всей
        поверхности.
      </Typography.Paragraph>
      <Typography.Paragraph>
        Жарим блины на среднем огне с обеих сторон до зарумянивания. Блины
        очень тонкие, поэтому переворачивайте их аккуратно с помощью
        лопатки. После того, как блин будет готов, снимите со сковородки и
        смажьте сливочным маслом, чтобы края не были сухими, а блины
        получились нежными.
      </Typography.Paragraph>
      <Typography.Paragraph>
        Блины на молоке можно подавать с вареньем, джемом или сгущенкой.
        Приятного аппетита!
      </Typography.Paragraph>
      <Typography.Paragraph>
        (C) <Typography.Link href={recipeCredit} target="_blank">
          {recipeCredit}
        </Typography.Link>
      </Typography.Paragraph>
    </>
  );
}

const homeRoute = {
  title: 'Главная',
  menuKey: 'home',
  route: '/',
  Icon: HomeOutlined,
  Content: Home,
};

export default homeRoute;

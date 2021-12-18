import moment from 'moment';
import { React, useState } from 'react';
import {
  Typography,
  Image,
  Form,
  Input,
  DatePicker,
  Button,
} from 'antd';
import { FileDoneOutlined } from '@ant-design/icons';

function range(begin, end) {
  const result = [];
  for (let i = begin; i < end; ++i) {
    result.push(i);
  }
  return result;
}

export default {
  title: 'Записаться',
  menuKey: 'enlist',
  route: '/enlist',
  Icon: FileDoneOutlined,
  Content() {
    const [formData, setFormData] = useState();
    function onFinish(values) {
      console.log('onFinish', values);
      setFormData(values);
    }
    return (
      <>
        <Typography.Title>Записаться на стирку</Typography.Title>
        <Typography.Paragraph>
          Стань боссом этой прачечной на целых полчаса и устрой большую стирку!
          Это безопасно, trust me.
        </Typography.Paragraph>
        <Form
            layout="horizontal"
            labelCol={{span: 3}}
            // DatePicker по дефолту привязывается к текущему времени
            // и позволяет выбрать время, совпадающее с текущим, в другой
            // день. Так что я заранее округляю дефолный слот до
            // следующего часа.
            initialValues={{datetime: moment().add(1, 'hour').startOf('hour')}}
            onFinish={onFinish}>
          <Form.Item
              name="name" label="Твое имя"
              rules={[{
                required: true,
                message: (
                  <Image width={500}
                    src="https://memepedia.ru/wp-content/uploads/2020/01/hto-ja.png" />
                )
              }]}>
            <Input placeholder="Я не про аниме!" />
          </Form.Item>
          <Form.Item
              name="datetime"
              label="Время"
              rules={[{
                required: true,
                message: 'Не знаю, как ты это сделал, хацкер, но лучше ненадо...'
                // DatePicker не дает сбросить на пустое поле, хотя я пытался
              }]}>
            <DatePicker
                style={{width: "100%"}}
                renderExtraFooter={() => <>В прайм-тайм очередь больше!</>}
                disabledDate={
                  (date) => date < moment()
                         || date.minute() % 30 !== 0
                         || date.second() !== 0
                }
                showNow={false}
                showTime={{
                  disabledMinutes: () => range(1, 30).concat(range(31, 60)),
                  disabledSeconds: () => range(1, 60),
                  hideDisabledOptions: true,
                  showSecond: false,
                }}
                />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Записаться</Button>
          </Form.Item>
          {formData &&
            <Typography.Paragraph>
              Трепещи, {formData.name}, судный час настанет
              в {formData.datetime.format()}!
            </Typography.Paragraph>
          }
        </Form>
      </>
    );
  },
};

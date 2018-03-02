import React from 'react';
import {
  Container,
  Content,
  Header,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Title,
  Input,
  Item,
} from 'native-base';

const Demo = (props) => (
  <Container>
    <Header>
      <Left/>
      <Body>
      <Title>Product Name</Title>
      </Body>
      <Right/>
    </Header>
    <Content padder>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search"/>
          <Input onChangeText={(text) => {
            console.log(text);
            props.onChangeInput(text);
          }} placeholder="Search"/>
        </Item>
      </Header>

      {props.users.length > 0 ? props.users.map((item, key) =>
        (<Card key={key} style={{flex: 0}}>
          <CardItem>
            <Left>
              <Thumbnail
                source={{uri: 'https://www.materialui.co/materialIcons/action/account_circle_grey_192x192.png'}}/>
              <Body>
              <Text>{item.name}</Text>
              <Text note>{item.email}</Text>
              <Text note>last login: {item.date}</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>)) : null}
    </Content>
  </Container>
);
export default Demo;

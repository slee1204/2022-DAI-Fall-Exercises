import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import styled from 'styled-components/native';

const LeftContent = props => <Avatar.Text size={50} label="SL" />

const MyButton = styled(Button)`
    width: 100%;
    height: 100px;
    justify-content: center;
    align-items: center;
`



export default function Main (){

    return (
    <View>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <MyButton icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
            Press me
        </MyButton>

        <Card>
            <Card.Title title="Tweet #1" subtitle="by Sue" left={LeftContent} />
            <Card.Content>
            <Title>This is a card about me</Title>
            <Paragraph>I drink beers</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
            </Card.Actions>
        </Card>
    </View>
    )
}
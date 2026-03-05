import { Button } from 'react-native-web'
import { ButtonCustom, HeaderTitle, ScreenWrapper } from '../components'
import { ButtonLink } from '../components/ButtonLink'
import { useNavigation } from '@react-navigation/native'
import { Text } from 'react-native'


export const QuizScreen = () => {
    const navigation = useNavigation()

    const changeColor = (color) => {

        console.log(`Bouton ${color} sélectionné`)
    }

    <ScreenWrapper>
      <HeaderTitle text="Quiz" />
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>
        Quelle est la capitale de la France ?
      </Text>
      <Button
        title="Paris"
        onPress={() => changeColor('green')}
        secondary
      />
      <Button
        title="Lyon"
        onPress={() => changeColor('green')}
        secondary
      />
      <Button
        title="Marseille"
        onPress={() => changeColor('green')}
        secondary
      />
      <Button
        title="Bordeaux"
        onPress={() => changeColor('green')}
        secondary
      />

      <ButtonLink
        text="Valider"
        onPress={() => navigation.navigate('Results')}
      />
      
    </ScreenWrapper>
  
}
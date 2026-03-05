import { Text } from 'react-native'
import { HeaderTitle, ScreenWrapper } from '../components'

export const ResultsScreen = () => {
  return (
    <ScreenWrapper>
        <HeaderTitle text="Résultats" />
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>
            Votre score : 1/1
        </Text>
    </ScreenWrapper>
  )
}
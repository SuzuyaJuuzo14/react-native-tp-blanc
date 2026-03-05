import { ButtonCustom, HeaderTitle, InputCustom, ScreenWrapper } from '../components'
import { useAuth } from '../hooks/useAuth'
import { useState } from 'react'
import { showError, validators } from '../utils'

export const HomeScreen = ({ navigation }) => {
  const { login } = useAuth()
  const [name, setName] = useState('')

  const validateForm = async () => {
    if (!validators.name(name)) {
      showError('Le nom est requis.')
      return
    }

    if (!validators.name(name)) {
      showError('Le nom ne doit contenir que des lettres et des espaces.')
      return
    }

    try {
      const user = await login(name)
      if (user) {
        navigation.navigate('Quiz')
      }
    } catch (error) {
      showError(error.message)
    }
  }

  return (
    <ScreenWrapper>
      <HeaderTitle text="Bienvenue !" />
      <InputCustom
        placeholder="Entrez votre nom"
        value={name}
        onChangeText={setName}
      />
      <ButtonCustom
        text="Jouer !"
        onPress={validateForm}
      />
      </ScreenWrapper>
  )
}
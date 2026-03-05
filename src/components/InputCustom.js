import { StyleSheet, TextInput } from 'react-native'

export const InputCustom = ({ value, onChangeText, placeholder, type }) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={styles.placeholder}
      keyboardType={type === 'prenom' ? 'prenom' : 'default'}
      autoCapitalize={type === 'prenom' ? 'none' : undefined}
      style={styles.input}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    borderRadius: 4,
    borderWidth: 1,
    height: 50,
    marginTop: 20,
    paddingHorizontal: 16,
    width: '100%'
  },
  placeholder: 'gray'
})

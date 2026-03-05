import { StyleSheet, Text } from 'react-native'

export const HeaderTitle = ({ text }) => {
  return <Text style={styles.headerTitle}>{text}</Text>
}

const styles = StyleSheet.create({
  headerTitle: {
    color: 'red',
    fontSize: 24,
    fontWeight: 'bold'
  }
})
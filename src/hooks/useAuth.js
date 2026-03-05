import { useSQLiteContext } from 'expo-sqlite'
import { getUser, insertUser } from '../services/database'

export const useAuth = () => {
  const db = useSQLiteContext()

  const login = async (name) => {
    return await getUser(db, name)
  }

  const register = async (name) => {
    return await insertUser(db, name)
  }
  return {login, register}
}

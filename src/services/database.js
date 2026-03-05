export async function migrateDbIfNeeded(db) {
  let { user_version: currentDbVersion } = await db.getFirstAsync('PRAGMA user_version')

  if (currentDbVersion < 1) {
    await db.execAsync(`
      PRAGMA journal_mode = 'wal';
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        name TEXT NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `)
    currentDbVersion = 1
    await db.execAsync(`PRAGMA user_version = ${currentDbVersion}`)
  }
}

export async function getUser(db, name) {
  const user = await db.getFirstAsync('SELECT * FROM users WHERE name = ?', [name])

  if (!user) {
    console.log('Name not found:', name)
    throw new Error('Identifiants invalides.')
  }

  return user.name
}

export async function insertUser(db, name) {
  const user = await db.getFirstAsync('SELECT id FROM users WHERE name = ?', [name])

  if (user) {
    console.log('Duplicate name:', name)
    throw new Error('Name déjà existant.')
  }

  const result = await db.runAsync('INSERT INTO users (name) VALUES (?);', [name])

  return result.lastInsertRowId
}



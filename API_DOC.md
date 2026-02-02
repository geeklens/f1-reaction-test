# 🎮 Backend API Specification / ТЗ на Разработку API / API Texnik Topshirig'i

## 🌐 General Info / Общая информация / Umumiy ma'lumot

**Base URL:** `/api/v1`  
**Content-Type:** `application/json`  
**Auth:** `Authorization: Bearer <token>`

---

## 🔐 1. Authentication / Аутентификация / Authentifikatsiya

### POST `/auth/register`

- **EN**: Create a new account.
- **RU**: Создание нового аккаунта.
- **UZ**: Yangi akkaunt ochish.
- **Request**: `{ "username": "string", "email": "string", "password": "password" }`
- **Response**: `{ "status": "success", "token": "jwt_token", "user": { ... } }`

### POST `/auth/login`

- **EN**: Login to existing account.
- **RU**: Вход в существующий аккаунт.
- **UZ**: Mavjud akkauntga kirish.
- **Request**: `{ "email": "string", "password": "password" }`
- **Response**: `{ "status": "success", "token": "jwt_token" }`

---

## 👤 2. User & Profile / Пользователь и Профиль / Foydalanuvchi va Profil

### GET `/user/me`

- **EN**: Get current authenticated user details.
- **RU**: Получение данных текущего пользователя.
- **UZ**: Joriy foydalanuvchi ma'lumotlarini olish.
- **Response**:

```json
{
	"id": "uuid",
	"username": "Geek",
	"email": "geek@example.com",
	"avatar": "url",
	"settings": {
		"theme": "Dark | Light | System",
		"language": "English | Russian | Uzbek",
		"soundEnabled": true,
		"streamerMode": false
	},
	"stats": {
		"totalGames": 120,
		"bestReactionTime": 165,
		"avgAccuracy": 98.4
	}
}
```

### PATCH `/user/settings`

- **EN**: Update UI and system preferences.
- **RU**: Обновление настроек интерфейса.
- **UZ**: Interfeys sozlamalarini tahrirlash.
- **Request**: `{ "theme": "string", "language": "string", "soundEnabled": boolean }`

---

## 🕹️ 3. Game Catalog / Каталог Игр / O'yinlar Katalogi

### GET `/games`

- **EN**: Retrieve all available game modules.
- **RU**: Получение всех игровых модулей.
- **UZ**: Barcha o'yin modullarini olish.
- **Response**: `[ { "slug": "neural-reaction", "title": "Neural Reaction", "category": "Precision" }, ... ]`

---

## 📈 4. Gameplay & Statistics / Геймплей и Статистика / O'yin va Statistika

### POST `/games/{slug}/record`

- **EN**: Save a new session result.
- **RU**: Сохранение результата игровой сессии.
- **UZ**: O'yin sessiyasi natijasini saqlash.
- **Request**:

```json
{
	"score": 185,
	"accuracy": 99.1,
	"duration": 45,
	"metadata": { "falseStarts": 0 }
}
```

- **Response**: `{ "isNewRecord": true, "globalRank": 42 }`

### GET `/user/history`

- **EN**: List of recent game sessions.
- **RU**: История последних игровых сессий.
- **UZ**: Oxirgi o'yin sessiyalari tarixi.
- **Response**: `[ { "game": "neural-reaction", "score": 190, "date": "2024-02-02" } ]`

---

## 🏆 5. Social & Competitive / Социальное и Соревнования / Ijtimoiy va Musobaqa

### GET `/leaderboard/{slug}`

- **EN**: Top players for a specific game.
- **RU**: Топ игроков для конкретной игры.
- **UZ**: Muayyan o'yin bo'yicha eng yaxshi o'yinchilar.
- **Query Params**: `?limit=10&offset=0`
- **Response**: `[ { "rank": 1, "username": "ProGamer", "score": 155 }, ... ]`

---

## 🔍 6. Global Search (Cmd+K) / Глобальный Поиск / Global Qidiruv

### GET `/search`

- **EN**: Search for games, players or actions.
- **RU**: Поиск игр, игроков или действий.
- **UZ**: O'yinlar, foydalanuvchilar yoki harakatlarni qidirish.
- **Query Params**: `?q=neural`

---

## 🛠️ 7. System / Системные / Tizim

### POST `/user/reset-account`

- **EN**: Clear all stats and reset settings.
- **RU**: Сброс всей статистики и настроек.
- **UZ**: Barcha statistika va sozlamalarni o'chirish.

### DELETE `/user/me`

- **EN**: Delete account permanently.
- **RU**: Удаление аккаунта навсегда.
- **UZ**: Akkauntni butunlay o'chirish.

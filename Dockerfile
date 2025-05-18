# Используем официальный образ Node.js
FROM node:18-alpine

# Создаем директорию приложения
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы приложения
COPY . .

# Открываем порт 3000
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"] 
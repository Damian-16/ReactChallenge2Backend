# Usar la imagen base de Node.js
FROM node:14

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm ci --only=production

# Copiar el resto de los archivos del proyecto al directorio de trabajo
COPY . .

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Iniciar la aplicación
CMD [ "npm", "start" ]

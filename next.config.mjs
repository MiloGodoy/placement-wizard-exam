// Importa el módulo path
import path from 'path';

// Exporta la configuración de Next.js
export default {
  webpack: (config, { isServer }) => {
    // Agrega una regla para manejar archivos MP3
    config.module.rules.push({
      test: /\.(mp3)$/,
      use: {
        loader: 'file-loader',
        options: {
          // Indica la carpeta de salida para los archivos MP3
          outputPath: 'static/audio',
          // Nombre de archivo personalizado para los archivos MP3
          name: '[name].[ext]',
          // Define la URL base para los archivos MP3
          publicPath: '/_next/static/audio/',
        },
      },
    });

    // Agrega una regla para manejar archivos WAV
    config.module.rules.push({
      test: /\.(wav)$/,
      use: {
        loader: 'file-loader',
        options: {
          // Indica la carpeta de salida para los archivos WAV
          outputPath: 'static/audio',
          // Nombre de archivo personalizado para los archivos WAV
          name: '[name].[ext]',
          // Define la URL base para los archivos WAV
          publicPath: '/_next/static/audio/',
        },
      },
    });

    // Devuelve la configuración modificada
    return config;
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [], // Adicione os domínios externos aqui, se necessário
      unoptimized: true, // Adicione isso se você estiver usando Netlify para evitar otimizações automáticas
    },
    reactStrictMode: true, // Isso ajuda a capturar problemas em tempo de desenvolvimento
  };
  
  module.exports = nextConfig;
  
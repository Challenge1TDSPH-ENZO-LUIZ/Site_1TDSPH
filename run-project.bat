@echo off
echo ========================================
echo   Hospital Sao Lucas - Sistema Web
echo ========================================
echo.
echo Instalando dependencias...
call npm install

echo.
echo Iniciando servidor de desenvolvimento...
echo O projeto sera aberto automaticamente no navegador
echo.
echo URL: http://localhost:3000
echo.
echo Para parar o servidor, pressione Ctrl+C
echo.
call npm run dev
a
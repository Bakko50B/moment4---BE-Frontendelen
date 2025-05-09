# Frontend för Moment 4 - Backendkurs
För att öva gjorde jag denna del i Vite.  
Vite är ett byggverktyg som finns som ett npm paket  

## Användning
För att använda detta repo, klona repot till en egen katalog.  
Lägg alla filer i rooten på den katalogen.

### Installation
kör:  
```sh
npm install  
```

### Starta
kör: 
``` sh 
npm run dev  
```

### Förutsättningar
För att detta ska fungera krävs en backend-del som finns i ett separat repo.  

## Användning
Det finns en startsida (index.html)  
Det finns en inloggningssida (login.html)  
Vid inloggning via den sidan öppnas en administrationsdel. (admin.html)  
Admin.html kräver en giltig token skapad på serverdelen, den skapas vid inloggning.  
Om det saknas en giltig koppling på serverdelen så visas minimal information.  
För att kunna använda admin.html finns en länk från index.html för att skapa sig ett inlogg.  
Detta projekt fokuserar på att **demonstrera hantering av autentisering och auktorisering**.  
Det är inte optimerat för produktion, utan används för inlärningssyften inom Moment 4.
  

Det finns även en logga utfunktion som endast leder till en javaScript-fil.
JWT-token som skapas på serverdelen gör det möjligt att hantera och ta bort utgångna tokens på klientsidan. De lagras i localStorage efter inloggning. Använder delvis en annan teknik än den som finns i kursmaterialet.  
 
## Av
Torbjörn Lundberg, tolu2403@student.miun.se



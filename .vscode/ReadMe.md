[1] scaffolding:
    $mkdir contact-app  
    $cd contact-app  
    $dotnet new webapi 

[2] File->Preference->Setting->User Setting->Proxy
{
    "workbench.startupEditor": "newUntitledFile",
    "http.proxy": "http://v0cn140:Volvo249@httppxsait.srv.volvo.com:8080",
    "https.proxy": "https://v0cn140:Volvo249@httppxsait.srv.volvo.com:8080",
    "terminal.integrated.rendererType": "dom"
}

[3] launch to update
"program": "${workspaceFolder}/bin/Debug/netcoreapp2.1/contact-app.dll",
"webRoot": "${workspaceFolder}/src"

[4] In terminal 
    PS C:\Users\v0cn140\contact-app> dotnet add package Microsoft.EntityFrameworkCore.SqlServer -v 2.1.1
    PS C:\Users\v0cn140\contact-app> dotnet restore

[5] add below to  ‘contact-app.csproj’
    <ItemGroup>
      <PackageReference Include="Microsoft.AspNetCore.App" />
      <PackageReference Include="Microsoft.AspNetCore.Razor.Design" Version="2.1.2" PrivateAssets="All" />
      <PackageReference Include="Microsoft.EntityFrameworkCore.SqlServer" Version="2.1.1" />
    </ItemGroup>
    <ItemGroup>
      <DotNetCliToolReference Include="Microsoft.EntityFrameworkCore.Tools" Version="2.1.1" />
    </ItemGroup>
  
[6] to create folder 'Migrations'
    dotnet ef migrations add InitialCreate

[7] Installation of SQLExpress
    Connection String：Server=localhost\SQLEXPRESS;Database=master;Trusted_Connection=True;
    Administrator： VCN\v0cn140

[8] appsettings.json
      "ConnectionStrings": {
        "ContactDb": "Data Source=localhost\\SQLEXPRESS;Initial Catalog=ContactDb;Integrated Security=True"
      }

[9] Create database in SQL server
  PS C:\Users\v0cn140\contact-app> dotnet ef database update
  info: Microsoft.EntityFrameworkCore.Infrastructure[10403]
        Entity Framework Core 2.1.4-rtm-31024 initialized 'ContactAppContext' using provider 'Microsoft.EntityFrameworkCore.SqlServer' with options: None

[10] Add ContactController.cs
  PS C:\Users\v0cn140\contact-app> dotnet build

[11] Setup development variable and URL for project in terminal:
  set ASPNETCORE_ENVIRONMENT=Development
  set ASPNETCORE_URLS=http://localhost:5000

[12] 
  >dotnet run

[13] Postman
  Settings->Proxy:  turn off 'Global Proxy Configuration'
                    turn on 'Use System Proxy'

[14] Postman
  POST: http://localhost:5000/api/contact/addContact
    header: 
      [{"key":"Content-Type","name":"Content-Type","value":"application/json","description":"","type":"text"}]
    body: raw / Json
      {
        "name": "Song",
        "email": "song.lin@volvo.com",
        "techno": "DotNet",
        "gender": 0,
        "birth": "02/06/1981"
      }

[15] Postman
  GET: http://localhost:5000/api/contact/getcontact?id=1
  GET: http://localhost:5000/api/contact/getallcontacts

[16] 
  PS C:\Users\v0cn140\contact-app> node -v
  v8.12.0
  PS C:\Users\v0cn140\contact-app> npm -v
  6.4.1

[17] Set npm proxy in command prompt
	npm config set http-proxy http://v0cn140:Volvo249@httppxsait.srv.volvo.com:8080
	npm config set https-proxy https://v0cn140:Volvo249@httppxsait.srv.volvo.com:8080
	npm config list

[18] Installation of NG
    npm install -g @angular/cli
    PS C:\Users\v0cn140\contact-app> ng new Contact-App --skip-install

[19] After the project is created, we move all the files & folders from Contact-App to Root folder 
  PS C:\Users\v0cn140\contact-app> npm install

[20] Go to 'angular.json' file, it is a configuration schema file.
  We changed 'wwwroot' folder path in OutputPath.
            "outputPath": "wwwroot",

[21] We can see generated files under wwwroot folder.
  PS C:\Users\v0cn140\contact-app> ng build

[22] Configure startup to route to angular application
  PS C:\Users\v0cn140\contact-app> dotnet run
    https://localhost:5001/
    https://localhost:5001/api/contact/getAllContacts

[23] 
  PS C:\Users\v0cn140\contact-app> ng add @angular/material
  npm install -d @angular/cdk hammerjs

[24] 
  Add 'app.material.module.ts' in app folder.

[25] 
   Imported Angular material theme in the main style.css in src folder
    @import '~@angular/material/prebuilt-themes/deeppurple-amber.css';

[26] 
  Added this link of material icons into index.html in src folder
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

[27] Command to generate new component
  PS C:\Users\v0cn140\contact-app> ng generate component contactform --module app
  CREATE src/app/contactform/contactform.component.html (30 bytes)
  CREATE src/app/contactform/contactform.component.spec.ts (663 bytes)
  CREATE src/app/contactform/contactform.component.ts (289 bytes)
  CREATE src/app/contactform/contactform.component.css (0 bytes)
  UPDATE src/app/app.module.ts (726 bytes)
  PS C:\Users\v0cn140\contact-app> ng generate component contactlist --module app
  CREATE src/app/contactlist/contactlist.component.html (30 bytes)
  CREATE src/app/contactlist/contactlist.component.spec.ts (663 bytes)
  CREATE src/app/contactlist/contactlist.component.ts (289 bytes)
  CREATE src/app/contactlist/contactlist.component.css (0 bytes)
  UPDATE src/app/app.module.ts (828 bytes)

[28] Add app.routing.ts
  And add reference in 'app.module.ts'
    import { Routing } from './app.routing';

[29] Create angular services, and move to directory services
  PS C:\Users\v0cn140\contact-app> ng generate service contact
    CREATE src/app/contact.service.spec.ts (338 bytes)
    CREATE src/app/contact.service.ts (136 bytes)
  
[30] Write contents in contact.service.ts

[31] Create model folder and contact.ts

[32] Write contents to app.component.html
  <mat-toolbar>
    <span>Contact Application</span>
  </mat-toolbar>
  <router-outlet></router-outlet>

[33] Write to all files under contactlist dir

[34] Write to all files under shared dir

[35] 
  PS C:\Users\v0cn140\contact-app> ng build
  PS C:\Users\v0cn140\contact-app> dotnet run
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
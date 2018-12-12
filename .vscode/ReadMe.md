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

[7] 

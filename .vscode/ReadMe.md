[0]
  ## 1 Open up the built in terminal in VS Code and type 
        >git init

  ## 2 Start by opening up the Source Control tab (the icon looks like a split in the road)

  ## 3 Check thr file system (make sure you can see hidden files) it now includes a .git directory.

  ## 4 New file shows up with the letter 'U' beside it. 'U' stands for untracked file -- not yet been added to the repository.

  ## 5 Click the plus icon to add the file to be tracked by the repository. Notice now that the letter next to the file has changed to an 'A'. 'A' stands for a new file that has been added to the repository.

  ## 6 To commit our changes, type a commit message into the input box at the top of the Source Control panel. Then, click the check icon to perform the commit.

  ## 7 In the Source Control panel, you should see that your file has been changed. It should show the letter 'M', which stands for a file that has been modified.

  ## 8 Files in a repository go through three stages before being under version control with git:
    Untracked: the file exists, but is not part of git's version control
    Staged: the file has been added to git's version control but changes have not been committed
    Committed: the change has been committed

  ## 9
      PS C:\Users\v0cn140\contact-app> git status
      On branch master
      nothing to commit, working tree clean

  ## 10 Gutter Indicators--similar as code folding.

  ## 11 Add file to the staging area:
    >git add RepoLog.MD

  ## 12 Staging and committing can therefore be done in one go using the following syntax:
    >git commit -m"commit of RepoLog.MD"

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

[36] Debug
  (1) Only step into core code:
      Have below in launch.json, and press F5 to step into:
        "name": "contact-app",
        "type": "coreclr",
  (2) Only step into NG
        Have below in launch.json,
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome",
            "url": "http://localhost:5000",
            "webRoot": "${workspaceFolder}",
            "sourceMaps": true
        },
        first, PS C:\Users\v0cn140\contact-app> dotnet run;
        second, go to Debug tab and select triangle of "Launch Chrome"
  (3) Debug with both of core and NG codes.
    "compounds": [
        {
            "name": ".Net Core + Chrome",
            "configurations": [".NET Core Launch (console)", "Launch Chrome"]
        }
    ],
    "configurations": [
        {
            "name": ".NET Core Launch (console)",
            "type": "coreclr",
            "request": "launch",
            "preLaunchTask": "build",
            "program": "${workspaceFolder}/bin/Debug/netcoreapp2.1/contact-app.dll",
            "args": [],
            "cwd": "${workspaceFolder}",
            "stopAtEntry": false,
            "console": "internalConsole"
        },
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome",
            "url": "http://localhost:5000",
            "webRoot": "${workspaceFolder}",
            "sourceMaps": true
        },

[37] Github setup：
  PS C:\Users\v0cn140\contact-app> git checkout master
  Checking out files: 100% (31392/31392), done.
  Switched to branch 'master'
  PS C:\Users\v0cn140\contact-app> git checkout dev
  Checking out files: 100% (31392/31392), done.
  Switched to branch 'dev'
  PS C:\Users\v0cn140\contact-app> git remote add origin https://github.com/songlin81/WebAPICoreAndNG.git
  PS C:\Users\v0cn140\contact-app> git remote -v

[38] Check above git settings:
  C:\Users\v0cn140\contact-app\.git\config
    [core]
      repositoryformatversion = 0
      filemode = false
      bare = false
      logallrefupdates = true
      symlinks = false
      ignorecase = true
    [remote "origin"]
      url = https://github.com/songlin81/WebAPICoreAndNG.git
      fetch = +refs/heads/*:refs/remotes/origin/*

[39] Set Git proxy and verify
  git config --global http.proxy http://v0cn140:Volvo249@httppxsait.srv.volvo.com:8080
  git config --global --get http.proxy
  git config --global https.proxy https://v0cn140:Volvo249@httppxsait.srv.volvo.com:8080
  git config --global --get https.proxy

[40] Github push
  >git push -u origin master
  >git push -u origin dev
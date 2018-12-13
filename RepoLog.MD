## 1 
    Open up the built in terminal in VS Code and type >git init

## 2
    Start by opening up the Source Control tab (the icon looks like a split in the road)

## 3
    Check thr file system (make sure you can see hidden files) it now includes a .git directory.

## 4
    New file shows up with the letter 'U' beside it. 'U' stands for untracked file -- not yet been added to the repository.

## 5
    Click the plus icon to add the file to be tracked by the repository. Notice now that the letter next to the file has changed to an 'A'. 'A' stands for a new file that has been added to the repository.

## 6
    To commit our changes, type a commit message into the input box at the top of the Source Control panel. Then, click the check icon to perform the commit.

## 7
    In the Source Control panel, you should see that your file has been changed. It should show the letter 'M', which stands for a file that has been modified.

## 8
    Files in a repository go through three stages before being under version control with git:
        Untracked: the file exists, but is not part of git's version control
        Staged: the file has been added to git's version control but changes have not been committed
        Committed: the change has been committed

## 9
    PS C:\Users\v0cn140\contact-app> git status
    On branch master
    nothing to commit, working tree clean

## 10
    Gutter Indicators--similar as code folding.

## 11
    Add file to the staging area:
        >git add blah.txt

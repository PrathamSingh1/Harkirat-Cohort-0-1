1. git clone <https copied repo link>
2. git diff     // it tells what changes you have made in your files etc
3. git log      // shows the all commit details
4. git add .    // make all the files in staged area
5. git commit -m ""
6. git remote add origin <ssh of the new repo where you want to store your repo>
7. git push origin HEAD
8. git remote -v    // to check the fetch link and where it going to be store on pushing.
9. git status    // to check the changes
10. git checkout -b <new branch name you want to create>
11. git push origin --delete <branch name you want to delete>       //  Delete the remote branch on github
12. git checkout main       // to change the branch 
13. git branch -D <name of the branch you want to delete>       // delete the local branch on your machine which is not merged yet
14. git branch -d <name of the branch you want to delete>      // delete the local branch on your machine if fully merged
15. git branch          // to check the branch
16. git pull origin main --rebase           // if your main branch is ahead of your local branch
17. git reset       // remove everything form the staged area without loosing your code.

## Versions - update cache

If the version is updated, the timeQueryServer is going to be deleted and the information will be updated from the database (avoid keeping the information cached if we release a new version).

## Deploy

1. Enter to cPanel
2. Enter to Administrador de archivos
3. Enter to public_html
4. Delete all the files / folder. Keep well-known folder
5. In your computer: pull all the changes from the repo, fetch the remotes and branch to turismo-serrano-prod
6. Copy `noImage` file to `Search` folder
7. Compress to `.zip` and upload it to public_html folder in cPanel.
8. Extract the `.zip` into public_html folder in cPanel

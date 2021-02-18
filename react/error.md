<h2> npm install -g less does not work: EACCES: permission denied </h2>

<p>To minimize the chance of permissions errors, you can configure npm to use a different directory. In this example, it will be a hidden directory on your home folder.

- Make a directory for global installations:

 `mkdir ~/.npm-global`
- Configure npm to use the new directory path:

 `npm config set prefix '~/.npm-global'`
- Open or create a ~/.profile file and add this line:

 `export PATH=~/.npm-global/bin:$PATH`
- Back on the command line, update your system variables:

`source ~/.profile`
- Test: Download a package globally without using sudo.

`npm install -g jshint`
- If still show permission error run (mac os):

`sudo chown -R $USER ~/.npm-global`
- This works with the default ubuntu install of:

` sudo apt-get install nodejs npm` 

</p>

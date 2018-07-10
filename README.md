# mirror-mirror
Platform for sharing interview experiences.

# Setting up your environment
Set up your DB by installing sequelize globally `npm i -g sequelize` and
running `sequelize db:migrate`. You'll need a postgres database on your
machine, `mirror_mirror` by default.

Set up OAuth by creating a GitHub application. You'll need a `.env` file
with three different keys to successfully use Passport:
```
GITHUB_CLIENT_ID=<your client id>
GITHUB_CLIENT_SECRET=<your client secret>
EXPRESS_KEY=<some arbitrary key>
```

The server is configured to serve everything up from your build directory, so
an `npm run build` followed by `npm run start:dev` will get you going. However,
to work faster you can run your server: `npm run start:dev`, and once that's
running you can start up your create-react-app server: `npm start`. The second
server only runs your front-end, and proxies all other requests to your running
main server (at localhost:3000, this can be changed in your package.json).

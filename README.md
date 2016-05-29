# koa-rethinkdb-es7-starter

Example of a project implemented in Koa, Rethinkdb, React/Redux/Relay, es6(stage-3). Just read description below.

## Project stage === in development

## Why write it?:

You can find many small pet projects, but you can't find a big, good-written, **modern**, flexible app with great structure implemented with patterns in mind.

## If you want only good project template:

Just clone it, fork it.

I'll create a Yeoman generator, when I'll be sure that setup is great.

I assure - this setup will be modular.

## Main Idea:

Nowadays, we understand **that we must Think in real-time, Think in Data, Think in non-REST world.** Web must adapt to our complicated, real-time world of Big Data and analyzing, quickly react to modern problems and world changes.

Simple data structures, low-level imperative programming and server-generated pages(not about SPA server rendering) must die. Really, this relic must die. It's time for highly abstract and functional New Web.

Evolution of the Web is a hard, comparatively long process. GraphQL, WebRTC, WebSockets, modern data-driven libraries (like Relay) or local browser storages can't change the rules of the game in one moment.

Developers try to simplify web with new tools, new frameworks, new methodologies and standards. But are really all these technologies enough to migrate from client-server world with REST and server-generated pages to peer-to-peer non-REST SPA-only Web? Migrate from low-data aggressive Web, that is full of ads and non-personalized content, to **The New Web**, decentralized, personalized, data-driven Web.

So, the main idea of this project is developing of the application, that fully filled of advanced technologies and patterns, provide a good example.

## Run locally:
```

git clone https://github.com/Metnew/koa-graphql-rethinkdb-starter.git && cd koa-graphql-rethinkdb-starter && npm install
```

Run fullstack:

```

        npm start
```

Run frontend only:

```

        npm run serve
```

### Essential tasks:
<b>Contributions are always welcome. Please, send your pull request.</b>

1. Add [Relay](https://facebook.github.io/relay/)
2. Add Tests.
3. Provide good big(!) example of [**GraphQL**](http://graphql.org/docs/getting-started/)
4. Implement all requests connected to DB data with [**Socket.IO**](http://socket.io/)
5. Implement all requests not connected to DB data in simple **XHR**
6. Add Rethinkdb's sharding example
7. Add Redis

## Summary:

### Stack:

ES: **stage-3** (await, async)<br>
Frontend: **Webpack + React + Redux + Socket.io**<br>
Backend: **Rethinkdb + Koa(+ plugins) + GraphQL + Socket.io + JWT**;<br>
View package.json for more info.

## License
MIT

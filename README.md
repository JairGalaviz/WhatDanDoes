whatdandoes.info
================

I am a Wycliffe Bible Translator. This is my missionary blog.

# Set up

```
npm install
```

# Build static static

```
./node_modules/hexo/bin/hexo generate
```

# Create new post

```
./node_modules/hexo/bin/hexo new post "Post title"
```

# Development server

```
./node_modules/hexo/bin/hexo s -p 3001
```

# Production

This is meant to be deployed behind a Dockerized `nginx-proxy`/`letsencrypt-nginx-proxy-companion` combo:

```
npm install
./node_modules/hexo/bin/hexo generate
docker-compose up -d
```


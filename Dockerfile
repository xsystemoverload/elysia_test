FROM oven/bun

WORKDIR /app

RUN apt-get update && apt-get install -y git

COPY package.json .
COPY bun.lockb .
  
RUN bun install

CMD ["bun", "run", "dev-migrate"]

EXPOSE 3000
# Lactose

Lactose is a fully web-based offline first markdown note-taking application that is designed to be simple to use and secure.
By default lactose does not require you to create an account or authenticate to use the service and all your notes are stored in your browser's `IndexedDB`

**Creating an Account** provides you with the ability to sync notes across devices.
All notes, no matter if created by an authenticated user or not are end-to-end encrypted and cannot be read by anyone other than the allowed parties.

_Additional benefits of an Account include_:

- Ability to share notes with others.
- Start with note templates by other users.
- Additional AI powered features.

## Technologies used

- Lactose is using [Milkdown](https://milkdown.dev) as it's main `WYSIWYG` editor.
- For it's Markdown source view [Codemirror 6](https://codemirror.net) is used.
- Collaborative edting is made possible with the help of [Y.js](https://yjs.dev/)
- AI features are taking advantage of the [OpenAI API](https://platform.openai.com)

## Development Stack

- Fullstack Framework [NEXT.js](https://nextjs.org/)
- CSS Framework [TailwindCSS](https://tailwindcss.com)
- Database ORM [Prisma](https://prisma.io)
- Database [PostgreSQL](https://www.postgresql.org/)

### This project is currently in a very early stage of development.

At any point in development the most recent production deployment can be found at [here](https://lactose.app). Keep in mind that some of the features mentioned above are planned but not implemented yet.

## Contributing

if you wish to contribute please don't hestiate to reach out to me before submitting your pull request. [e-mail me here](mailto:syntaxbullet@protonmail.com).

A previous implementation of the MVP written with SvelteKit can be found [here](https://github.com/lactoseapp/lactose-old)

If you like what I am doing or have any suggestions or ideas feel free to reach out to me via the e-mail linked above.

### Running a local development environment using `Docker` and `docker-compose`

Requirements:

- docker
- docker-compose

To set up a local development environment you can use the provided `docker-compose.yml` file.
The following command will start a local development environment with a postgres database and a next.js server.

```bash
docker-compose up
```

The next.js server will be available at `localhost:3000`

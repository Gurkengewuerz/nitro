# Nitro

This is a fork of [billsonnn/nitro-react](https://github.com/billsonnn/nitro-react) `dev` branch and [billsonnn/nitro-renderer](https://github.com/billsonnn/nitro-renderer) `main` branch. It was converted to a monorepository using Nx workspaces and features of [oobjectt](https://github.com/oobjectt) [duckietm](https://github.com/duckietm) [Gurkengewuerz](https://github.com/Gurkengewuerz) are merged.

## Installation

-   Clone Nitro
    -   `git clone https://git.gurkengewuerz.de/nitro/nitro.git`
-   Install the dependencies
    -   `npm install`
-   Rename a few files
    -   Rename `apps/frontend/public/renderer-config.json.example` to `apps/frontend/public/renderer-config.json` and edit it
    -   Rename `apps/frontend/public/ui-config.json.example` to `apps/frontend/public/ui-config.json` and edit it

## Usage

-   To use Nitro you need `.nitro` assets generated, see [nitro-converter](https://git.krews.org/nitro/nitro-converter) for instructions.
-   See [Morningstar Websockets](https://git.krews.org/nitro/ms-websockets) for instructions on configuring websockets on your server.

See [Gurkengewuerz/nitro-docker](https://git.gurkengewuerz.de/nitro/nitro-docker) for a complete setup.

## Development server

Run `nx serve frontend` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Learn more about a Nx workspace

Visit the [Nx Documentation](https://nx.dev) to learn more.

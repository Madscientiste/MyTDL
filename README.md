# React TODO List App

## Overview

This is a simple TODO list app built with React and Django.

## Getting Started

### Prerequisites

Before running the app, make sure you have the following installed:

- Docker
- Node.js
- npm (Node Package Manager)

### Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/Madscientiste/MyTDL
```

2. Navigate to the project directory:

```bash
cd MyTDL
```

3. Install dependencies:

```bash
npm install
```

### Running for development ( or preview )

Start the vite development server using `npm run dev`

Now you can either:

- Set `VITE_ENABLE_FAKE_BACKEND=true` inside `.env.local`, use the mocked backend in the browser
- Run `docker compose up -d` to run the django backend (prefered as it handle the sorting)

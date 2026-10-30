# Installation

## Prerequisites

The ACM@NCSU website is built using [Astro](https://astro.build/) and the [Yarn](https://classic.yarnpkg.com/en/) package manager.

Before getting started, make sure you have:

- **Node.js** – [Installation Guide](https://nodejs.org/en/download)
- **Yarn** – [Installation Guide](https://classic.yarnpkg.com/en/docs/install)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ACM-NCSU/ACM-NCSU.github.io.git
cd ACM-NCSU.github.io
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Run the development server

```bash
yarn dev
```

The website will run locally. Open the URL shown in your terminal to view it.

### 4. Build for production

```bash
yarn build
```

---

# Contributing

We welcome contributions from members of the ACM Tech Committee!

If you have been added as a collaborator to the repository, you can work directly with branches instead of creating a fork.

## Contribution Workflow

### 1. Clone the repository

If you have not already cloned the repository:

```bash
git clone https://github.com/ACM-NCSU/ACM-NCSU.github.io.git
cd ACM-NCSU.github.io
```

### 2. Make sure your local `main` branch is up to date

Before starting a new task:

```bash
git checkout main
git pull origin main
```

### 3. Create a branch for your task

```bash
git checkout -b feature/your-feature-name
```

Use a descriptive branch name based on what you are working on.

Examples:

```bash
git checkout -b feature/officers-page
git checkout -b feature/upcoming-events
git checkout -b feature/corporate-partners
git checkout -b fix/navigation-bug
git checkout -b design/homepage-redesign
```

### 4. Make your changes

Make the necessary changes and test them locally using:

```bash
yarn dev
```

### 5. Commit your changes

Once your changes are ready:

```bash
git add .
git commit -m "Add: event calendar component"
```

Use clear and descriptive commit messages.

Examples:

```text
Add: upcoming events section
Update: officer information
Fix: mobile navigation
Design: update homepage styling
```

### 6. Push your branch

```bash
git push -u origin feature/your-feature-name
```

For future updates to the same branch, you can simply run:

```bash
git push
```

### 7. Open a Pull Request

Go to the GitHub repository and open a Pull Request from your branch into `main`.

In your Pull Request:

- Briefly describe what you changed.
- Make sure your changes work locally before submitting.

Please do **not** push changes directly to the `main` branch.

Once your Pull Request has been reviewed and approved, it can be merged into `main`.

---

## Before Starting a New Task

Always update your local `main` branch first:

```bash
git checkout main
git pull origin main
```

Then create a new branch:

```bash
git checkout -b feature/new-feature-name
```

This helps avoid merge conflicts and keeps everyone's work organized.

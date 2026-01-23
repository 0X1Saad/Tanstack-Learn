<div align="center">

# 🚀 Tanstack-Learn

**A Modern Full-Stack TypeScript Learning Project**

[![TypeScript](https://img.shields.io/badge/TypeScript-99. 1%25-blue? logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TanStack Router](https://img.shields.io/badge/TanStack-Router-orange)](https://tanstack.com/router)
[![React 19](https://img.shields.io/badge/React-19.2. 0-61dafb?logo=react)](https://react.dev)
[![Prisma](https://img.shields.io/badge/Prisma-7.2.0-2D3748?logo=prisma)](https://www.prisma.io/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

*An exploration of modern web development with TanStack ecosystem, AI integration, and full-stack TypeScript*

[Getting Started](#-getting-started) • [Features](#-features) • [Documentation](#-documentation) • [Contributing](#-contributing)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Branches](#-branches)
- [Database Setup](#-database-setup)
- [Styling](#-styling)
- [Routing](#-routing)
- [Authentication](#-authentication)
- [AI Integration](#-ai-integration)
- [Testing](#-testing)
- [Contributing](#-contributing)
- [Author](#-author)

---

## 🎯 About

**Tanstack-Learn** is a comprehensive learning project showcasing modern full-stack development practices with TypeScript.  This repository demonstrates the integration of cutting-edge technologies including TanStack Router, Prisma ORM, Better Auth, AI SDK with OpenRouter, and shadcn/ui components.

Built with **99.1% TypeScript**, this project emphasizes type safety, developer experience, and modern React patterns including React 19 features, server-side rendering capabilities, and AI-powered functionalities.

---

## ✨ Features

- 🎯 **File-based Routing** with TanStack Router
- 🔐 **Authentication System** powered by Better Auth
- 🤖 **AI Integration** using AI SDK with OpenRouter
- 🗄️ **Database Management** with Prisma ORM & PostgreSQL
- 🎨 **Modern UI Components** with shadcn/ui & Radix UI
- 🌓 **Dark Mode Support** via next-themes
- 📱 **Responsive Design** with Tailwind CSS v4
- ⚡ **Lightning Fast** development with Vite
- 🧪 **Testing Setup** with Vitest & Testing Library
- 🔄 **Form Management** using TanStack Form with Zod validation
- 📊 **Developer Tools** integrated (React DevTools, Router DevTools)
- 🔥 **Web Crawling** capabilities with Firecrawl
- 🎭 **Component Variants** using CVA (class-variance-authority)

---

## 🛠️ Tech Stack

### Core
- **Framework:** React 19.2.0
- **Language:** TypeScript 5.7.2
- **Build Tool:** Vite 7.1.7
- **Monorepo:** pnpm workspace

### TanStack Ecosystem
- `@tanstack/react-router` - Type-safe routing
- `@tanstack/react-start` - Full-stack React framework
- `@tanstack/react-form` - Powerful form management
- `@tanstack/react-devtools` - Enhanced debugging

### Database & ORM
- Prisma 7.2.0
- PostgreSQL Adapter (`@prisma/adapter-pg`)

### Authentication
- Better Auth 1.4.13

### AI & ML
- Vercel AI SDK 6.0.43
- OpenRouter AI Provider
- Firecrawl for web scraping

### UI & Styling
- Tailwind CSS 4.0.6
- shadcn/ui Components
- Radix UI Primitives
- Base UI React
- Lucide Icons
- Sonner for toast notifications

### Development Tools
- ESLint with TanStack config
- Prettier
- Vitest for testing
- React Testing Library
- dotenv-cli for environment management

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended package manager)
- PostgreSQL database

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/itsmesaadali/Tanstack-Learn.git
   cd Tanstack-Learn
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your database credentials and API keys
   ```

4. **Initialize the database**
   ```bash
   pnpm db:generate
   pnpm db:push
   ```

5. **Start the development server**
   ```bash
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
Tanstack-Learn/
├── src/                    # Source code
│   ├── routes/            # File-based routes
│   └── ... 
├── prisma/                # Database schema & migrations
├── public/                # Static assets
├── . vscode/              # VS Code settings
├── components. json       # shadcn/ui configuration
├── prisma. config.ts      # Prisma configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── pnpm-workspace.yaml   # Monorepo workspace config
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server on port 3000 |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm test` | Run tests with Vitest |
| `pnpm lint` | Lint code with ESLint |
| `pnpm format` | Format code with Prettier |
| `pnpm check` | Format & lint (auto-fix) |
| `pnpm db:generate` | Generate Prisma client |
| `pnpm db:push` | Push schema changes to database |
| `pnpm db:migrate` | Run database migrations |
| `pnpm db:studio` | Open Prisma Studio |
| `pnpm db:seed` | Seed database with initial data |
| `pnpm db:pull` | Pull schema from existing database |

---

## 🌿 Branches

This repository contains multiple feature branches for different learning modules:

| Branch | Description | Status |
|--------|-------------|--------|
| `main` | Production-ready code | ✅ Active |
| `feature/Get-Items` | Item fetching implementation | 🔨 Development |
| `feature/LLM-add` | LLM/AI integration features | 🔨 Development |
| `feature/auth-error` | Authentication error handling | 🔨 Development |
| `copilot/create-readme-file` | GitHub Copilot assisted README | 🤖 Automated |
| `copilot/sub-pr-10` | GitHub Copilot sub-task | 🤖 Automated |
| `revert-12-copilot/create-readme-file` | Revert branch | ↩️ Historical |

---

## 🗄️ Database Setup

This project uses **Prisma ORM** with PostgreSQL. 

### Quick Setup

1. **Configure database connection** in `.env`:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/tanstack_learn"
   ```

2. **Generate Prisma Client**: 
   ```bash
   pnpm db:generate
   ```

3. **Push schema to database**:
   ```bash
   pnpm db:push
   ```

4. **Open Prisma Studio** (Database GUI):
   ```bash
   pnpm db:studio
   ```

### Migrations

For production environments, use migrations:
```bash
pnpm db:migrate
```

---

## 🎨 Styling

### Tailwind CSS v4

This project uses the latest **Tailwind CSS v4** with:
- Vite plugin integration (`@tailwindcss/vite`)
- Custom animations (`tw-animate-css`)
- Class merging utilities (`tailwind-merge`)

### Component Libraries

- **shadcn/ui** - Beautifully designed components
- **Radix UI** - Accessible component primitives
- **Base UI** - Foundational UI components
- **Lucide Icons** - Consistent icon set

### Theming

Dark mode support via `next-themes`:
```tsx
import { ThemeProvider } from 'next-themes'

<ThemeProvider attribute="class">
  <App />
</ThemeProvider>
```

---

## 🧭 Routing

This project uses **TanStack Router** with file-based routing.

### Adding a New Route

Create a new file in `src/routes/`:
```tsx
// src/routes/about.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutComponent
})

function AboutComponent() {
  return <div>About Page</div>
}
```

### Navigation

```tsx
import { Link } from '@tanstack/react-router'

<Link to="/about">About</Link>
```

### Data Loading

Use built-in loaders:
```tsx
export const Route = createFileRoute('/posts')({
  loader: async () => {
    const posts = await fetchPosts()
    return { posts }
  },
  component:  PostsComponent
})
```

---

## 🔐 Authentication

Authentication is handled by **Better Auth**, providing:
- Email/Password authentication
- Social OAuth providers
- Session management
- Secure token handling

### Usage

```tsx
import { useAuth } from 'better-auth/react'

function ProfileComponent() {
  const { user, signIn, signOut } = useAuth()
  
  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user. name}</p>
          <button onClick={signOut}>Sign Out</button>
        </>
      ) : (
        <button onClick={signIn}>Sign In</button>
      )}
    </div>
  )
}
```

---

## 🤖 AI Integration

This project integrates AI capabilities using: 

### Vercel AI SDK + OpenRouter

```tsx
import { useChat } from '@ai-sdk/react'
import { openrouter } from '@openrouter/ai-sdk-provider'

function ChatComponent() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat'
  })

  return (
    <div>
      {messages.map(m => (
        <div key={m.id}>{m.content}</div>
      ))}
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleInputChange} />
      </form>
    </div>
  )
}
```

### Web Scraping with Firecrawl

```typescript
import FirecrawlApp from '@mendable/firecrawl-js'

const app = new FirecrawlApp({ apiKey: process.env.FIRECRAWL_API_KEY })
const result = await app.scrapeUrl('https://example.com')
```

---

## 🧪 Testing

Testing is set up with **Vitest** and **React Testing Library**. 

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test -- --watch

# Run tests with coverage
pnpm test -- --coverage
```

### Example Test

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByText('Welcome')).toBeInTheDocument()
  })
})
```

---

## 📚 Documentation

- [TanStack Router Docs](https://tanstack.com/router/latest)
- [TanStack Query Docs](https://tanstack.com/query/latest)
- [TanStack Form Docs](https://tanstack.com/form/latest)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Better Auth Docs](https://better-auth.com)
- [Vercel AI SDK](https://sdk.vercel.ai/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

This project uses:
- **ESLint** with TanStack config for linting
- **Prettier** for code formatting

Run `pnpm check` before committing to ensure code quality.

---

## 👨‍💻 Author

**Saad Ali**

- GitHub: [@itsmesaadali](https://github.com/itsmesaadali)
- GitHub Alt: [@0X1Saad](https://github.com/0X1Saad)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- [TanStack](https://tanstack.com) for the amazing ecosystem
- [Prisma](https://www.prisma.io) for database tooling
- [shadcn](https://ui.shadcn.com) for beautiful components
- [Vercel](https://vercel.com) for the AI SDK
- The open-source community

---

## 📊 Project Stats

- **Language Composition:** 99.1% TypeScript
- **Total Branches:** 7
- **Package Manager:** pnpm
- **Node Version:** 18+
- **Created:** January 2026

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ by [Saad Ali](https://github.com/itsmesaadali)

</div>

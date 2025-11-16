# Code Jelly

## Overview

**Code Jelly** is a modern, full-stack online Integrated Development Environment (IDE) designed to mirror the user experience of VS Code. It enables users to write and execute code with immediate feedback, including detailed success or error outputs. Beyond execution, it functions as a community hub where developers can share and interact with code snippets.

## Features

### Code Execution & Language Access

- Users can write and run code directly inside the online editor.
- Output includes detailed error explanations when execution fails.
- Execution runs securely inside isolated Docker containers using the Piston API.
- **Free Plan:** Allows execution of JavaScript only.
- **Pro Plan:** Unlocks nine additional languages, including Python, Java, Go, C, and C++.

### Snippet Sharing & Community

- Snippets can be shared instantly with the community.
- Snippets appear on a dedicated page showing owner, language, and date.
- Users can star snippets; snippet creators can delete their own.
- Snippets can be filtered by programming language or searched by keywords.
- View options include both list and grid layouts.

### Snippet Details and Interaction

- Selecting a snippet opens a detail page with a read-only editor containing the full code.
- Code can be copied but not modified in this view.
- Comments can include plain text or formatted code blocks.
- A preview feature allows users to view formatting before posting.

### User Profiles & History

- Profiles show aggregate statistics, including total executions and executions in the past 24 hours.
- Language usage metrics and starred snippets are displayed.
- Full code execution history is available, including both code and output, with pagination.
- All starred snippets appear on the profile page.

### Editor Customization

- Users can adjust editor font size using a slider.
- Themes available include VS Code Dark, VS Code Light, GitHub Dark, Monokai, and Solarized Dark.

## Technology Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| Framework | Next.js 15 (React) | Main React framework, pinned to version 15.0.3 for stability. |
| Database | Convex | Real-time, type-safe backend handling functions, storage, and live updates. |
| Authentication | Clerk | Provides authentication with support for Email, Google, and GitHub. |
| Styling | Tailwind CSS | Utility-based CSS framework for styling. |
| Payments | Lemon Squeezy | Processes and verifies payments for Pro access. |
| IDE | Monaco Editor (React) | Core code editor used by VS Code. |
| Execution API | Piston API | Executes code securely inside isolated Docker containers. |
| State Management | Zustand | Lightweight state management solution. |
| Animation | Framer Motion | Provides motion and transitions for UI components. |

## Architecture and Integration Notes

### Clerk & Convex Integration

Clerk manages user authentication. A webhook is used to sync Clerk users with the Convex backend. When a new user is created, their data (ID, email, name) is stored in the Convex `users` table to maintain consistency.

### Payment Handling with Lemon Squeezy

When a user purchases the Pro Plan, Lemon Squeezy sends an `order.created` webhook to the backend. After validation, a Convex mutation updates that user’s `isPro` status to `true`.

### Convex Functions

Convex functions are divided into three categories:

1. **Queries** – Fetching data (e.g., retrieving snippets or user statistics).  
2. **Mutations** – Creating, updating, or deleting data (e.g., saving executions, creating snippets).  
3. **Actions** – Communicating with external services (Lemon Squeezy, OpenAI) or handling HTTP-based events.

## Getting Started

### Prerequisites

- Node.js and npm (or yarn/pnpm)
- VS Code
- Accounts for Clerk and Convex

### Local Development Setup

1. Create a Next.js application configured with TypeScript, ESLint, and Tailwind CSS.  
2. Install core dependencies such as Monaco Editor, Zustand, Framer Motion, Lucide React, and React Hot Toast.  
3. Install and initialize Convex:
   ```bash
   npm install convex
   npx convex dev

4.	Ensure two terminal sessions remain active: one for the Next.js server and one for the Convex backend.
5.	Define Convex schema tables (users, codeExecutions, snippets, comments, stars).
6.	Configure Clerk authentication, environment variables, and provider wrappers.
7.	Set up webhooks for Clerk and Lemon Squeezy pointing to the Convex deployment URL for synchronization.


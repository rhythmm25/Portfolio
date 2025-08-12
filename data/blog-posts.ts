export interface BlogPost {
  id: string
  title: string
  slug: string
  date: string
  summary: string
  content: string
  author: string
  tags: string[]
  coverImage: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Responsive UIs with Tailwind CSS",
    slug: "building-responsive-uis-with-tailwind-css",
    date: "2023-05-15",
    summary: "Learn how to create responsive user interfaces efficiently using Tailwind CSS utility classes.",
    content: `
# Building Responsive UIs with Tailwind CSS

Tailwind CSS has revolutionized the way developers approach styling in web applications. Instead of writing custom CSS, Tailwind provides utility classes that can be composed to build any design directly in your markup.

## Why Tailwind CSS?

- **Utility-First**: Build complex designs without leaving your HTML
- **Responsive**: Built-in responsive design utilities
- **Customizable**: Easily extend the default configuration
- **Performance**: Only include the CSS you actually use in production

## Getting Started

To get started with Tailwind CSS, you need to install it via npm:

\`\`\`bash
npm install tailwindcss
\`\`\`

Then, create a configuration file:

\`\`\`bash
npx tailwindcss init
\`\`\`

## Responsive Design with Tailwind

Tailwind makes responsive design straightforward with its responsive modifiers:

\`\`\`html
<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- This div will be full width on small screens, 
       half width on medium screens, 
       and one-third width on large screens -->
</div>
\`\`\`

## Conclusion

Tailwind CSS provides a powerful set of tools for building responsive UIs quickly and efficiently. By leveraging its utility classes, you can create complex designs without writing custom CSS.
    `,
    author: "Rhythm Aggarwal",
    tags: ["Tailwind CSS", "Frontend", "Responsive Design"],
    coverImage: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "2",
    title: "State Management in React: Context API vs. Redux",
    slug: "state-management-in-react-context-api-vs-redux",
    date: "2023-06-22",
    summary: "A comparison of different state management approaches in React applications.",
    content: `
# State Management in React: Context API vs. Redux

Managing state in React applications can be challenging as your application grows. In this article, we'll compare two popular state management solutions: React's built-in Context API and Redux.

## React Context API

The Context API is built into React and provides a way to pass data through the component tree without having to pass props down manually at every level.

### Pros:
- Built into React, no additional dependencies
- Simpler setup for small to medium applications
- Less boilerplate code

### Cons:
- Can lead to performance issues with frequent updates
- Less developer tools compared to Redux
- Not as scalable for very complex state

## Redux

Redux is a predictable state container for JavaScript apps, commonly used with React.

### Pros:
- Predictable state management
- Powerful developer tools
- Middleware support for async operations
- Well-suited for complex applications

### Cons:
- Steeper learning curve
- More boilerplate code
- Might be overkill for simple applications

## When to Use Each

- **Context API**: Great for small to medium applications with simple state requirements
- **Redux**: Better for large applications with complex state management needs

## Conclusion

Both the Context API and Redux have their place in React development. The best choice depends on your application's complexity, team familiarity, and specific requirements.
    `,
    author: "Rhythm Aggarwal",
    tags: ["React", "State Management", "Redux", "Context API"],
    coverImage: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "3",
    title: "Getting Started with Next.js 13",
    slug: "getting-started-with-nextjs-13",
    date: "2023-07-10",
    summary: "Explore the new features and improvements in Next.js 13 and how to use them in your projects.",
    content: `
# Getting Started with Next.js 13

Next.js 13 introduces several exciting features and improvements that enhance the developer experience and application performance. Let's explore what's new and how to get started.

## Key Features in Next.js 13

### App Directory (Beta)

The new \`app/\` directory introduces a new way to organize your application with:

- **Layouts**: Shared UI between multiple pages
- **Server Components**: React components that render on the server
- **Streaming**: Progressively render UI from the server

### Turbopack (Alpha)

Turbopack is a new Rust-based bundler that provides:

- Up to 700x faster updates than Webpack
- Optimized for JavaScript and TypeScript
- Incremental computation for maximum performance

### Improved Image Component

The Image component now:

- Supports native lazy loading
- Automatically optimizes images
- Prevents layout shift with proper sizing

## Getting Started

Create a new Next.js 13 project:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

## Migrating from Next.js 12

If you're migrating from Next.js 12, you can:

1. Update your dependencies
2. Gradually adopt the new app directory
3. Move your pages to the new structure

## Conclusion

Next.js 13 brings significant improvements to the framework, making it even more powerful for building modern web applications. The new app directory and server components are particularly exciting for creating more performant and maintainable applications.
    `,
    author: "Rhythm Aggarwal",
    tags: ["Next.js", "React", "Web Development"],
    coverImage: "/placeholder.svg?height=400&width=600",
  },
]

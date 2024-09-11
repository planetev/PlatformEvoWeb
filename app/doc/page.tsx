import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { BookmarkIcon, ChevronDownIcon, CreditCardIcon, FilePenIcon, LayoutGridIcon, MoonIcon, MountainIcon, NotebookTabsIcon, PanelLeftIcon, SearchIcon, TableIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <>
    {/* <div className="flex min-h-screen w-full flex-col bg-background">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-14 items-center justify-between px-2 sm:px-6 md:h-16">
          <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="hidden sm:inline">Acme UI Docs</span>
          </Link>
          <nav className="hidden items-center gap-4 sm:flex">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
              Docs
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
              Components
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
              Themes
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
              Resources
            </Link>
          </nav>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <SearchIcon className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <MoonIcon className="h-5 w-5" />
              <span className="sr-only">Toggle dark mode</span>
            </Button>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 flex-col border-r bg-background p-6 md:flex">
          <nav className="space-y-1">
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              <LayoutGridIcon className="h-4 w-4" />
              Buttons
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              <FilePenIcon className="h-4 w-4" />
              Forms
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              <CreditCardIcon className="h-4 w-4" />
              Cards
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              <TableIcon className="h-4 w-4" />
              Tables
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              <PanelLeftIcon className="h-4 w-4" />
              Sidebar
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              <ChevronDownIcon className="h-4 w-4" />
              Dropdown
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              <NotebookTabsIcon className="h-4 w-4" />
              Tabs
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              <BookmarkIcon className="h-4 w-4" />
              Pagination
            </Link>
          </nav>
        </aside>
        <main className="flex-1 p-6 md:p-10">
          <div className="prose max-w-3xl">
            <h1>Acme UI Documentation</h1>
            <p>
              Welcome to the Acme UI Documentation. Here youll find detailed information and examples for all the UI
              components in our library.
            </p>
            <h2>Buttons</h2>
            <p>
              Buttons are the primary way users interact with your application. We provide a variety of button styles
              and sizes to fit your needs.
            </p>
            <Card>
              <CardHeader>
                <CardTitle>Button Examples</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
              </CardContent>
            </Card>
            <h2>Forms</h2>
            <p>
              Forms are used to collect user input. We provide a set of form components to make building forms easy.
            </p>
            <Card>
              <CardHeader>
                <CardTitle>Form Example</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <div className="grid gap-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="grid gap-1">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="grid gap-1">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" />
                  </div>
                  <Button type="submit">Submit</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
      <footer className="border-t bg-background py-6">
        <div className="container flex items-center justify-between px-4 sm:px-6">
          <p className="text-sm text-muted-foreground">&copy; 2024 Acme Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div> */}
<div className="flex min-h-screen w-full flex-col bg-background">
  <header className="sticky top-0 z-40 border-b bg-background shadow-md">
    <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 md:h-18">
      <Link href="#" className="flex items-center gap-2 font-semibold text-primary hover:text-primary-foreground" prefetch={false}>
        <MountainIcon className="h-6 w-6 text-primary" />
        <span className="hidden sm:inline">Acme UI Docs</span>
      </Link>
      <nav className="hidden items-center gap-6 sm:flex">
        <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary" prefetch={false}>
          Docs
        </Link>
        <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary" prefetch={false}>
          Components
        </Link>
        <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary" prefetch={false}>
          Themes
        </Link>
        <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary" prefetch={false}>
          Resources
        </Link>
      </nav>
      <div className="ml-auto flex items-center gap-4">
        <Button variant="ghost" size="icon" className="h-10 w-10 p-0">
          <SearchIcon className="h-5 w-5 text-primary" />
          <span className="sr-only">Search</span>
        </Button>
        <Button variant="ghost" size="icon" className="h-10 w-10 p-0">
          <MoonIcon className="h-5 w-5 text-primary" />
          <span className="sr-only">Toggle dark mode</span>
        </Button>
      </div>
    </div>
  </header>
  <div className="flex flex-1">
    <aside className="hidden w-64 flex-col border-r bg-muted p-6 md:flex">
      <nav className="space-y-2">
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          prefetch={false}
        >
          <LayoutGridIcon className="h-5 w-5" />
          Buttons
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          prefetch={false}
        >
          <FilePenIcon className="h-5 w-5" />
          Forms
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          prefetch={false}
        >
          <CreditCardIcon className="h-5 w-5" />
          Cards
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          prefetch={false}
        >
          <TableIcon className="h-5 w-5" />
          Tables
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          prefetch={false}
        >
          <PanelLeftIcon className="h-5 w-5" />
          Sidebar
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          prefetch={false}
        >
          <ChevronDownIcon className="h-5 w-5" />
          Dropdown
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          prefetch={false}
        >
          <NotebookTabsIcon className="h-5 w-5" />
          Tabs
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          prefetch={false}
        >
          <BookmarkIcon className="h-5 w-5" />
          Pagination
        </Link>
      </nav>
    </aside>
    <main className="flex-1 p-6 md:p-10 bg-background">
      <div className="prose max-w-3xl">
        <h1 className="text-3xl font-bold text-primary">Acme UI Documentation</h1>
        <p className="text-muted-foreground">
          Welcome to the Acme UI Documentation. Here your find detailed information and examples for all the UI components in our library.
        </p>
        <h2 className="text-2xl font-semibold">Buttons</h2>
        <p>
          Buttons are the primary way users interact with your application. We provide a variety of button styles and sizes to fit your needs.
        </p>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-primary">Button Examples</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </CardContent>
        </Card>
        <h2 className="text-2xl font-semibold">Forms</h2>
        <p>
          Forms are used to collect user input. We provide a set of form components to make building forms easy.
        </p>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-primary">Form Example</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid gap-6">
              <div className="grid gap-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Enter your message" />
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  </div>
  <footer className="border-t bg-muted py-6">
    <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
      <p className="text-sm text-muted-foreground">&copy; 2024 Acme Inc. All rights reserved.</p>
      <div className="flex items-center gap-4">
        <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary" prefetch={false}>
          Terms of Service
        </Link>
        <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary" prefetch={false}>
          Privacy Policy
        </Link>
        <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary" prefetch={false}>
          GitHub
        </Link>
      </div>
    </div>
  </footer>
</div>

    </>
  )
}

export default Page
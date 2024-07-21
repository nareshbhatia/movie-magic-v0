'use client';

import { movies } from './movies';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Dot, Film, Plus, Search } from 'lucide-react';
import { Fragment } from 'react';

export default function MoviesPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="h-14 flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <Film className="w-6 h-6" />
          <h1 className="text-xl font-bold">Movie Magic</h1>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="#" className="hover:text-accent" prefetch={false}>
              Movies
            </Link>
            <Link href="#" className="hover:text-accent" prefetch={false}>
              Watchlist
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>My Account</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="flex items-center gap-4 py-4 px-6">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-foreground/40" />
          <Input
            type="search"
            placeholder="Search movies..."
            className="pl-8 w-full rounded-md"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-40">
              Categories
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Categories</DropdownMenuLabel>
            <DropdownMenuItem>Action</DropdownMenuItem>
            <DropdownMenuItem>Comedy</DropdownMenuItem>
            <DropdownMenuItem>Drama</DropdownMenuItem>
            <DropdownMenuItem>Horror</DropdownMenuItem>
            <DropdownMenuItem>Sci-Fi</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-40">
              Certification
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Certification</DropdownMenuLabel>
            <DropdownMenuItem>G</DropdownMenuItem>
            <DropdownMenuItem>PG</DropdownMenuItem>
            <DropdownMenuItem>PG-13</DropdownMenuItem>
            <DropdownMenuItem>R</DropdownMenuItem>
            <DropdownMenuItem>NC-17</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex-1 overflow-auto grid px-4">
        {movies.map((movie) => (
          // these rows should have a fixed height of 56px
          <div
            className="flex items-center gap-x-4 bg-card py-2 rounded-md hover:bg-muted/50"
            key={movie.id}
          >
            <div className="flex justify-center items-center text-muted-foreground w-10 h-10">
              {movie.rank}
            </div>
            <img
              src={movie.image.url}
              alt={movie.name}
              className="w-10 h-10 object-cover"
            />
            <div className="flex-1">
              <p className="leading-5 text-accent-foreground">{movie.name}</p>
              <div className="flex items-center gap-x-1 text-muted-foreground">
                {movie.genres.map((genre, index) => (
                  <Fragment key={index}>
                    <p className="text-sm">{genre}</p>
                    {index < movie.genres.length - 1 && (
                      <Dot className="w-4 h-4" />
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

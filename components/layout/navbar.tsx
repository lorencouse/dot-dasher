'use client';
import { ChevronsDown, Github, Menu } from 'lucide-react';
import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { Separator } from '../ui/separator';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ToggleTheme } from './toogle-theme';
import Logo from './logo';
import UserMenu from '../user-menu';
import { Suspense } from 'react';

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: '/#services',
    label: 'Services',
  },
  {
    href: '/#testimonials',
    label: 'Testimonials',
  },
  {
    href: '/#contact',
    label: 'Contact',
  },
  {
    href: '/#faq',
    label: 'FAQ',
  },
];

const featureList: FeatureProps[] = [
  {
    title: 'Showcase Your Value ',
    description: 'Highlight how your product solves user problems.',
  },
  {
    title: 'Build Trust',
    description:
      'Leverages social proof elements to establish trust and credibility.',
  },
  {
    title: 'Capture Leads',
    description:
      'Make your lead capture form visually appealing and strategically.',
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className='shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-(--breakpoint-xl) top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card'>
      <Link href='/' className='font-bold text-lg flex items-center'>
        <Logo />
        Dot Dasher
      </Link>
      {/* <!-- Mobile --> */}
      <div className='flex items-center lg:hidden'>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className='cursor-pointer lg:hidden'
            />
          </SheetTrigger>

          <SheetContent
            side='left'
            className='flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary'
          >
            <div>
              <SheetHeader className='mb-4 ml-4'>
                <SheetTitle className='flex items-center'>
                  <Link href='/' className='flex items-center'>
                    <Logo />
                    Dot Dasher
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className='flex flex-col gap-2'>
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant='ghost'
                    className='justify-start text-base'
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className='flex-col sm:flex-col justify-start items-start'>
              <Suspense fallback={<div className='h-9' />}>
                <UserMenu />
              </Suspense>
              <Separator className='mb-2' />

              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className='hidden lg:block mx-auto'>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='bg-card text-base'>
              Features
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className='grid w-[600px] grid-cols-2 gap-5 p-4'>
                <Image
                  src='https://avatars.githubusercontent.com/u/75042455?v=4'
                  alt='RadixLogo'
                  className='h-full w-full rounded-md object-cover'
                  width={600}
                  height={600}
                />
                <ul className='flex flex-col gap-2'>
                  {featureList.map(({ title, description }) => (
                    <li
                      key={title}
                      className='rounded-md p-3 text-sm hover:bg-muted'
                    >
                      <p className='mb-1 font-semibold leading-none text-foreground'>
                        {title}
                      </p>
                      <p className='line-clamp-2 text-muted-foreground'>
                        {description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {routeList.map(({ href, label }) => (
            <NavigationMenuItem key={href}>
              <NavigationMenuLink asChild>
                <Link
                  href={href}
                  className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                >
                  {label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className='hidden lg:flex'>
        <Suspense fallback={<div className='h-9' />}>
          <UserMenu />
        </Suspense>
        <ToggleTheme />

        {/* <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
          <Link
            aria-label="View on GitHub"
            href="https://github.com/lorencouse/dot-dasher"
            target="_blank"
          >
            <Github className="size-5" />
          </Link>
        </Button> */}
      </div>
    </header>
  );
};

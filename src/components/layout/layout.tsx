import type { PropsWithChildren } from 'react'
import { Gradient } from '@/components/gradient'
import { cn } from '@/utils/cn'

function Layout({
  children,
  className,
}: PropsWithChildren<{
  className?: string
}>) {
  return (
    <div className="relative min-h-screen">
      {/* 🟧🟨🟩 Indian Flag Gradient Background */}
      <Gradient />

      {/* Main content wrapper */}
      <div
        className={cn(
          'relative z-10 mx-auto flex min-h-screen max-w-screen-2xl flex-col overflow-hidden',
          className,
        )}
      >
        <main className="flex-grow">{children}</main>
      </div>
    </div>
  )
}

export default Layout

import { cn } from '@/utils/cn'

export default function Gradient({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'fixed inset-0 -z-10 w-full h-full bg-cover bg-center bg-no-repeat',
        "bg-[url('/indianflag.jpg')]",
        className
      )}
    />
  )
}

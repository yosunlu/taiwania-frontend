
export default function Container({children} : any) {
  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto">{children}</div>
  )
}

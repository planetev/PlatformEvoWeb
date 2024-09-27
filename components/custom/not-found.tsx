
"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Sun, Zap, ChevronRight } from "lucide-react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export default function NotFound() {
 const [searchQuery, setSearchQuery] = useState("")

 const handleSearch = (e: React.FormEvent) => {
   e.preventDefault()
   // Implement search functionality here

 }

 return (
   <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-slate-800 p-4 overflow-hidden">
     <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.5),rgba(255,255,255,0.8))] -z-10" />
     <div className="max-w-4xl w-full text-center relative">
       <div className="mb-12 relative">
         <h1 className="text-[12rem] font-black text-slate-200 leading-none">404</h1>
         <div className="absolute inset-0 flex items-center justify-center">
           <div className="relative w-48 h-48">
             <Sun className="text-amber-400 w-48 h-48 absolute inset-0 animate-pulse" />
             <Zap className="text-sky-500 w-24 h-24 absolute inset-0 m-auto animate-bounce" />
           </div>
         </div>
       </div>

       <h2 className="text-4xl font-bold mb-4 text-slate-700">Oops! Yourve Gone Off the Grid</h2>
       <p className="text-xl mb-8 text-slate-600 max-w-2xl mx-auto">
         It seems your energy-efficient journey has taken an unexpected detour.
         Lets get you back on track to a brighter, cleaner future.
       </p>

       <form onSubmit={handleSearch} className="mb-12">
         <div className="flex w-full max-w-md mx-auto">
           <Input
             type="text"
             placeholder="Search our site..."
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
             className="rounded-l-full border-slate-300 focus:border-sky-500 focus:ring-sky-500"
           />
           <Button type="submit" className="rounded-r-full bg-sky-500 hover:bg-sky-600 text-white">
             <Search className="h-4 w-4 mr-2" />
             Search
           </Button>
         </div>
       </form>

       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
         {["Solar Panels", "EV Chargers", "Battery Storage", "Energy Savings"].map((item) => (
           <Link
             key={item}
             href={`/${item.toLowerCase().replace(" ", "-")}`}
             className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-slate-700 hover:text-sky-600"
           >
             <span className="text-lg font-semibold mb-2">{item}</span>
             <ChevronRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
           </Link>
         ))}
       </div>

       <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
         <Link href="/get-quote">
           Get Your Free Solar Quote
         </Link>
       </Button>
     </div>
   </div>
 )
}
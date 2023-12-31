import React from 'react'
import Books from './Books'
import BookForm from './BookForm'

export default function Layouts() {
    return (
        <main className="py-12 2xl:px-6">
            <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
                <Books />
                <BookForm />
            </div>
        </main>
    )
}

import {Given,When,Then, DataTable} from '@cucumber/cucumber'
import {expect} from 'chai'

interface Book {
    title: string
    author: string
}

let books: Book[] = []
let searchResult: Book[] = []

Given( 'I have the following books in the store',(DataTable) =>{
    books = DataTable.hashes()
})

When ('I search for the books by author {string}',(author: string) => {
    searchResult = books.filter(book => book.author === author)
})

Then ('I find {int} books', function(expectedCount: number) {
    expect(searchResult.length).to.equal(expectedCount)
    console.log(searchResult)
})
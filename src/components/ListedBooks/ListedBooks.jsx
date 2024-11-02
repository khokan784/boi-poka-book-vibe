import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../utility/AddToDB';
import Book from '../Book/Book';

const ListedBooks = () => {
    const allBooks = useLoaderData();
    const [readList, setReadList] = useState([])
    const [sort, setSort] = useState('')
    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        console.log(storedReadList, storedReadListInt, allBooks)
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId))
        setReadList(readBookList);
    }, [])

    const handleSort = sortType => {
        setSort(sortType);
        if (sort === 'number of page') {
            const sortReadList = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortReadList);
        }
        if (sort === 'rating') {
            const sortReadList = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortReadList);
        }
    }


    return (
        <div>
            <h3 className="text-3xl my-8">Listed Books</h3>
            <div className="dropdown mb-8">
                <div tabIndex={0} role="button" className="btn m-1">
                    {sort ? ` ${sort}` : "Sort By"}
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleSort('Rating')}><a>Rating</a></li>
                    <li onClick={() => handleSort('number of page')}><a>Number of page</a></li>
                </ul>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books I read {readList.length}</h2>
                    {
                        readList.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>My wish list</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;
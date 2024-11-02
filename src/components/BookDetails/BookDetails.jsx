import { useLoaderData, useParams } from "react-router-dom";
import { AddToStoredReadList } from "../../utility/AddToDB";

const BookDetails = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId)

    const data = useLoaderData();
    const book = data.find(book => book.bookId === id);
    const { image, bookId: currentBookId, bookName, author, review } = book;

    const handleMarkAsRead = (id) => {
        
        AddToStoredReadList(id);
    }



    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={image}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div className="flex-col space-y-4">
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <p className="text-2xl text-gray-500">By: {author}</p>
                    <p><span className="font-bold">Review:</span> {review}</p>
                    <div>
                        <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-outline mr-4">Mark As Read</button>
                        <button className="btn btn-accent">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
        // <div className="mr-12">
        //     <h2>book details: {bookId}</h2>
        //     <img className="w-36" src={image} alt="" />
        //     <br />
        //     
        // </div>
    );
};

export default BookDetails;
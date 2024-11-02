import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, image, bookName, author, tags, category,rating ,totalPages } = book
    return (
        <Link to={`books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-xl p-6">
                <figure className="bg-[#F3F3F3] py-8 rounded-2xl">
                    <img
                        src={image}
                        className="h-[166px]"
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className="flex gap-6 justify-center">
                        {
                            tags.map((tag,index) => <button key={index}  className="btn btn-xs text-green-500">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By:{author}</p>
                    <div className="border-t-2 border-dashed"></div>
                    <div className="card-actions justify-end justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div>rating:{rating}</div>
                        <div>totalPages:{totalPages}</div>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-100" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;
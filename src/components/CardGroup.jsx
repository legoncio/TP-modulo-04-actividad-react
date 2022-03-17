import Card from "./Card";
import {cards} from "../data/cards";

function CardGroup() {
    return (
        <div className="container-xl my-4">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4 mb-5">
                {cards.map(card => 
                    <Card 
                        key={card.user}
                        user={card.user} 
                        description={card.description}
                        updated={card.updated} 
                        url={card.url} 
                        comments={card.comments} 
                        likes={card.likes}
                    />
                )}
            </div>
        </div>
    )
}

export default CardGroup
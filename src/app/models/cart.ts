export class CartItem{
    constructor
    (
        public id:number,
        public product: {
            name: string,
            description: string,
            price: number,
            category: string,
            imageUrl: string,
        },
        public quantity: number,
        public price: number,
    )
    {}
}

export class Cart{
    constructor
    (
        public userId: string,
        public items: CartItem[],
        public totalPrice: number,
    ) {}
    
}


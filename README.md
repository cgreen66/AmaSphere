# AmaSphere: An Amazon Clone with Enhanced Features 

[Live Link](https://amasphere.onrender.com/)

![Alt Text](https://amasphere-seeds1.s3.amazonaws.com/Screenshot+2024-01-26+at+12.49.59+PM.png)


## Introduction
Welcome to AmaSphere, a sophisticated clone of the well-known Amazon website. AmaSphere offers a seamless online shopping experience with an intuitive interface, robust product catalog, efficient user authentication, and a fully functional shopping cart.

## Technologies Utilized
AmaSphere leverages a range of cutting-edge technologies for a full-stack experience:

- **Frontend:** React.js with Redux for state management
- **Backend:** Ruby on Rails
- **Database:** PostgreSQL for structured data storage
- **Asset Hosting:** AWS S3 for reliable and scalable storage solutions
- **Styling:** CSS and HTML for a responsive and attractive design

## Core Features

### Product Catalog and Browsing
AmaSphere's product page allows users to browse through a diverse range of products, each showcased with detailed descriptions and high-resolution images hosted on AWS S3.

![Alt Text](https://amasphere-seeds1.s3.amazonaws.com/Screenshot+2024-01-26+at+12.41.30+PM.png)

```javascript
const Product = ({ product }) => {
    const dispatch = useDispatch();
    const formattedPrice = parseFloat(product.price).toFixed(2);
  
    const handleAddToCart = () => {
      dispatch(addItemToCart({ id: product.id, name: product.name, quantity: 1, price: product.price, photo_urls: product.photo_urls }));
    };
  
    const imageUrl = product.photo_urls?.[0] || ducati;


    return (
      <Link to={`/products/${product.id}`} className="product-link">
        <div className="product">
          <div className="product-image">
            <img src={imageUrl} alt={product.name} />
          </div>
          <div className="product-details">
            <h2 className="product-title">{product.name}</h2>
            <div className="product-detail-reviews">
              <span className="product-detail-rating">⭐⭐⭐⭐⭐</span> 
              <span className="product-review-count">100 reviews</span>
            </div>
            <p className="product-brand">{product.brand}</p>
            <div className="product-price">${formattedPrice}</div>
            <div className="product-rating"></div>
          </div>
        </div>
      </Link>
    );
  };
```

## Dynamic Shopping Cart
The shopping cart on AmaSphere provides a dynamic user experience, where users can add, update, and remove items seamlessly.

```javascript
const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.push(newItem);
      }
    },
    removeItemFromCart: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.findIndex((item) => item.id === itemId);
      if (itemIndex !== -1) {
        state.splice(itemIndex, 1);
      }
    },
    updateItemQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const item = state.find((item) => item.id === itemId);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});
```

## User Authentication
Secure and efficient user authentication is a hallmark of AmaSphere, ensuring a safe and personalized shopping experience for each user.

<img src="https://amasphere-seeds1.s3.amazonaws.com/Screenshot+2024-01-26+at+12.51.11+PM.png" alt="Alt Text" width="400">

```ruby
class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password']

  def create
    @user = User.new(user_params)
    
    if @user.save
      login!(@user)
      render :show
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
```

# Brand Categorization
AmaSphere offers an organized brand categorization feature, enabling users to browse products based on specific brands.

```javascript
const BrandProducts = () => {
  const [products, setProducts] = useState([]);
  const { brandName } = useParams(); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/products/brand/${brandName}`);
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          console.error('Failed to fetch products');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [brandName]);

  if (products.length === 0) {
    return <div>No products found for {brandName}.</div>;
  }

  return (
    <div className="products-container">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
```

## Future Directions

- **Advanced Search Functionality:** To facilitate easier product discovery.
- **Personalized Recommendations:** Employing AI algorithms for tailored product suggestions.
- **Mobile Optimization:** Enhancing the mobile user experience.

## Conclusion

AmaSphere is more than just a project; it's a showcase of skill, passion, and dedication to the art of full-stack development. It is an evolving platform, and feedback and contributions are always welcome. Thank you for exploring AmaSphere!

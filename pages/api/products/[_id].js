import { products } from '../../../data/products'

export default function handler ({query: {_id}}, res) {
  const myProduct = products.find((prod) => prod._id === _id);
  if (myProduct) {
    res.status(200).json(myProduct);
  } else {
    res.status(404).json({message: `products ${_id} not found!`});
  }
}